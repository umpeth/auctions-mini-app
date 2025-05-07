import { useWriteAuctionHouseCreateNftContract } from "@/wagmi/generated";
import { useWaitForTransactionReceipt } from "wagmi";
import { useState, useEffect } from "react";
import { Address } from "viem";

export function useCreateNFTContractViaAuctionHouse({
  onSuccess,
  onError,
}: {
  onSuccess?: (receipt: unknown) => void;
  onError?: (error: Error) => void;
} = {}) {
  const [error, setError] = useState<Error | null>(null);

  const {
    data: createNftContractHash,
    writeContract: createNftContractWriteContract,
    isPending: isCreatingNftContract,
    isError: isErrorCreatingNftContract,
    error: errorCreatingNftContract,
  } = useWriteAuctionHouseCreateNftContract();

  const {
    data: createNftContractReceipt,
    isLoading: isLoadingCreateNftContractReceipt,
  } = useWaitForTransactionReceipt({
    hash: createNftContractHash,
  });

  useEffect(() => {
    if (isErrorCreatingNftContract) {
      setError(errorCreatingNftContract as Error);
      if (onError) onError(errorCreatingNftContract as Error);
    }
  }, [isErrorCreatingNftContract, errorCreatingNftContract, onError]);

  useEffect(() => {
    if (createNftContractReceipt && onSuccess) {
      onSuccess(createNftContractReceipt);
    }
  }, [createNftContractReceipt, onSuccess]);

  const createNFTContract = async ({
    auctionHouseAddress,
    name,
    symbol,
    contractURI,
  }: {
    auctionHouseAddress: Address;
    name: string;
    symbol: string;
    contractURI: string;
  }) => {
    try {
      await createNftContractWriteContract({
        address: auctionHouseAddress,
        args: [name, symbol, contractURI],
      });
    } catch (err) {
      setError(err as Error);
      if (onError) onError(err as Error);
      throw err;
    }
  };

  return {
    createNFTContract,
    hash: createNftContractHash,
    isPending: isCreatingNftContract,
    isError: !!error,
    error: error,
    isLoading: isLoadingCreateNftContractReceipt,
  };
}
