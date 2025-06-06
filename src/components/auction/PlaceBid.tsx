import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { usePlaceBid } from "@/hooks/usePlaceBid";
import { parseEther } from "viem";
import TransactionButton from "@/components/Transaction";
import { AmountDisplay } from "@/components/AmountDisplay";
import BidSuccessModal from "@/components/BidSuccessModal";
import { useFrameActions } from "@/hooks/UseFrameAction";
import { Auction } from "@/graphql/generated";
import { useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { SignInButton } from "@/components/auth/SignInButton";
import FarcasterIcon from "@/components/icons/farcaster";

interface PlaceBidProps {
  auctionItem: Auction;
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { handleWarpcastShare } = useFrameActions();
  const [isBidConfirmed, setIsBidConfirmed] = useState(false);
  const { data: session } = useSession();
  const [showFarcasterDialog, setShowFarcasterDialog] = useState(false);

  const affiliateAddress = "0x0000000000000000000000000000000000000000";

  const {
    placeBid,
    hash,
    isError,
    error: placeBidError,
    isLoading,
  } = usePlaceBid({
    onSuccess: async (bidHash, bidderAddress) => {
      setIsBidConfirmed(true);
      try {
        const response = await fetch("/api/bid", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            auctionId: auctionId.toString(),
            fid: session?.user?.fid?.toString() || null,
            amount: parseFloat(bidAmount),
            auctionHouseAddress: auctionHouseAddress.toString(),
            bidderAddress: bidderAddress,
          }),
        });

        if (!response.ok) {
          console.error("Failed to track bid:", await response.text());
        }
      } catch (err) {
        console.error("Error tracking bid:", err);
      }
    },
  });

  useEffect(() => {
    if (isBidConfirmed) {
      setShowSuccessModal(true);
    }
  }, [isBidConfirmed]);

  // Show Farcaster dialog when placing first bid without being signed in
  useEffect(() => {
    if (!session && !showFarcasterDialog) {
      setShowFarcasterDialog(true);
    }
  }, [session]); // eslint-disable-line react-hooks/exhaustive-deps

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
    const baseUrl =
      window.location.origin +
      "/auction/" +
      auctionHouseAddress +
      "-" +
      auctionId;
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
          <div className="font-medium">
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
            <span className="text-sm whitespace-pre-line break-words line-clamp-2">
              {isLoading ? "Placing Bid..." : `Place Bid for ${bidAmount} ETH`}
            </span>
          </TransactionButton>
        </div>

        {error && <div className="text-red-600 text-sm">{error}</div>}
        {isError && placeBidError && (
          <div className="text-red-600 text-sm">{placeBidError}</div>
        )}
      </div>

      <BidSuccessModal
        isOpen={showSuccessModal}
        onOpenChange={setShowSuccessModal}
        itemName={auctionItem.tokenReference?.metadata?.name || ""}
        itemId={auctionItem.tokenId}
        imageUrl={auctionItem.tokenReference?.metadata?.image || ""}
        shareUrl={getShareUrl()}
        onWarpcastShare={handleWarpcastShare}
      />

      <Dialog open={showFarcasterDialog} onOpenChange={setShowFarcasterDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="space-y-4">
            <DialogTitle className="flex items-center gap-3 text-xl">
              <FarcasterIcon className="w-6 h-6 text-purple-500" />
              Sign in with Farcaster
            </DialogTitle>
            <div className="space-y-4">
              <DialogDescription className="text-base leading-relaxed text-gray-600">
                Get the most out of your bidding experience by signing in with
                Farcaster. This allows us to notify you when you&apos;re outbid.
              </DialogDescription>
              <p className="text-lg font-medium text-purple-700">
                Never miss a chance to reclaim your status as the highest
                bidder! 🏆
              </p>

              <div className="p-2 bg-amber-50 border border-amber-200 rounded-lg space-y-2">
                <p className="text-amber-700 text-xs">
                  <span className="font-bold">Note:</span> This feature might
                  only work while in the Warpcast app. The web app or Coinbase
                  wallet might not work as expected.
                </p>
                <p className="text-amber-700 text-xs">
                  You can still bid without signing in, but you won&apos;t be
                  notified if you get outbid.
                </p>
              </div>
            </div>
          </DialogHeader>
          <DialogFooter className="flex-col gap-3 sm:flex-row sm:justify-between sm:space-x-0 mt-3">
            <SignInButton />
            <Button
              variant="outline"
              onClick={() => setShowFarcasterDialog(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              Maybe later
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
