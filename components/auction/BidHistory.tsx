import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatEther } from "viem";
import { ExternalLinkIcon } from "lucide-react";
import { CustomIdentity } from "@/components/CustomIdentity";
import { format } from "date-fns";
import { Bid } from "@/graphql/generated";
import { AmountDisplay } from "@/components/AmountDisplay";

interface BidHistoryProps {
  bids: Bid[];
}

export function BidHistory({ bids }: BidHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bid History</CardTitle>
      </CardHeader>
      <CardContent>
        {bids?.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No bids yet</p>
        ) : (
          <div className="space-y-4">
            {bids?.map(
              (
                bid: {
                  bidder: string;
                  timestamp: string;
                  amount: string;
                  transactionHash: string;
                },
                index: number,
              ) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-sm truncate block">
                      <CustomIdentity address={bid.bidder as `0x${string}`} />
                    </span>
                    <p className="text-xs text-gray-500">
                      {format(new Date(parseInt(bid.timestamp) * 1000), "PPp")}
                    </p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                    <AmountDisplay
                      amount={formatEther(BigInt(bid.amount))}
                      symbol="ETH"
                      size="lg"
                      decimals={18}
                    />
                    <a
                      href={`https://basescan.org/tx/${bid.transactionHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-md whitespace-nowrap"
                    >
                      <span>View Tx</span>
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ),
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
