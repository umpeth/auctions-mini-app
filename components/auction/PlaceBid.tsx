import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { usePlaceBid } from "@/hooks/usePlaceBid";
import { parseEther } from "viem";
import TransactionButton from "@/components/Transaction";
import { AmountDisplay } from "@/components/AmountDisplay";
import BidSuccessModal from "@/components/BidSuccessModal";
import { useFrameActions } from "@/hooks/UseFrameAction";
import { AuctionItem } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PlaceBidProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  auctionItem: AuctionItem;
  auctionHouseAddress: `0x${string}`;
  auctionId: bigint;
  currentBid: string;
  minNextBid: string;
}

export function PlaceBid({
  isOpen,
  onOpenChange,
  auctionItem,
  auctionHouseAddress,
  auctionId,
  currentBid,
  minNextBid,
}: PlaceBidProps) {
  const [bidAmount, setBidAmount] = useState(minNextBid);
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
      onOpenChange(false); // Close the bid modal when successful
    },
  });

  // Handle form submit
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

    // // Add affiliate parameter if user is connected
    // if (address) {
    //   return `${baseUrl}&ref=${address}`;
    // }

    return baseUrl;
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Place Bid</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2">
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-600 text-sm">Current Bid</div>
                  <div className="text-xl font-bold">
                    <AmountDisplay
                      amount={currentBid}
                      symbol="ETH"
                      size="lg"
                      decimals={18}
                    />
                  </div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">Minimum Next Bid</div>
                  <div className="text-lg font-bold text-green-600">
                    <AmountDisplay
                      amount={minNextBid}
                      symbol="ETH"
                      size="lg"
                      decimals={18}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-6">
            <div className="font-bold mb-4">Your Bid</div>
            <div className="space-y-6">
              <div>
                <Label htmlFor="bidAmount">Bid Amount (ETH)</Label>
                <Input
                  id="bidAmount"
                  type="number"
                  placeholder={minNextBid}
                  min={minNextBid}
                  step="0.000001"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">
                    Min: {minNextBid} ETH
                  </span>
                  <span
                    className="text-xs text-blue-600 cursor-pointer"
                    onClick={() => setBidAmount(minNextBid)}
                  >
                    Bid minimum amount
                  </span>
                </div>
              </div>
              <div className="border-t pt-4 mt-4">
                <TransactionButton
                  onClick={handleSubmit}
                  isLoading={isLoading}
                  disabled={isLoading}
                  hash={hash}
                >
                  {isLoading
                    ? "Placing Bid..."
                    : `Place Bid for ${bidAmount} ETH`}
                </TransactionButton>
                {error && <div className="text-red-600 mt-2">{error}</div>}
                {isError && placeBidError && (
                  <div className="text-red-600 mt-2">{placeBidError}</div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
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
