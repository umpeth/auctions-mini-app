import { useCallback, useState, useEffect } from "react";
import { useWaitForTransactionReceipt } from "wagmi";
import { Address, decodeEventLog } from "viem";
import {
  useWriteAuctionHouseEndAuction,
  auctionHouseAbi,
} from "@/wagmi/generated";

interface EndAuctionArgs {
  auctionHouseAddress: Address;
  auctionId: bigint;
}

export interface EndAuctionResult {
  endAuction: (args: EndAuctionArgs) => Promise<void>;
  hash: `0x${string}` | undefined | null;
  isError: boolean;
  error: string | null;
  isLoading: boolean;
}

export function useEndAuction({
  onSuccess,
}: {
  onSuccess?: (endAuctionHash: `0x${string}`) => void;
} = {}): EndAuctionResult {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    data: endAuctionHash,
    writeContract: endAuctionWriteContract,
    isPending: isEndingAuction,
    isError: isErrorEndingAuction,
    error: errorEndingAuction,
  } = useWriteAuctionHouseEndAuction();

  const { data: endAuctionReceipt, isLoading: isLoadingEndAuctionReceipt } =
    useWaitForTransactionReceipt({
      hash: endAuctionHash,
    });

  // Update loading state
  useEffect(() => {
    if (isLoadingEndAuctionReceipt || isEndingAuction) {
      setIsLoading(true);
    }
  }, [isLoadingEndAuctionReceipt, isEndingAuction]);

  // Handle errors
  useEffect(() => {
    if (isErrorEndingAuction && errorEndingAuction) {
      const errorMessage =
        errorEndingAuction instanceof Error
          ? errorEndingAuction.message
          : typeof errorEndingAuction === "object" &&
              "message" in errorEndingAuction
            ? String(errorEndingAuction.message)
            : "Failed to end auction";

      const error = new Error(errorMessage);
      setError(error.message);
      setIsLoading(false);
    }
  }, [isErrorEndingAuction, errorEndingAuction]);

  // Handle successful end auction
  useEffect(() => {
    if (endAuctionReceipt && endAuctionReceipt.logs) {
      for (const log of endAuctionReceipt.logs) {
        try {
          const event = decodeEventLog({
            abi: auctionHouseAbi,
            data: log.data,
            topics: log.topics,
          });
          if (event.eventName === "AuctionEnded") {
            setIsLoading(false);
            if (onSuccess && endAuctionHash) onSuccess(endAuctionHash);
            break;
          }
        } catch (e) {
          // Ignore logs that don't match
          console.debug("Log does not match AuctionEnded event", e);
        }
      }
    }
  }, [endAuctionReceipt, endAuctionHash, onSuccess]);

  const endAuction = useCallback(
    async ({ auctionHouseAddress, auctionId }: EndAuctionArgs) => {
      setIsLoading(true);

      try {
        await endAuctionWriteContract({
          address: auctionHouseAddress,
          args: [auctionId],
        });
      } catch (err) {
        console.error("Error ending auction:", err);
        const error =
          err instanceof Error ? err : new Error("Failed to end auction");
        setError(error.message);
        setIsLoading(false);
      }
    },
    [endAuctionWriteContract],
  );

  return {
    endAuction,
    hash: endAuctionHash,
    isError: !!error,
    error,
    isLoading,
  };
}
