"use client";
import { notFound } from "next/navigation";
import { formatEther } from "viem";
import { formatDistanceToNow, format } from "date-fns";
import { GetAuctionByAuctionIdDocument } from "@/graphql/queryDocuments";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import React, { useState, useCallback } from "react";
import { GetAuctionByAuctionIdQuery } from "@/graphql/generated";
import { PlaceBid } from "@/components/auction/PlaceBid";
import { calculateMinNextBid } from "@/lib/utils";
import NFTImage from "@/components/NFTImage";
import SimpleLayout from "@/components/SimpleLayout";
import { Address } from "@coinbase/onchainkit/identity";
import { AmountDisplay } from "@/components/AmountDisplay";
import { AuctionItem } from "@/types";

// Ensure API_URL is properly set for both development and production
const API_URL =
  process.env.NEXT_PUBLIC_URL ||
  (typeof window !== "undefined"
    ? window.location.origin
    : "http://localhost:3000");

interface PageProps {
  params: {
    id: string;
  };
}

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

export default function AuctionPage({ params }: PageProps) {
  const [error, setError] = useState<string | null>(null);
  const [auction, setAuction] =
    useState<GetAuctionByAuctionIdQuery["auction"]>(null);
  const [showBidForm, setShowBidForm] = useState(false);

  const minNextBidEth = formatEther(
    calculateMinNextBid(
      BigInt(auction?.highestBidAmount || "0"),
      BigInt(auction?.reservePrice || "0"),
      BigInt(auction?.minBidIncrementBps || "0"),
    ),
  );

  const fetchAuctionWithRetry = useCallback(
    async (retryCount = 0) => {
      try {
        setError(null);

        const response = await fetch(`${API_URL}/api/graphql`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            document: GetAuctionByAuctionIdDocument,
            variables: {
              auctionID: params.id,
              currentTimeEpoch: Math.floor(Date.now() / 1000),
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.auction) {
          notFound();
        }

        setAuction(data.auction);
      } catch (error) {
        console.error("Error fetching auction:", error);

        if (retryCount < MAX_RETRIES) {
          await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
          return fetchAuctionWithRetry(retryCount + 1);
        }

        setError(
          "Failed to load auction data. Please try refreshing the page.",
        );
        toast.error(
          "Failed to load auction data. Please try refreshing the page.",
        );
      }
    },
    [params.id],
  );

  React.useEffect(() => {
    fetchAuctionWithRetry();
  }, [fetchAuctionWithRetry]);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => fetchAuctionWithRetry()}>Retry</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!auction) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <p className="text-lg">Loading auction details...</p>
      </div>
    );
  }

  const timeUntilEnd = new Date(parseInt(auction.endTime) * 1000);
  const isEnded = timeUntilEnd < new Date();
  const currentBidEth = formatEther(BigInt(auction.highestBidAmount || "0"));

  return (
    <SimpleLayout title="Auction Details">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div>
            {auction.tokenReference?.metadata?.image ? (
              <div className="aspect-square w-full overflow-hidden rounded-xl">
                <NFTImage
                  src={auction.tokenReference.metadata.image}
                  alt={
                    auction.tokenReference.metadata.name ||
                    `Token #${auction.tokenId}`
                  }
                />
              </div>
            ) : (
              <div className="aspect-square w-full bg-gray-100 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
          </div>

          {/* Right Column - Auction Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                {auction.tokenReference?.metadata?.name ||
                  `Token #${auction.tokenId}`}
              </h1>
              <p className="text-gray-600">
                {auction.tokenReference?.metadata?.description}
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Auction Details</CardTitle>
                <CardDescription>
                  {isEnded
                    ? "Auction has ended"
                    : "Time remaining: " + formatDistanceToNow(timeUntilEnd)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="break-words">
                    <p className="text-sm text-gray-500">Current Bid</p>
                    <AmountDisplay
                      amount={currentBidEth}
                      symbol="ETH"
                      size="lg"
                      decimals={18}
                    />
                  </div>
                  <div className="break-words">
                    <p className="text-sm text-gray-500">Reserve Price</p>
                    <AmountDisplay
                      amount={formatEther(BigInt(auction.reservePrice))}
                      symbol="ETH"
                      size="lg"
                      decimals={18}
                    />
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Auction Owner</p>
                  <Address address={auction.auctionOwner as `0x${string}`} />
                </div>

                {auction.currentBidder && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Highest Bidder</p>
                    <Address address={auction.currentBidder as `0x${string}`} />
                  </div>
                )}

                {!isEnded && (
                  <div className="pt-4">
                    {showBidForm ? (
                      <PlaceBid
                        isOpen={showBidForm}
                        onOpenChange={setShowBidForm}
                        auctionItem={auction as unknown as AuctionItem}
                        auctionHouseAddress={
                          auction.auctionHouse
                            ?.auctionHouseAddress as `0x${string}`
                        }
                        auctionId={BigInt(auction.auctionId)}
                        currentBid={currentBidEth}
                        minNextBid={minNextBidEth}
                      />
                    ) : (
                      <Button
                        className="w-full"
                        size="lg"
                        onClick={() => setShowBidForm(true)}
                      >
                        Place Bid
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Bid History */}
            <Card>
              <CardHeader>
                <CardTitle>Bid History</CardTitle>
              </CardHeader>
              <CardContent>
                {auction.bids.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No bids yet</p>
                ) : (
                  <div className="space-y-4">
                    {auction.bids.map(
                      (
                        bid: {
                          bidder: string;
                          timestamp: string;
                          amount: string;
                        },
                        index: number,
                      ) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <div>
                            <p className="font-mono text-sm">
                              <Address address={bid.bidder as `0x${string}`} />
                            </p>
                            <p className="text-sm text-gray-500">
                              {format(
                                new Date(parseInt(bid.timestamp) * 1000),
                                "PPp",
                              )}
                            </p>
                          </div>
                          <AmountDisplay
                            amount={formatEther(BigInt(bid.amount))}
                            symbol="ETH"
                            size="lg"
                            decimals={18}
                          />
                        </div>
                      ),
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}
