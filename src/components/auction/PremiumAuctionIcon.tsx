"use client";

import { GemIcon } from "lucide-react";
import { useIsTouch } from "@/hooks/useIsTouch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PremiumAuctionIconProps {
  minBidIncrementBps: number;
  premiumBps: number;
}

const calculateBidExample = (
  minBidIncrementBps: number,
  premiumBps: number,
) => {
  const baseBid = 1; // 1 ETH as base example
  const increment = (baseBid * minBidIncrementBps) / 10000;
  const nextBid = baseBid + increment;
  const premium = (increment * premiumBps) / 10000;
  const reclaimAmount = baseBid + premium;

  return {
    baseBid,
    nextBid,
    reclaimAmount,
  };
};

export function PremiumAuctionIcon({
  minBidIncrementBps,
  premiumBps,
}: PremiumAuctionIconProps) {
  const isTouch = useIsTouch();
  const example = calculateBidExample(minBidIncrementBps, premiumBps);

  const content = (
    <>
      <h3 className="text-lg font-semibold mb-2">
        Premium Auction: Every Bid&apos;s a Win!
      </h3>
      <ul className="mb-3 space-y-1">
        <li className="flex items-center">
          <span className="mr-2">⬆️</span>
          <span>
            <strong>Bid:</strong> Beat the last bid by ≥{" "}
            {minBidIncrementBps / 100}%
          </span>
        </li>
        <li className="flex items-center">
          <span className="mr-2">💰</span>
          <span>
            <strong>Reclaim:</strong> If outbid, get your bid back +{" "}
            {premiumBps / 100}% of that {minBidIncrementBps / 100}% increment
          </span>
        </li>
      </ul>
      <div className="text-sm mb-3">
        <p className="font-medium">Example:</p>
        <p>
          &bull; Current: <strong>{example.baseBid} ETH</strong> → Next:{" "}
          <strong>{example.nextBid} ETH</strong>
        </p>
        <p>
          &bull; You reclaim: <strong>{example.reclaimAmount} ETH</strong>
        </p>
      </div>
      <p className="text-sm italic text-gray-600">
        Bid boldly, because even if you lose, you still profit!
      </p>
    </>
  );

  return isTouch ? (
    <Popover>
      <PopoverTrigger>
        <span className="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] transition-all animate-pulse shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.65)]">
          <span className="relative inline-flex h-full w-full items-center rounded-lg bg-white p-2 text-sm font-medium text-gray-900 transition-all group-hover:bg-white/90">
            <GemIcon className="h-6 w-6 text-blue-500 animate-hue-rotate" />
          </span>
        </span>
      </PopoverTrigger>
      <PopoverContent className="max-w-sm space-y-2">{content}</PopoverContent>
    </Popover>
  ) : (
    <Tooltip>
      <TooltipTrigger>
        <span className="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] transition-all animate-pulse shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.65)]">
          <span className="relative inline-flex h-full w-full items-center rounded-lg bg-white p-2 text-sm font-medium text-gray-900 transition-all group-hover:bg-white/90">
            <GemIcon className="h-6 w-6 text-blue-500 animate-hue-rotate" />
          </span>
        </span>
      </TooltipTrigger>
      <TooltipContent className="max-w-sm space-y-2 bg-white text-black shadow-md">
        {content}
      </TooltipContent>
    </Tooltip>
  );
}
