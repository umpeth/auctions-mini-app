"use client";
import { format } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { formatEther } from "viem";
import { Auction } from "@/graphql/generated";
import NFTImage from "@/components/NFTImage";
import { PlaceBid } from "@/components/auction/PlaceBid";
import { calculateMinNextBid } from "@/lib/utils";
import { AmountDisplay } from "@/components/AmountDisplay";
import { PremiumAuctionIcon } from "@/components/auction/PremiumAuctionIcon";
import { AuctionItem } from "@/types";

import { FarcasterIdentity } from "@/components/FarcastIdentity";
import { Countdown } from "@/components/ui/Countdown";
import { CustomIdentity } from "@/components/CustomIdentity";
import { ConnectWallet } from "@coinbase/onchainkit/wallet";
import { useAccount } from "wagmi";
import { ExternalLinkIcon } from "lucide-react";

interface AuctionDetailsProps {
  auction: Auction;
}

export function AuctionDetails({ auction }: AuctionDetailsProps) {
  const { isConnected } = useAccount();
  const [selectedImage, setSelectedImage] = useState<string>(
    auction?.tokenReference?.metadata?.image || "",
  );
  const minNextBidEth = formatEther(
    calculateMinNextBid(
      BigInt(auction?.highestBidAmount || "0"),
      BigInt(auction?.reservePrice || "0"),
      BigInt(auction?.minBidIncrementBps || "0"),
    ),
  );

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

  const timeUntilEnd = new Date(parseInt(auction.endTime) * 1000);
  const isEnded = timeUntilEnd < new Date();
  const currentBidEth = formatEther(BigInt(auction.highestBidAmount || "0"));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div>
          {auction.tokenReference?.metadata?.image ? (
            <div className="aspect-square w-full overflow-hidden rounded-xl">
              <NFTImage
                src={selectedImage}
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

          {(auction?.tokenReference?.metadata?.supplementalImages ?? [])
            .length > 0 && (
            <div className="mt-4 grid grid-cols-4 gap-2">
              <div
                className={`aspect-square cursor-pointer overflow-hidden rounded-lg ${
                  selectedImage === auction?.tokenReference?.metadata?.image
                    ? "ring-2 ring-indigo-500"
                    : ""
                }`}
                onClick={() =>
                  setSelectedImage(
                    auction?.tokenReference?.metadata?.image || "",
                  )
                }
              >
                <NFTImage
                  src={auction?.tokenReference?.metadata?.image || ""}
                  alt="Main image"
                  disableModal={true}
                />
              </div>
              {(
                auction?.tokenReference?.metadata?.supplementalImages ?? []
              ).map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square cursor-pointer overflow-hidden rounded-lg ${
                    selectedImage === image ? "ring-2 ring-indigo-500" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <NFTImage
                    src={image}
                    alt={`Supplemental image ${index + 1}`}
                    disableModal={true}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Auction Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
              {auction.tokenReference?.metadata?.name ||
                `Collectible #${auction.tokenId}`}
              {auction.isPremiumAuction && (
                <PremiumAuctionIcon
                  minBidIncrementBps={auction.minBidIncrementBps}
                  premiumBps={auction.premiumBps}
                />
              )}
            </h1>
            <p className="text-gray-600">
              {auction.tokenReference?.metadata?.description}
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Auction Details</CardTitle>
              <CardDescription>
                {isEnded ? (
                  "Auction has ended"
                ) : (
                  <Countdown deadline={Number(auction.endTime)} />
                )}
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
                <FarcasterIdentity
                  address={auction.auctionOwner as `0x${string}`}
                />
              </div>
              {auction.currentBidder && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Highest Bidder</p>
                  <FarcasterIdentity
                    address={auction.currentBidder as `0x${string}`}
                  />
                </div>
              )}

              {!isEnded && (
                <div className="pt-4">
                  {isConnected ? (
                    <PlaceBid
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
                    <ConnectWallet>
                      <Button className="w-full" size="lg">
                        Connect Wallet to Place Bid
                      </Button>
                    </ConnectWallet>
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
              {auction.bids?.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No bids yet</p>
              ) : (
                <div className="space-y-4">
                  {auction.bids?.map(
                    (
                      bid: {
                        bidder: string;
                        timestamp: string;
                        amount: string;
                        transactionHash: string;
                      },
                      index: number,
                    ) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        <div className="flex-1 min-w-0">
                          <span className="font-mono text-sm truncate block">
                            <CustomIdentity
                              address={bid.bidder as `0x${string}`}
                            />
                          </span>
                          <p className="text-xs text-gray-500">
                            {format(
                              new Date(parseInt(bid.timestamp) * 1000),
                              "PPp",
                            )}
                          </p>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                          <AmountDisplay
                            amount={formatEther(BigInt(bid.amount))}
                            symbol="ETH"
                            size="lg"
                            decimals={18}
                          />
                          <a
                            href={`https://basescan.org/tx/${bid.transactionHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-md whitespace-nowrap"
                          >
                            <span>View Tx</span>
                            <ExternalLinkIcon className="w-3.5 h-3.5" />
                          </a>
                        </div>
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
  );
}
