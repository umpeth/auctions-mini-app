import { useWriteAuctionHouseCreateAuctionWithNewNft } from "@/wagmi/generated";
import { useWaitForTransactionReceipt } from "wagmi";
import { useState, useEffect } from "react";
import { Address, decodeEventLog } from "viem";
import { auctionHouseAbi } from "@/wagmi/generated";

export type NFTMetadata = {
  name: string;
  description: string;
  image: string;
  termsOfService: string;
  supplementalImages?: string[];
};

export function useCreateAuctionWithNewNFT({
  onSuccess,
  onError,
}: {
  onSuccess?: (auctionId: bigint, tokenId?: bigint) => void;
  onError?: (error: Error) => void;
} = {}) {
  const [error, setError] = useState<Error | null>(null);

  const {
    data: createAuctionHash,
    writeContract: createAuctionWriteContract,
    isPending: isCreatingAuction,
    isError: isErrorCreatingAuction,
    error: errorCreatingAuction,
  } = useWriteAuctionHouseCreateAuctionWithNewNft();

  const {
    data: createAuctionReceipt,
    isLoading: isLoadingCreateAuctionReceipt,
  } = useWaitForTransactionReceipt({
    hash: createAuctionHash,
  });

  useEffect(() => {
    if (isErrorCreatingAuction) {
      setError(errorCreatingAuction as Error);
      if (onError) onError(errorCreatingAuction as Error);
    }
  }, [isErrorCreatingAuction, errorCreatingAuction, onError]);

  useEffect(() => {
    if (createAuctionReceipt && createAuctionReceipt.logs) {
      for (const log of createAuctionReceipt.logs) {
        try {
          const event = decodeEventLog({
            abi: auctionHouseAbi,
            data: log.data,
            topics: log.topics,
          });
          if (event.eventName === "AuctionCreated") {
            if (onSuccess)
              onSuccess(
                event.args.auctionId as bigint,
                event.args.tokenId as bigint,
              );
            break;
          }
        } catch {
          // Ignore logs that don't match
        }
      }
    }
  }, [createAuctionReceipt, onSuccess]);

  const createAuctionWithNewNFT = async ({
    auctionHouseAddress,
    metadata,
    startTime,
    reservePrice,
    duration,
    affiliateFee,
    arbiterAddress,
    escrowFactoryAddress,
    paymentToken = "0x0000000000000000000000000000000000000000",
    premium = false,
    premiumRate = 0,
    minBidIncrement = 500,
    timeExtension = 900,
  }: {
    auctionHouseAddress: Address;
    metadata: NFTMetadata;
    startTime: bigint;
    reservePrice: bigint;
    duration: bigint;
    affiliateFee: number;
    arbiterAddress: Address;
    escrowFactoryAddress: Address;
    paymentToken?: Address;
    premium?: boolean;
    premiumRate?: number;
    minBidIncrement?: number;
    timeExtension?: number;
  }) => {
    try {
      await createAuctionWriteContract({
        address: auctionHouseAddress,
        args: [
          {
            ...metadata,
            supplementalImages: metadata.supplementalImages ?? [],
          },
          startTime,
          reservePrice,
          duration,
          affiliateFee,
          arbiterAddress,
          escrowFactoryAddress,
          paymentToken,
          premium,
          premiumRate,
          minBidIncrement,
          BigInt(timeExtension),
        ],
      });
    } catch (err) {
      setError(err as Error);
      if (onError) onError(err as Error);
      throw err;
    }
  };

  return {
    createAuctionWithNewNFT,
    hash: createAuctionHash,
    isPending: isCreatingAuction,
    isError: !!error,
    error: error,
    isLoading: isLoadingCreateAuctionReceipt,
  };
}
