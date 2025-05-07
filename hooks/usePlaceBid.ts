import { useCallback, useState, useEffect } from "react";
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
  error: Error | null;
  isLoading: boolean;
}

export function usePlaceBid({
  onSuccess,
}: {
  onSuccess?: (bidHash: `0x${string}`) => void;
} = {}): PlaceBidResult {
  const { address: bidderAddress } = useAccount();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
      setError(error);
      setIsLoading(false);
    }
  }, [isErrorCreatingBid, errorCreatingBid]);

  // Handle successful bid
  useEffect(() => {
    if (bidReceipt && bidReceipt.logs) {
      for (const log of bidReceipt.logs) {
        try {
          const event = decodeEventLog({
            abi: auctionHouseAbi,
            data: log.data,
            topics: log.topics,
          });
          if (event.eventName === "BidCreated") {
            setIsLoading(false);
            if (onSuccess && bidHash) onSuccess(bidHash);
            break;
          }
        } catch (e) {
          // Ignore logs that don't match
          console.debug("Log does not match BidCreated event", e);
        }
      }
    }
  }, [bidReceipt, bidHash, onSuccess]);

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
        setError(error);
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
