import { Redis } from "@upstash/redis";

// Get environment variables with explicit error messages
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || process.env.REDIS_URL;
const REDIS_TOKEN =
  process.env.UPSTASH_REDIS_REST_TOKEN || process.env.REDIS_TOKEN;

if (!REDIS_URL || !REDIS_TOKEN) {
  console.warn(
    "Redis configuration missing. Please set either:\n" +
      "- UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN\n" +
      "- or REDIS_URL and REDIS_TOKEN\n" +
      "Rate limiting and caching features will be disabled.",
  );
}

let redisClient: Redis | null = null;

try {
  if (REDIS_URL && REDIS_TOKEN) {
    redisClient = new Redis({
      url: REDIS_URL,
      token: REDIS_TOKEN,
    });
  }
} catch (error) {
  console.error("Failed to initialize Redis client:", error);
  redisClient = null;
}

export const redis = redisClient;

/**
 * Track a bid for an auction
 * @param auctionHouseAddress - The address of the auction house
 * @param auctionId - The ID of the auction
 * @param fid - The FID of the bidder
 * @param amount - The amount of the bid
 * @param bidderAddress - The address of the bidder
 */
export async function trackBid(
  auctionHouseAddress: string,
  auctionId: string,
  fid: string,
  amount: number,
  bidderAddress: string,
  timestamp: number,
) {
  if (!redis) return null;
  const key = `auction:${auctionHouseAddress}-${auctionId}:bids`;
  // Create a JSON string for the member payload
  const memberPayload = JSON.stringify({ fid, bidderAddress, timestamp });
  return await redis.zadd(key, { score: amount, member: memberPayload });
}

/**
 * Get all tracked bids for an auction
 * @param auctionHouseAddress - The address of the auction house
 * @param auctionId - The ID of the auction
 * @returns An array of all tracked bids for the auction
 */
export async function getBids(auctionHouseAddress: string, auctionId: string) {
  if (!redis) return null;
  const key = `auction:${auctionHouseAddress}-${auctionId}:bids`;
  const bids = await redis.zrange(key, 0, -1);
  return bids.map(
    (bid) =>
      JSON.parse(bid as string) as {
        fid: string;
        bidderAddress: string;
        timestamp: number;
      },
  );
}
