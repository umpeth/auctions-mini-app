import { useEffect, useState } from "react";
// import { GraphQLClient } from "graphql-request";
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
  reservePrice: string;
  highestBid: string;
  currentBidder: string | null;
  winner: string | null;
  startTime: string;
  endTime: string;
  auctionOwner: string;
  isPremiumAuction: boolean;
  premiumRate: number;
  metadata?: {
    name?: string | null;
    description?: string | null;
    image?: string | null;
  };
}

function formatTimestamp(ts: number): string {
  if (!ts) return "N/A";
  const date = new Date(ts * 1000);
  return date.toISOString().replace("T", " ").substring(0, 19);
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
          const endTimeStr = formatTimestamp(auction.endTime);
          const startTimeStr = formatTimestamp(auction.startTime);
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
            reservePrice: auction.reservePrice?.toString() ?? "",
            highestBid: auction.highestBidAmount?.toString() ?? "",
            currentBidder: highestBidder,
            winner,
            startTime: startTimeStr,
            endTime: endTimeStr,
            auctionOwner: auction.auctionOwner?.toString() ?? "",
            isPremiumAuction: auction.isPremiumAuction,
            premiumRate: auction.premiumBps,
          };
          if (auction.tokenReference?.metadata) {
            formattedAuction.metadata = {
              name: auction.tokenReference.metadata.name,
              description: auction.tokenReference.metadata.description,
              image: auction.tokenReference.metadata.image,
            };
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
