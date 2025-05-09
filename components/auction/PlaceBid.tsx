import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { usePlaceBid } from "@/hooks/usePlaceBid";
import { parseEther } from "viem";
import TransactionButton from "@/components/Transaction";
import { AmountDisplay } from "@/components/AmountDisplay";
import BidSuccessModal from "@/components/BidSuccessModal";
import { useFrameActions } from "@/hooks/UseFrameAction";
import { AuctionItem } from "@/types";

interface PlaceBidProps {
  auctionItem: AuctionItem;
  auctionHouseAddress: `0x${string}`;
  auctionId: bigint;
  currentBid: string;
  minNextBid: string;
}

export function PlaceBid({
  auctionItem,
  auctionHouseAddress,
  auctionId,
  currentBid,
  minNextBid,
}: PlaceBidProps) {
  const [bidAmount, setBidAmount] = useState(minNextBid);
  const [showCustomBid, setShowCustomBid] = useState(false);
  const [error, setError] = useState("");
  const [isBidSuccessModalOpen, setIsBidSuccessModalOpen] = useState(false);
  const { handleWarpcastShare } = useFrameActions();

  const affiliateAddress = "0x0000000000000000000000000000000000000000";

  const {
    placeBid,
    hash,
    isError,
    error: placeBidError,
    isLoading,
  } = usePlaceBid({
    onSuccess: (bidHash) => {
      console.log("Bid placed successfully:", bidHash);
      setIsBidSuccessModalOpen(true);
    },
  });

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");

    try {
      const bidAmountWei = parseEther(bidAmount);
      await placeBid({
        auctionHouseAddress,
        auctionId,
        affiliateAddress: (affiliateAddress ||
          "0x0000000000000000000000000000000000000000") as `0x${string}`,
        bidAmountWei,
      });
    } catch (err) {
      console.error("Error placing bid:", err);
      setError(err instanceof Error ? err.message : "Failed to place bid");
    }
  };

  const getShareUrl = () => {
    const baseUrl = window.location.origin + "/auction/" + auctionId;
    return baseUrl;
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 py-4">
        <div>
          <div className="text-sm text-gray-500">Current Bid</div>
          <div className="font-medium">
            <AmountDisplay amount={currentBid} symbol="ETH" decimals={18} />
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Minimum Next Bid</div>
          <div className="font-medium text-green-600">
            <AmountDisplay amount={minNextBid} symbol="ETH" decimals={18} />
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        {showCustomBid && (
          <div className="space-y-2">
            <Input
              id="bidAmount"
              type="number"
              placeholder={minNextBid}
              min={minNextBid}
              step="0.000001"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
            />
          </div>
        )}

        <div className="space-y-2">
          {!showCustomBid && (
            <div className="flex justify-end">
              <Button
                variant="ghost"
                onClick={() => setShowCustomBid(true)}
                className="h-auto p-0 text-sm text-blue-600 hover:text-blue-800"
              >
                Place Custom Bid
              </Button>
            </div>
          )}

          <TransactionButton
            onClick={handleSubmit}
            isLoading={isLoading}
            disabled={isLoading}
            hash={hash}
          >
            {isLoading ? "Placing Bid..." : `Place Bid for ${bidAmount} ETH`}
          </TransactionButton>
        </div>

        {error && <div className="text-red-600 text-sm">{error}</div>}
        {isError && placeBidError && (
          <div className="text-red-600 text-sm">{placeBidError}</div>
        )}
      </div>
      <BidSuccessModal
        isOpen={isBidSuccessModalOpen}
        onOpenChange={setIsBidSuccessModalOpen}
        itemName={auctionItem.metadata?.name || ""}
        itemId={auctionItem.tokenId}
        imageUrl={auctionItem.metadata?.image || ""}
        shareUrl={getShareUrl()}
        onWarpcastShare={handleWarpcastShare}
      />
    </>
  );
}
