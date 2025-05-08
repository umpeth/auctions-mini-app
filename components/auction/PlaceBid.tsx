import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { usePlaceBid } from "@/hooks/usePlaceBid";
import { parseEther } from "viem";
import TransactionButton from "@/components/Transaction";
import { AmountDisplay } from "@/components/AmountDisplay";
import BidSuccessModal from "@/components/BidSuccessModal";
import { useFrameActions } from "@/hooks/UseFrameAction";

interface PlaceBidProps {
  // setCurrentScreen: (screen: string) => void;
  auctionHouseAddress: `0x${string}`;
  auctionId: bigint;
  currentBid: string;
  minNextBid: string;
}

export function PlaceBid({
  // setCurrentScreen,
  auctionHouseAddress,
  auctionId,
  currentBid,
  minNextBid,
}: PlaceBidProps) {
  // Form state
  const [bidAmount, setBidAmount] = useState(minNextBid);
  // const [message, setMessage] = useState("");
  // const [affiliateAddress, setAffiliateAddress] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
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

  // Handle form submit
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");

    if (!isConfirmed) {
      setError("Please confirm your bid");
      return;
    }

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
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Place Bid</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-1">
              <div className="bg-gray-100 p-2 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-5xl mb-2">🖼️</div>
                  <div>Item Image</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold">Rare Collectible #42</h3>
              <div className="text-gray-700 mt-1 text-sm">
                Description of the item being auctioned...
              </div>
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
                <Label>Bid Amount (ETH)</Label>
                <Input
                  type="number"
                  placeholder={minNextBid}
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
              {/* <div>
                <Label>Encrypted Message (Optional)</Label>
                <Textarea
                  placeholder="Enter a private message to the seller..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="text-xs text-gray-500">
                  This message will be encrypted and only visible to the seller
                </div>
              </div> */}
              {/* <div>
                <div className="font-medium mb-2">
                  Optional: Include Affiliate Address
                </div>
                <Input
                  type="text"
                  placeholder="0x..."
                  value={affiliateAddress}
                  onChange={(e) => setAffiliateAddress(e.target.value)}
                />
                <div className="text-xs text-gray-500 mt-1">
                  If you were referred by an affiliate, enter their address
                </div>
              </div> */}
              <div className="border-t pt-4 mt-4">
                <div className="flex items-start mb-4">
                  <Input
                    type="checkbox"
                    id="confirm"
                    className="mt-1 mr-2"
                    checked={isConfirmed}
                    onChange={(e) => setIsConfirmed(e.target.checked)}
                  />
                  <Label htmlFor="confirm" className="text-sm">
                    I confirm that I want to place this bid. If I am outbid, I
                    will receive a premium payment of 0.5% of the increment
                    above my bid.
                  </Label>
                </div>
                <TransactionButton
                  onClick={handleSubmit}
                  isLoading={isLoading}
                  disabled={isLoading || !isConfirmed}
                  hash={hash}
                >
                  {isLoading ? "Placing Bid..." : "Place Bid"}
                </TransactionButton>
                {error && <div className="text-red-600 mt-2">{error}</div>}
                {isError && placeBidError && (
                  <div className="text-red-600 mt-2">{placeBidError}</div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded border border-blue-200">
            <div className="font-bold text-blue-800 mb-2">
              About Premium Auctions
            </div>
            <div className="text-sm text-blue-700">
              <p>
                This is a premium auction. If your bid is outbid by another
                user, you will receive a premium payment equal to 100% of the
                minimum bid increment (0.5%).
              </p>
              <p className="mt-2">
                Example: If you bid {currentBid} ETH and someone outbids you
                with {(Number(currentBid) * 1.01).toFixed(2)} ETH, you will
                receive {(Number(currentBid) * 0.005).toFixed(5)} ETH as a
                premium payment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <BidSuccessModal
        isOpen={isBidSuccessModalOpen}
        onOpenChange={setIsBidSuccessModalOpen}
        itemName="Rare Collectible #42" //TODO
        itemId={auctionId.toString()}
        imageUrl="https://via.placeholder.com/150" //TODO
        shareUrl={getShareUrl()}
        onWarpcastShare={handleWarpcastShare}
      />
    </div>
  );
}
