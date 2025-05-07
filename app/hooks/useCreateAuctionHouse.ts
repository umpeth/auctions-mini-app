import { useWriteAuctionHouseFactoryCreateAuctionHouse } from "@/wagmi/generated";
import { useWaitForTransactionReceipt } from "wagmi";
import { useState, useEffect } from "react";
import { Address, decodeEventLog } from "viem";
import { auctionHouseFactoryAbi } from "@/wagmi/generated";

// Hook for creating an auction house
export function useCreateAuctionHouse({
  onSuccess,
}: {
  onSuccess?: (auctionHouseAddress: Address) => void;
  onError?: (error: Error) => void;
} = {}) {
  const [error, setError] = useState<Error | null>(null);

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
    if (isErrorCreatingAuctionHouse) {
      setError(errorCreatingAuctionHouse);
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
    contractURI = "https://example.com/contract-metadata",
    symbol = "AUCTN",
    customDeadline = 0,
    auctionItemFactoryAddress,
    escrowFactoryAddress,
  }: {
    name: string;
    image: string;
    description: string;
    contractURI?: string;
    symbol?: string;
    customDeadline?: number;
    auctionItemFactoryAddress: Address;
    escrowFactoryAddress: Address;
  }) => {
    try {
      await createAuctionHouseWriteContract({
        address: "0xe7C121cb8773d324b68d1fb3531Fc9043440D1e0" as Address,
        args: [
          name,
          image,
          description,
          contractURI,
          symbol,
          BigInt(customDeadline),
          auctionItemFactoryAddress,
          escrowFactoryAddress,
        ],
      });
    } catch (err) {
      console.error("Failed to create auction house", err);
      setError(err as Error);
    }
  };
  return {
    createAuctionHouse,
    hash: createAuctionHouseHash,
    isPending: isCreatingAuctionHouse,
    isError: !!error,
    error: error,
    isLoading: isLoadingCreateAuctionHouseReceipt,
  };
}
