"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import { formatEther } from "viem";
import { Auction } from "@/graphql/generated";
import NFTImage from "@/components/NFTImage";
import { PlaceBid } from "@/components/auction/PlaceBid";
import { calculateMinNextBid } from "@/lib/utils";
import { AmountDisplay } from "@/components/AmountDisplay";
import { PremiumAuctionIcon } from "@/components/auction/PremiumAuctionIcon";
import { FarcasterIdentity } from "@/components/FarcastIdentity";
import { Countdown } from "@/components/ui/Countdown";
import { ConnectWallet } from "@coinbase/onchainkit/wallet";
import { useAccount } from "wagmi";
import { BidHistory } from "@/components/auction/BidHistory";
import { Clock } from "lucide-react";
import SocialShare from "@/components/SocialShare";
import { useFrameActions } from "@/hooks/UseFrameAction";

interface AuctionDetailsProps {
  auction: Auction;
}

export function AuctionDetails({ auction }: AuctionDetailsProps) {
  const { isConnected } = useAccount();
  const [selectedImage, setSelectedImage] = useState<string>(
    auction?.tokenReference?.metadata?.image || "",
  );
  const { handleWarpcastShare } = useFrameActions();

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

  const getShareUrl = () => {
    const baseUrl =
      window.location.origin +
      "/auction/" +
      auction.auctionHouse?.auctionHouseAddress +
      "-" +
      auction.auctionId;
    return baseUrl;
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8">
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
            <div className="flex items-center justify-between">
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
              <SocialShare
                text={`Check out this auction for ${auction.tokenReference?.metadata?.name} on UMP.eth! 🎉`}
                image={auction.tokenReference?.metadata?.image || ""}
                variant="gradient"
                highlight={true}
                size="icon"
                url={getShareUrl()}
                onWarpcastShare={handleWarpcastShare}
              />
            </div>
            <p className="text-gray-600">
              {auction.tokenReference?.metadata?.description}
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Auction Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isEnded ? (
                <div className="flex items-center space-x-2 text-lg font-bold">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>Auction has ended</span>
                </div>
              ) : (
                <div>
                  <div className="flex items-center space-x-2 text-lg font-bold">
                    <span>Auction ends in</span>
                  </div>
                  <div className="flex items-center space-x-2 text-2xl font-bold">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <Countdown deadline={Number(auction.endTime)} />
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="break-words">
                  <p className="text-sm text-gray-500">Current Bid</p>
                  <AmountDisplay
                    amount={currentBidEth}
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
                      auctionItem={auction}
                      auctionHouseAddress={
                        auction.auctionHouse
                          ?.auctionHouseAddress as `0x${string}`
                      }
                      auctionId={BigInt(auction.auctionId)}
                      currentBid={currentBidEth}
                      minNextBid={minNextBidEth}
                    />
                  ) : (
                    <ConnectWallet
                      disconnectedLabel="Connect Wallet to Place Bid"
                      className="w-full"
                    />
                  )}
                </div>
              )}
            </CardContent>
          </Card>
          <BidHistory bids={auction.bids} />
        </div>
      </div>
    </div>
  );
}
