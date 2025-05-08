import React from "react";
import { parseUnits, formatUnits } from "viem";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

/**
 * AmountDisplay Component
 * Displays Ethereum or ERC20 token amounts with appropriate formatting
 */
interface AmountDisplayProps {
  /** The amount to display (in base units, as bigint, string, or number) */
  amount: string | number | bigint;
  /** The currency symbol (e.g. "ETH", "DAI") */
  symbol?: string;
  /** Whether to show the full amount in the tooltip */
  showFull?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Size variant ('sm', 'md', 'lg') */
  size?: "sm" | "md" | "lg";
  /** Number of decimals for the token (default 18) */
  decimals?: number;
}

export const AmountDisplay: React.FC<AmountDisplayProps> = ({
  amount,
  symbol = "ETH",
  showFull = true,
  className = "",
  size = "md",
  decimals = 18,
}) => {
  const amountStr = amount != null ? amount.toString() : "NaN";

  let invalid = false;
  let fullAmountStr = "";
  let amountNum = NaN;

  if (amount == null) {
    invalid = true;
  } else if (/[eE]/.test(amountStr)) {
    // Handle scientific notation
    amountNum = parseFloat(amountStr);
    fullAmountStr = amountNum.toString();
  } else {
    try {
      // Parse user-friendly amount to base units, then format back
      const amountWei = parseUnits(amountStr, decimals);
      fullAmountStr = formatUnits(amountWei, decimals);
      amountNum = parseFloat(fullAmountStr);
    } catch {
      invalid = true;
    }
  }

  // Determine display formatting
  const getFormattedAmount = () => {
    if (invalid || isNaN(amountNum)) return "Invalid amount";
    if (amountNum === 0) return "0";
    if (amountNum > 0 && amountNum < 0.000001) return "<0.000001";
    if (amountNum < 0.01) return amountNum.toFixed(6);
    if (amountNum < 1000) return amountNum.toFixed(4);
    // Large values: group integer part and show two decimals
    const [whole, fraction = ""] = fullAmountStr.split(".");
    const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const frac =
      fraction.length >= 2 ? fraction.slice(0, 2) : fraction.padEnd(2, "0");
    return `${formattedWhole}.${frac}`;
  };

  // Determine full amount for tooltip
  const getFullAmount = () => {
    if (invalid || fullAmountStr === "" || isNaN(amountNum))
      return "Invalid amount";
    console.log(fullAmountStr);
    const [whole, fraction] = fullAmountStr.split(".");
    const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return fraction ? `${formattedWhole}.${fraction}` : formattedWhole;
  };

  // Size-based CSS classes
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-sm ";
      case "lg":
        return "text-lg";
      default:
        return "text-base";
    }
  };

  const displayContent = (
    <div
      className={cn(
        "inline-flex items-center rounded-md",
        getSizeClasses(),
        className,
      )}
    >
      <span className="font-mono whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
        {getFormattedAmount()}
      </span>
      <span className="ml-1 font-medium text-gray-600">{symbol}</span>
    </div>
  );

  if (!showFull) {
    return displayContent;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{displayContent}</TooltipTrigger>
      <TooltipContent>
        <span className="font-mono">
          {getFullAmount()} {symbol}
        </span>
      </TooltipContent>
    </Tooltip>
  );
};
