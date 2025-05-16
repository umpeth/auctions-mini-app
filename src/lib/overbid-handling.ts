import { PremiumPayment } from "@/graphql/generated";
import { GetNewOverbidEventsDocument } from "@/graphql/queryDocuments";
import { getBids } from "@/lib/redis";
import { sendNotificationWithRetry } from "@/lib/notification-worker";

export interface OverbidResult {
  wasOverbid: boolean;
  outbidInfo?: {
    outbidUser: string;
    originalBid: bigint;
    premiumAmount: bigint;
    timestamp: number;
  };
}

export async function checkForOverbid(
  auctionHouseAddress: string,
  auctionId: string,
  bid: { fid: string; bidderAddress: string; timestampInSeconds: number },
): Promise<OverbidResult> {
  const auctionIdentifier = `${auctionHouseAddress}-${auctionId}`;
  const baseUrl = process.env.NEXT_PUBLIC_URL || "localhost:3000";
  // TODO analyze how we can improve the timestamp offset
  const queryTimestamp = bid.timestampInSeconds - 60 * 60; // 1 hour before our bid

  const response = await fetch(`${baseUrl}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      document: GetNewOverbidEventsDocument,
      variables: {
        auctionId: auctionIdentifier,
        afterTimestamp: queryTimestamp.toString(),
      },
    }),
  });

  const data = await response.json();

  const recentOverbids = data.auction?.premiumPayments || [];
  const trackedBids = await getBids(auctionHouseAddress, auctionId);

  const relevantOverbid = recentOverbids.find(
    (overbid: PremiumPayment) =>
      overbid.newBidder.toLowerCase() === bid.bidderAddress.toLowerCase() &&
      Number(overbid.timestamp) < bid.timestampInSeconds,
  );

  if (!relevantOverbid) {
    return { wasOverbid: false };
  }

  const outbidBid = trackedBids?.find(
    (bid) =>
      bid.bidderAddress.toLowerCase() ===
        relevantOverbid.outbidUser.toLowerCase() && bid.fid !== "anonymous",
  );
  console.log("outbidBid", outbidBid);

  // TODO: notify the outbid user

  if (outbidBid) {
    await sendNotificationWithRetry(
      Number(outbidBid.fid),
      "You were outbid",
      "You were outbid by someone else. Check out the auction to see if you can reclaim your position as the highest bidder.",
    );
  }

  return {
    wasOverbid: true,
    outbidInfo: {
      outbidUser: relevantOverbid.outbidUser,
      originalBid: BigInt(relevantOverbid.originalBid),
      premiumAmount: BigInt(relevantOverbid.premiumAmount),
      timestamp: Number(relevantOverbid.timestamp),
    },
  };
}
