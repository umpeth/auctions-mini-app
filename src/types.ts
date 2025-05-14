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
  isEnded: boolean;
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
