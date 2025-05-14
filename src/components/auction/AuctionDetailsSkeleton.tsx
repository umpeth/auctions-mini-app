"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function AuctionDetailsSkeleton() {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image Skeleton */}
        <div>
          <div className="aspect-square w-full overflow-hidden rounded-xl">
            <Skeleton className="h-full w-full" />
          </div>
          {/* Thumbnail grid skeleton */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="aspect-square w-full rounded-lg" />
            ))}
          </div>
        </div>

        {/* Right Column - Details Skeleton */}
        <div className="space-y-6">
          <div>
            <Skeleton className="h-10 w-3/4 mb-2" /> {/* Title */}
            <Skeleton className="h-4 w-full" /> {/* Description line 1 */}
            <Skeleton className="h-4 w-2/3 mt-2" /> {/* Description line 2 */}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Auction Details</CardTitle>
              <CardDescription>
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-6 w-6" /> {/* Clock icon */}
                  <Skeleton className="h-6 w-32" /> {/* Countdown */}
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="break-words">
                  <Skeleton className="h-4 w-20 mb-2" />{" "}
                  {/* "Current Bid" label */}
                  <Skeleton className="h-8 w-32" /> {/* Current bid amount */}
                </div>
                <div className="break-words">
                  <Skeleton className="h-4 w-24 mb-2" />{" "}
                  {/* "Reserve Price" label */}
                  <Skeleton className="h-8 w-32" /> {/* Reserve price amount */}
                </div>
              </div>

              <div>
                <Skeleton className="h-4 w-24 mb-2" />{" "}
                {/* "Auction Owner" label */}
                <Skeleton className="h-12 w-full max-w-md" />{" "}
                {/* Farcaster identity */}
              </div>

              <div>
                <Skeleton className="h-4 w-28 mb-2" />{" "}
                {/* "Highest Bidder" label */}
                <Skeleton className="h-12 w-full max-w-md" />{" "}
                {/* Farcaster identity */}
              </div>

              <div className="pt-4">
                <Skeleton className="h-10 w-full" /> {/* Place bid button */}
              </div>
            </CardContent>
          </Card>

          {/* Bid History Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle>Bid History</CardTitle>
            </CardHeader>
            <CardContent>
              {[1, 2, 3].map((i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <Skeleton className="h-12 w-full" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
