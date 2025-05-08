import { useEffect, useState } from "react";
import { GetAuctionsByAuctionHouseAddressDocument } from "@/graphql/queryDocuments";
import {
  GetAuctionsByAuctionHouseAddressQuery,
  GetAuctionsByAuctionHouseAddressQueryVariables,
} from "@/graphql/generated";

export interface AuctionItem {
  id: string;
  status: string;
  tokenId: string;
  tokenContract: string;
  reservePrice: bigint;
  highestBid: bigint;
  minNextBid: bigint;
  currentBidder: string | null;
  winner: string | null;
  startTime: bigint;
  endTime: bigint;
  auctionOwner: string;
  isPremiumAuction: boolean;
  premiumRate: bigint;
  metadata?: {
    name?: string | null;
    description?: string | null;
    image?: string | null;
  };
  bids?: Array<{
    time: bigint;
    bidder: string;
    amount: bigint;
    premiumPaid?: {
      amount: bigint;
      recipient: string;
    };
  }>;
}

// Calculate minimum next bid based on current bid and reserve price
function calculateMinNextBid(
  currentBidWei: bigint,
  reservePriceWei: bigint,
  minBidIncrementBps: bigint = BigInt(50),
): bigint {
  // If no bids yet, use reserve price
  if (currentBidWei === BigInt(0)) {
    return reservePriceWei;
  }

  // Calculate increment (default 0.5% = 50 basis points)
  const increment = (currentBidWei * minBidIncrementBps) / BigInt(10000);
  const nextBid = currentBidWei + increment;

  // Ensure next bid is at least the reserve price
  return nextBid > reservePriceWei ? nextBid : reservePriceWei;
}

export function useAuctionItems(auctionHouseAddress: string) {
  const [auctions, setAuctions] = useState<AuctionItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!auctionHouseAddress) return;
    setLoading(true);
    setError(null);
    // Use local API route
    fetch("/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        document: GetAuctionsByAuctionHouseAddressDocument,
        variables: {
          auctionHouseAddress: auctionHouseAddress.toLowerCase(),
        } as GetAuctionsByAuctionHouseAddressQueryVariables,
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
        return res.json();
      })
      .then((result: GetAuctionsByAuctionHouseAddressQuery) => {
        const auctionHouse = result.auctionHouse;
        if (!auctionHouse) {
          setAuctions([]);
          setError(`Auction house ${auctionHouseAddress} not found`);
          setLoading(false);
          return;
        }
        const formatted = (auctionHouse.auctions || []).map((auction) => {
          const endTimeStr = auction.endTime;
          const startTimeStr = auction.startTime;
          let winner: string | null = null;
          if (auction.status === "COMPLETED") {
            winner = auction.currentBidder ?? null;
          }
          let highestBidder: string | null = null;
          if (auction.bids && auction.bids.length > 0) {
            highestBidder = auction.bids[0].bidder;
          }
          const formattedAuction: AuctionItem = {
            id: auction.auctionId?.toString() ?? auction.id,
            status: auction.status,
            tokenId: auction.tokenId?.toString() ?? "",
            tokenContract: auction.tokenContract?.toString() ?? "",
            reservePrice: BigInt(auction.reservePrice),
            highestBid: BigInt(auction.highestBidAmount),
            minNextBid: calculateMinNextBid(
              BigInt(auction.highestBidAmount),
              BigInt(auction.reservePrice),
            ),
            currentBidder: highestBidder,
            winner,
            startTime: BigInt(startTimeStr),
            endTime: BigInt(endTimeStr),
            auctionOwner: auction.auctionOwner?.toString() ?? "",
            isPremiumAuction: auction.isPremiumAuction,
            premiumRate: BigInt(auction.premiumBps),
          };
          if (auction.tokenReference?.metadata) {
            formattedAuction.metadata = {
              name: auction.tokenReference.metadata.name,
              description: auction.tokenReference.metadata.description,
              image: auction.tokenReference.metadata.image,
            };
          }
          if (auction.bids) {
            formattedAuction.bids = auction.bids.map((bid) => ({
              time: BigInt(bid.timestamp),
              bidder: bid.bidder,
              amount: BigInt(bid.amount),
              premiumPaid: undefined,
            }));
          }
          return formattedAuction;
        });
        setAuctions(formatted);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  }, [auctionHouseAddress]);

  return { auctions, loading, error };
}
