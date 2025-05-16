"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GetActiveAuctionsDocument } from "@/graphql/queryDocuments";
import Link from "next/link";
import { Auction } from "@/graphql/generated";
import { PremiumAuctionIcon } from "@/components/auction/PremiumAuctionIcon";
import { formatEther } from "viem";
import { AmountDisplay } from "@/components/AmountDisplay";
import { Skeleton } from "@/components/ui/skeleton";
import { Countdown } from "@/components/ui/Countdown";

export function AuctionCarousel() {
  const [auctions, setAuctions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch("/api/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            document: GetActiveAuctionsDocument,
            variables: {
              currentTimeEpoch: Math.floor(Date.now() / 1000),
            },
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch auctions");
        }

        const data = await response.json();
        setAuctions(data.auctions || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuctions();
  }, []);

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-center">
        <p className="text-red-700">Error: {error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <Carousel>
        <CarouselContent>
          {[1, 2, 3].map((i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent className="p-3 sm:p-6">
                  <div className="space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  }

  if (auctions.length === 0) {
    return (
      <div className="rounded-lg bg-gray-50 p-8 text-center">
        <p className="text-gray-600">No active auctions found</p>
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {auctions.map((auction: Auction) => (
          <CarouselItem key={auction.id} className="md:basis-1/2 lg:basis-1/3">
            <Link href={`/auction/${auction.id}`}>
              <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-gray-300 border-2 border-gray-200">
                <CardContent className="flex flex-col gap-0 sm:gap-2 p-3 sm:p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {auction.tokenReference?.metadata?.name}
                    </h3>
                    {auction.isPremiumAuction && (
                      <PremiumAuctionIcon
                        minBidIncrementBps={auction.minBidIncrementBps}
                        premiumBps={auction.premiumBps}
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    {auction.highestBidAmount !== "0" ? (
                      <div>
                        <div className="text-sm text-gray-500">Current Bid</div>
                        <AmountDisplay
                          amount={formatEther(BigInt(auction.highestBidAmount))}
                          symbol="ETH"
                          size="lg"
                          decimals={18}
                        />
                      </div>
                    ) : (
                      <div>
                        <div className="text-sm text-gray-500">Minimum Bid</div>
                        <AmountDisplay
                          amount={formatEther(BigInt(auction.reservePrice))}
                          symbol="ETH"
                          size="lg"
                          decimals={18}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-gray-50 px-3 sm:px-6 py-3 sm:py-4">
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-medium text-gray-900">
                      Time Remaining:
                    </div>
                    <div className="text-sm text-gray-600">
                      <Countdown deadline={Number(auction.endTime)} />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
