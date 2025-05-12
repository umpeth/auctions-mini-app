"use client";
import { Address } from "@coinbase/onchainkit/identity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { useAuctionItemsByHouseAddress } from "@/hooks/useAuctionItemsByHouseAddress";
import { formatEther, formatUnits } from "viem";
import NFTImage from "@/components/NFTImage";
import { AmountDisplay } from "@/components/AmountDisplay";
import { Countdown } from "@/components/ui/Countdown";
import { CustomIdentity } from "@/components/CustomIdentity";

interface AuctionDetailsProps {
  setCurrentScreen: (screen: string) => void;
  auctionHouseAddress: string;
  onPlaceBid: (auctionData: {
    auctionHouseAddress: `0x${string}`;
    auctionId: bigint;
    currentBid: string;
    minNextBid: string;
  }) => void;
}

export function AuctionDetails({
  setCurrentScreen,
  auctionHouseAddress,
  onPlaceBid,
}: AuctionDetailsProps) {
  const { auctions, loading, error } =
    useAuctionItemsByHouseAddress(auctionHouseAddress);
  const auction = auctions[1]; // TODO: make this selectable

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Auction Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-10 text-gray-500">
              Loading auction details...
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Auction Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-10 text-red-500">{error}</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!auction) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Auction Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-10 text-gray-500">
              No auction found.
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handlePlaceBid = () => {
    onPlaceBid({
      auctionHouseAddress: auctionHouseAddress as `0x${string}`,
      auctionId: BigInt(auction.id),
      currentBid:
        auction.highestBid !== BigInt(0)
          ? formatUnits(auction.highestBid, 18)
          : "0",
      minNextBid:
        auction.minNextBid !== BigInt(0)
          ? formatUnits(auction.minNextBid, 18)
          : "0",
    });
    setCurrentScreen("placeBid");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Auction Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="bg-gray-100 p-2 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-2">
                    {auction.metadata?.image ? (
                      <NFTImage
                        src={auction.metadata.image}
                        alt={auction.metadata.name || "Item Image"}
                      />
                    ) : (
                      "🖼️"
                    )}
                  </div>
                  <div>{auction.metadata?.name || "Item Image"}</div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">NFT Contract:</span>
                  <Address address={auction.tokenContract as `0x${string}`} />
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Token ID:</span>
                  <span className="font-mono">{auction.tokenId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Owner:</span>
                  <CustomIdentity
                    address={auction.auctionOwner as `0x${string}`}
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold">
                {auction.metadata?.name || `Collectible #${auction.tokenId}`}
              </h3>
              <div className="text-gray-700 mt-2">
                {auction.metadata?.description || "No description available."}
              </div>
              <div className="mt-6 border-t pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-600 text-sm">Current Bid</div>
                    <div className="text-2xl font-bold">
                      {auction.highestBid !== BigInt(0)
                        ? `${formatUnits(auction.highestBid, 18)} ETH`
                        : "-"}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">
                      Minimum Next Bid
                    </div>
                    <div className="text-xl font-bold text-green-600">
                      {auction.minNextBid !== BigInt(0) ? (
                        <AmountDisplay
                          amount={formatEther(auction.minNextBid)}
                          symbol="ETH"
                          size="lg"
                          decimals={18}
                        />
                      ) : (
                        "-"
                      )}
                    </div>
                    <div className="text-xs text-gray-500">
                      (+0.5% increment)
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Auction Status</div>
                    <div className="text-green-600 font-medium">
                      {auction.status}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Time Remaining</div>
                    <div className="font-medium">
                      {auction.isEnded ? (
                        <Countdown deadline={Number(auction.endTime)} />
                      ) : (
                        "Ended"
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Current Winner</div>
                    <div className="text-sm font-mono break-all hover:break-normal">
                      {auction.currentBidder ? (
                        <CustomIdentity
                          address={auction.currentBidder as `0x${string}`}
                        />
                      ) : (
                        "-"
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Reserve Price</div>
                    <div className="text-sm font-mono break-all hover:break-normal">
                      {auction.reservePrice !== BigInt(0)
                        ? `${formatUnits(auction.reservePrice, 18)} ETH`
                        : "-"}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Bid Count</div>
                    <div>-</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Premium Type</div>
                    <div>
                      {auction.isPremiumAuction
                        ? `${Number(auction.premiumRate) / 100}% of increment`
                        : "-"}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline">View Bid History</Button>
                  <Button variant="default" onClick={handlePlaceBid}>
                    Place Bid
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t">
            <h4 className="font-bold mb-3">Bid History</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bidder
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Premium Paid
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {auction.bids && auction.bids.length > 0 ? (
                    auction.bids.map((bid, index) => (
                      <tr key={`${bid.bidder}-${index}`}>
                        <td className="px-4 py-2 text-sm">{bid.time}</td>
                        <td className="px-4 py-2 text-sm font-mono">
                          <CustomIdentity
                            address={bid.bidder as `0x${string}`}
                          />
                        </td>
                        <td className="px-4 py-2 text-sm">
                          {formatUnits(bid.amount, 18)} ETH
                        </td>
                        <td className="px-4 py-2 text-sm">
                          {bid.premiumPaid
                            ? `${formatUnits(bid.premiumPaid.amount, 18)} ETH to ${bid.premiumPaid.recipient}`
                            : "-"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-4 py-2 text-sm text-center text-gray-500"
                      >
                        No bids yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
