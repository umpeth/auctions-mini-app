import Image from "next/image";
import Link from "next/link";
import { formatEther } from "viem";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { GetAuctionsByStatusQuery } from "@/graphql/generated";
import { formatDistanceToNow } from "date-fns";

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
              <h3 className="text-lg font-semibold">
                {auction.tokenReference?.metadata?.name ||
                  `Token #${auction.tokenId}`}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {auction.tokenReference?.metadata?.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {auction.tokenReference?.metadata?.image && (
                  <div className="aspect-square w-full overflow-hidden rounded-lg">
                    <Image
                      src={auction.tokenReference.metadata.image}
                      alt={
                        auction.tokenReference.metadata.name ||
                        `Token #${auction.tokenId}`
                      }
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <p>
                  <span className="font-medium">Current Bid: </span>
                  {formatEther(BigInt(auction.highestBidAmount || "0"))} ETH
                </p>
                <p>
                  <span className="font-medium">Reserve Price: </span>
                  {formatEther(BigInt(auction.reservePrice))} ETH
                </p>
                <p>
                  <span className="font-medium">Ends: </span>
                  {formatDistanceToNow(
                    new Date(parseInt(auction.endTime) * 1000),
                    { addSuffix: true },
                  )}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                {auction.currentBidder
                  ? `Highest Bidder: ${auction.currentBidder.slice(0, 6)}...${auction.currentBidder.slice(-4)}`
                  : "No bids yet"}
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
