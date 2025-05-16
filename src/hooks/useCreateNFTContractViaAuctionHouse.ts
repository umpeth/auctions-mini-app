import { useWriteAuctionHouseCreateNftContract } from "@/wagmi/generated";
import { useWaitForTransactionReceipt } from "wagmi";
import { useState, useEffect } from "react";
import { Address } from "viem";

export function useCreateNFTContractViaAuctionHouse({
  onSuccess,
}: {
  onSuccess?: (receipt: unknown) => void;
} = {}) {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
    if (isLoadingCreateNftContractReceipt || isCreatingNftContract) {
      setIsLoading(true);
    }
  }, [isLoadingCreateNftContractReceipt, isCreatingNftContract]);

  useEffect(() => {
    if (isErrorCreatingNftContract) {
      setError(errorCreatingNftContract as Error);
      setIsLoading(false);
    }
  }, [isErrorCreatingNftContract, errorCreatingNftContract]);

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
    setIsLoading(true);
    try {
      await createNftContractWriteContract({
        address: auctionHouseAddress,
        args: [name, symbol, contractURI],
      });
    } catch (err) {
      setError(err as Error);
      setIsLoading(false);
    }
  };

  return {
    createNFTContract,
    hash: createNftContractHash,
    isError: !!error,
    error: error,
    isLoading: isLoading,
  };
}
