import { useWriteAuctionHouseCreateAuctionWithNewNft } from "@/wagmi/generated";
import { useWaitForTransactionReceipt } from "wagmi";
import { useState, useEffect } from "react";
import { Address, decodeEventLog } from "viem";
import { auctionHouseAbi } from "@/wagmi/generated";
import { affiliateEscrowFactoryAddress } from "@/lib/consts";

export type NFTMetadata = {
  name: string;
  description: string;
  image: string;
  termsOfService: string;
  supplementalImages?: string[];
};

export function useCreateAuctionWithNewNFT({
  onSuccess,
}: {
  onSuccess?: (auctionId: bigint, tokenId?: bigint) => void;
} = {}) {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
    if (isLoadingCreateAuctionReceipt || isCreatingAuction) {
      setIsLoading(true);
    }
  }, [isLoadingCreateAuctionReceipt, isCreatingAuction]);

  useEffect(() => {
    if (isErrorCreatingAuction) {
      setError(errorCreatingAuction as Error);
      setIsLoading(false);
    }
  }, [isErrorCreatingAuction, errorCreatingAuction]);

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
    reservePriceWei,
    durationSeconds,
    affiliateFeeBps,
    arbiterAddress,
    paymentToken = "0x0000000000000000000000000000000000000000",
    isPremium = false,
    premiumRateBps = 0,
    minBidIncrementBps = 500,
    timeExtensionSeconds = 900,
  }: {
    auctionHouseAddress: Address;
    metadata: NFTMetadata;
    startTime: bigint;
    reservePriceWei: bigint;
    durationSeconds: bigint;
    affiliateFeeBps: number;
    arbiterAddress: Address;
    paymentToken?: Address;
    isPremium?: boolean;
    premiumRateBps?: number;
    minBidIncrementBps?: number;
    timeExtensionSeconds?: number;
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
          reservePriceWei,
          durationSeconds,
          affiliateFeeBps,
          arbiterAddress,
          affiliateEscrowFactoryAddress,
          paymentToken,
          isPremium,
          premiumRateBps,
          minBidIncrementBps,
          BigInt(timeExtensionSeconds),
        ],
      });
    } catch (err) {
      console.error("Failed to create auction with new NFT", err);
      setError(err as Error);
      setIsLoading(false);

      throw err;
    }
  };

  return {
    createAuctionWithNewNFT,
    hash: createAuctionHash,
    isError: !!error,
    error: error,
    isLoading: isLoading,
  };
}
