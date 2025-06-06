import { useWriteAuctionHouseFactoryCreateAuctionHouse } from "@/wagmi/generated";
import { useWaitForTransactionReceipt } from "wagmi";
import { useState, useEffect } from "react";
import { Address, decodeEventLog } from "viem";
import { auctionHouseFactoryAbi } from "@/wagmi/generated";
import { auctionHouseFactoryAddress } from "@/lib/consts";

// Hook for creating an auction house
export function useCreateAuctionHouse({
  onSuccess,
}: {
  onSuccess?: (auctionHouseAddress: Address) => void;
  onError?: (error: Error) => void;
} = {}) {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    data: createAuctionHouseHash,
    writeContract: createAuctionHouseWriteContract,
    isPending: isCreatingAuctionHouse,
    isError: isErrorCreatingAuctionHouse,
    error: errorCreatingAuctionHouse,
  } = useWriteAuctionHouseFactoryCreateAuctionHouse();

  const {
    data: createAuctionHouseReceipt,
    isLoading: isLoadingCreateAuctionHouseReceipt,
  } = useWaitForTransactionReceipt({
    hash: createAuctionHouseHash,
  });

  useEffect(() => {
    if (isLoadingCreateAuctionHouseReceipt || isCreatingAuctionHouse) {
      setIsLoading(true);
    }
  }, [isLoadingCreateAuctionHouseReceipt, isCreatingAuctionHouse]);

  useEffect(() => {
    if (isErrorCreatingAuctionHouse) {
      setError(errorCreatingAuctionHouse);
      setIsLoading(false);
    }
  }, [isErrorCreatingAuctionHouse, errorCreatingAuctionHouse]);

  // Effect to process logs and call onSuccess when receipt is available
  useEffect(() => {
    if (createAuctionHouseReceipt && createAuctionHouseReceipt.logs) {
      for (const log of createAuctionHouseReceipt.logs) {
        try {
          const event = decodeEventLog({
            abi: auctionHouseFactoryAbi,
            data: log.data,
            topics: log.topics,
          });
          if (event.eventName === "AuctionHouseCreated") {
            const auctionHouseAddress = event.args.auctionHouse as Address;
            if (onSuccess) onSuccess(auctionHouseAddress);
            break;
          }
        } catch (e) {
          console.error("Failed to decode event log", e);
          setError(e as Error);
          // Ignore logs that don't match
        }
      }
    }
  }, [createAuctionHouseReceipt, onSuccess]);

  const createAuctionHouse = async ({
    name,
    image,
    description,
    contractURI = "", // TODO: do we even need this? (keep it simple for users)
    symbol = "AUCTN", // TODO: do we even need this?
    customDeadlineDays = 0,
    auctionItemFactoryAddress,
    escrowFactoryAddress,
  }: {
    name: string;
    image: string;
    description: string;
    contractURI?: string;
    symbol?: string;
    customDeadlineDays?: number;
    auctionItemFactoryAddress: Address;
    escrowFactoryAddress: Address;
  }) => {
    setIsLoading(true);
    try {
      await createAuctionHouseWriteContract({
        address: auctionHouseFactoryAddress as Address,
        args: [
          name,
          image,
          description,
          contractURI,
          symbol,
          BigInt(customDeadlineDays),
          auctionItemFactoryAddress,
          escrowFactoryAddress,
        ],
      });
    } catch (err) {
      console.error("Failed to create auction house", err);
      setError(err as Error);
      setIsLoading(false);
    }
  };
  return {
    createAuctionHouse,
    hash: createAuctionHouseHash,
    isError: !!error,
    error: error,
    isLoading: isLoading,
  };
}
