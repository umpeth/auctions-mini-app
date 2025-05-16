import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculates the minimum allowed next bid for an auction.
 *
 * @param currentBidWei - The current highest bid in Wei (can be 0 if no bids yet)
 * @param reservePriceWei - The minimum price that must be met for the auction in Wei
 * @param minBidIncrementBps - The minimum percentage increase for the next bid in basis points
 * @returns The minimum amount in Wei that must be bid next
 *
 * @example
 * // With a current bid of 1 ETH and 0.5% increment
 * const minNext = calculateMinNextBid(
 *   BigInt(1000000000000000000), // 1 ETH in Wei
 *   BigInt(100000000000000000),  // 0.1 ETH reserve
 *   BigInt(50)                   // 0.5% increment
 * );
 */
export function calculateMinNextBid(
  currentBidWei: bigint,
  reservePriceWei: bigint,
  minBidIncrementBps: bigint,
): bigint {
  // If no bids yet, use reserve price
  if (currentBidWei === BigInt(0)) {
    return reservePriceWei;
  }

  const increment = (currentBidWei * minBidIncrementBps) / BigInt(10000);
  const nextBid = currentBidWei + increment;

  // Ensure next bid is at least the reserve price
  return nextBid > reservePriceWei ? nextBid : reservePriceWei;
}
