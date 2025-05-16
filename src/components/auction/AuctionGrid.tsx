"use client";
import Link from "next/link";
import { formatEther } from "viem";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { GetAuctionsByStatusQuery } from "@/graphql/generated";
import NFTImage from "@/components/NFTImage";
import { AmountDisplay } from "@/components/AmountDisplay";
import { PremiumAuctionIcon } from "@/components/auction/PremiumAuctionIcon";
import { Countdown } from "@/components/ui/Countdown";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AuctionGridProps {
  auctions: GetAuctionsByStatusQuery["auctions"];
}

export function AuctionGrid({ auctions }: AuctionGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {auctions.map((auction) => (
        <Link href={`/auction/${auction.id}`} key={auction.id}>
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">
                  {auction.tokenReference?.metadata?.name ||
                    `Token #${auction.tokenId}`}
                </h3>
                {auction.isPremiumAuction && (
                  <PremiumAuctionIcon
                    minBidIncrementBps={auction.minBidIncrementBps}
                    premiumBps={auction.premiumBps}
                  />
                )}
              </div>
              <p className="text-sm text-gray-500 line-clamp-2">
                {auction.tokenReference?.metadata?.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {auction.tokenReference?.metadata?.image && (
                  <div className="aspect-square w-full overflow-hidden rounded-lg">
                    <NFTImage
                      src={auction.tokenReference.metadata.image}
                      alt={
                        auction.tokenReference.metadata.name ||
                        `Token #${auction.tokenId}`
                      }
                    />
                  </div>
                )}
                <div>
                  <span className="font-medium">Current Bid: </span>
                  <AmountDisplay
                    amount={formatEther(
                      BigInt(auction.highestBidAmount || "0"),
                    )}
                    symbol="ETH"
                    size="sm"
                    decimals={18}
                  />
                </div>
                <div>
                  <span className="font-medium">Minimum Bid: </span>
                  <AmountDisplay
                    amount={formatEther(BigInt(auction.reservePrice))}
                    symbol="ETH"
                    size="sm"
                    decimals={18}
                  />
                </div>
                <div>
                  <span className="font-medium">Ends: </span>

                  {Number(auction.endTime) < new Date().getTime() / 1000 ? (
                    <span>Ended</span>
                  ) : (
                    <Countdown deadline={Number(auction.endTime)} />
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <p className="text-sm text-gray-500 w-full">
                {auction.currentBidder
                  ? `Highest Bidder: ${auction.currentBidder.slice(0, 6)}...${auction.currentBidder.slice(-4)}`
                  : "No bids yet"}
              </p>
              <Button
                className="w-full group transition-all duration-200 hover:scale-[1.02]"
                variant="default"
              >
                Explore Auction
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
