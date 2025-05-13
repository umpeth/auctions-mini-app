"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface AuctionGridSkeletonProps {
  count?: number;
}

export function AuctionGridSkeleton({ count = 6 }: AuctionGridSkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="h-full">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Skeleton className="h-7 w-48" /> {/* Title */}
              <Skeleton className="h-6 w-6 rounded-full" /> {/* Premium icon */}
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" /> {/* Description line 1 */}
              <Skeleton className="h-4 w-3/4" /> {/* Description line 2 */}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* NFT Image placeholder */}
              <div className="aspect-square w-full overflow-hidden rounded-lg">
                <Skeleton className="h-full w-full" />
              </div>

              {/* Current Bid */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-24" /> {/* "Current Bid:" label */}
                <Skeleton className="h-4 w-32" /> {/* Amount */}
              </div>

              {/* Reserve Price */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-28" /> {/* "Reserve Price:" label */}
                <Skeleton className="h-4 w-32" /> {/* Amount */}
              </div>

              {/* End Time */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-16" /> {/* "Ends:" label */}
                <Skeleton className="h-4 w-40" /> {/* Countdown */}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-4 w-48" /> {/* Highest bidder text */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
