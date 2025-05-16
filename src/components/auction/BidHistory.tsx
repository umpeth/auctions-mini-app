import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatEther } from "viem";
import { ExternalLinkIcon } from "lucide-react";
import { CustomIdentity } from "@/components/CustomIdentity";
import { format } from "date-fns";
import { Bid } from "@/graphql/generated";
import { AmountDisplay } from "@/components/AmountDisplay";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface BidHistoryProps {
  bids: Bid[];
}

export function BidHistory({ bids }: BidHistoryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(bids.length / itemsPerPage);

  // Calculate the bids to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBids = bids.slice(startIndex, endIndex);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    if (totalPages <= 5) {
      // If 5 or fewer pages, show all
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      if (currentPage <= 3) {
        // Near the start
        pageNumbers.push(2, 3);
        pageNumbers.push("...");
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pageNumbers.push("...");
        pageNumbers.push(totalPages - 2, totalPages - 1);
      } else {
        // In the middle
        pageNumbers.push("...");
        pageNumbers.push(currentPage);
        pageNumbers.push("...");
      }

      // Always show last page
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bid History</CardTitle>
      </CardHeader>
      <CardContent>
        {bids?.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No bids yet</p>
        ) : (
          <>
            <div className="space-y-4">
              {currentBids?.map(
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
                        {format(
                          new Date(parseInt(bid.timestamp) * 1000),
                          "PPp",
                        )}
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
                        className="flex items-center gap-1  bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm hover:text-gray-900 transition-colors  px-2 py-1 rounded-md whitespace-nowrap"
                      >
                        View Tx
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ),
              )}
            </div>
            {totalPages > 1 && (
              <Pagination className="mt-4">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className={cn(
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer",
                      )}
                    />
                  </PaginationItem>

                  {getPageNumbers().map((pageNumber, i) => (
                    <PaginationItem key={i}>
                      {pageNumber === "..." ? (
                        <PaginationEllipsis />
                      ) : (
                        <PaginationLink
                          isActive={currentPage === pageNumber}
                          onClick={() => setCurrentPage(pageNumber as number)}
                          className="cursor-pointer"
                        >
                          {pageNumber}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      className={cn(
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer",
                      )}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
