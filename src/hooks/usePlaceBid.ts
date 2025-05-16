import { useCallback, useState, useEffect, useRef } from "react";
import { useAccount, useWaitForTransactionReceipt } from "wagmi";
import { Address, decodeEventLog } from "viem";
import {
  useWriteAuctionHouseCreateBid,
  auctionHouseAbi,
} from "@/wagmi/generated";

interface EmptyEncryptedMessage {
  encryptedData: `0x${string}`;
  ephemeralPublicKey: `0x${string}`;
  iv: `0x${string}`;
  verificationHash: `0x${string}`;
}

interface PlaceBidArgs {
  auctionHouseAddress: Address;
  auctionId: bigint;
  affiliateAddress: Address;
  bidAmountWei: bigint; // In Wei
}

export interface PlaceBidResult {
  placeBid: (args: PlaceBidArgs) => Promise<void>;
  hash: `0x${string}` | undefined | null;
  isError: boolean;
  error: string | null;
  isLoading: boolean;
}

export function usePlaceBid({
  onSuccess,
}: {
  onSuccess?: (bidHash: `0x${string}`, bidderAddress: Address) => void;
} = {}): PlaceBidResult {
  const { address: bidderAddress } = useAccount();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // Track processed bid hashes to prevent duplicate processing
  const processedBids = useRef<Set<string>>(new Set());

  const {
    data: bidHash,
    writeContract: createBidWriteContract,
    isPending: isCreatingBid,
    isError: isErrorCreatingBid,
    error: errorCreatingBid,
  } = useWriteAuctionHouseCreateBid();

  const { data: bidReceipt, isLoading: isLoadingBidReceipt } =
    useWaitForTransactionReceipt({
      hash: bidHash,
    });

  // Update loading state
  useEffect(() => {
    if (isLoadingBidReceipt || isCreatingBid) {
      setIsLoading(true);
    }
  }, [isLoadingBidReceipt, isCreatingBid]);

  // Handle errors
  useEffect(() => {
    if (isErrorCreatingBid && errorCreatingBid) {
      const errorMessage =
        errorCreatingBid instanceof Error
          ? errorCreatingBid.message
          : typeof errorCreatingBid === "object" &&
              "message" in errorCreatingBid
            ? String(errorCreatingBid.message)
            : "Failed to create bid";

      const error = new Error(errorMessage);
      setError(error.message);
      setIsLoading(false);
    }
  }, [isErrorCreatingBid, errorCreatingBid]);

  // Handle successful bid
  useEffect(() => {
    if (bidReceipt && bidReceipt.logs && bidHash) {
      // Skip if we've already processed this bid
      if (processedBids.current.has(bidHash)) {
        return;
      }

      for (const log of bidReceipt.logs) {
        try {
          const event = decodeEventLog({
            abi: auctionHouseAbi,
            data: log.data,
            topics: log.topics,
          });
          if (event.eventName === "BidCreated") {
            setIsLoading(false);

            // Only call onSuccess if we haven't processed this bid yet
            if (onSuccess && bidderAddress) {
              processedBids.current.add(bidHash);
              onSuccess(bidHash, bidderAddress);
            }
            break;
          }
        } catch (e) {
          // Ignore logs that don't match
          console.debug("Log does not match BidCreated event", e);
        }
      }
    }
  }, [bidReceipt, bidHash, onSuccess, bidderAddress]);

  const placeBid = useCallback(
    async ({
      auctionHouseAddress,
      auctionId,
      affiliateAddress,
      bidAmountWei,
    }: PlaceBidArgs) => {
      setIsLoading(true);

      // Empty encrypted message for now
      const emptyMessage: EmptyEncryptedMessage = {
        encryptedData: "0x",
        ephemeralPublicKey: "0x",
        iv: "0x",
        verificationHash: "0x",
      };

      try {
        if (!bidderAddress) {
          throw new Error("No bidder address available");
        }

        await createBidWriteContract({
          address: auctionHouseAddress,
          args: [auctionId, affiliateAddress, emptyMessage, bidAmountWei],
          value: bidAmountWei,
        });
      } catch (err) {
        console.error("Error placing bid:", err);
        const error =
          err instanceof Error ? err : new Error("Failed to place bid");
        setError(error.message);
        setIsLoading(false);
      }
    },
    [bidderAddress, createBidWriteContract],
  );

  return {
    placeBid,
    hash: bidHash,
    isError: !!error,
    error,
    isLoading,
  };
}
