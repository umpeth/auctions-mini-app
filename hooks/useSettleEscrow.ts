import { useCallback, useState, useEffect } from "react";
import { useWaitForTransactionReceipt } from "wagmi";
import { Address } from "viem";
import {
  useReadAffiliateEscrowPayer,
  useWriteAffiliateEscrowSettle,
} from "@/wagmi/generated";
import { useAccount } from "wagmi";
import { useBalance } from "wagmi";

interface SettleEscrowArgs {
  escrowAddress: Address;
  tokenAddress?: Address;
}

export interface SettleEscrowResult {
  settleEscrow: (args: SettleEscrowArgs) => Promise<void>;
  hash: `0x${string}` | undefined | null;
  isError: boolean;
  error: string | null;
  isLoading: boolean;
}

export function useSettleEscrow({
  escrowAddress,
  tokenAddress,
  onSuccess,
}: {
  escrowAddress: Address;
  tokenAddress?: Address;
  onSuccess?: (settleEscrowHash: `0x${string}`) => void;
}): SettleEscrowResult {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { address } = useAccount();

  // Get the payer (winning bidder)
  const {
    data: payer,
    isLoading: isLoadingPayer,
    isError: isErrorPayer,
    error: errorPayer,
  } = useReadAffiliateEscrowPayer();

  const {
    data: settleEscrowHash,
    writeContract: settleEscrowWriteContract,
    isPending: isSettlingEscrow,
    isError: isErrorSettlingEscrow,
    error: errorSettlingEscrow,
  } = useWriteAffiliateEscrowSettle();

  const { data: escrowBalance, isLoading: isLoadingEscrowBalance } = useBalance(
    {
      address: escrowAddress,
    },
  );

  const { data: settleEscrowReceipt, isLoading: isLoadingSettleEscrowReceipt } =
    useWaitForTransactionReceipt({
      hash: settleEscrowHash,
    });

  useEffect(() => {
    if (settleEscrowReceipt) {
      onSuccess?.(settleEscrowReceipt.transactionHash);
    }
  }, [settleEscrowReceipt, onSuccess]);

  useEffect(() => {
    if (
      isLoadingPayer ||
      isLoadingEscrowBalance ||
      isSettlingEscrow ||
      isLoadingSettleEscrowReceipt
    ) {
      setIsLoading(true);
    }
  }, [
    isLoadingPayer,
    isLoadingEscrowBalance,
    isSettlingEscrow,
    isLoadingSettleEscrowReceipt,
  ]);

  useEffect(() => {
    if (isErrorSettlingEscrow) {
      setError(errorSettlingEscrow?.message ?? "Failed to settle escrow");
    }
    if (isErrorPayer) {
      setError(errorPayer?.message ?? "Failed to get payer");
    }
  }, [isErrorSettlingEscrow, errorSettlingEscrow, isErrorPayer, errorPayer]);

  const settleEscrow = useCallback(async () => {
    setIsLoading(true);

    if (!payer) {
      throw new Error("Payer not found");
    }
    if (payer !== address) {
      throw new Error("You are not the payer");
    }

    /*     # Get the escrow balance
    if token_address is None or token_address == "0x0000000000000000000000000000000000000000":
        token_address = "0x0000000000000000000000000000000000000000"  # ETH
        escrow_balance = w3.eth.get_balance(escrow_address)
    else:
        token_contract = w3.eth.contract(address=token_address, abi=erc20_abi)
        escrow_balance = token_contract.functions.balanceOf(escrow_address).call()
     */
    try {
      // If tokenAddress is not provided, use zero address for ETH
      const finalTokenAddress =
        tokenAddress || "0x0000000000000000000000000000000000000000";

      await settleEscrowWriteContract({
        address: escrowAddress,
        args: [finalTokenAddress, escrowBalance?.value ?? BigInt(0)],
      });
    } catch (err) {
      console.error("Error settling escrow:", err);
      const error =
        err instanceof Error ? err : new Error("Failed to settle escrow");
      setError(error.message);
      setIsLoading(false);
    }
  }, [
    settleEscrowWriteContract,
    escrowBalance,
    address,
    tokenAddress,
    escrowAddress,
    payer,
  ]);

  return {
    settleEscrow,
    hash: settleEscrowHash,
    isError: !!error,
    error,
    isLoading,
  };
}
