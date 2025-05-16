"use client";
import { AuctionGrid } from "@/components/auction/AuctionGrid";
import { GetActiveAuctionsDocument } from "@/graphql/queryDocuments";
import SimpleLayout from "@/components/SimpleLayout";
import { ResponsiveBreadcrumb } from "@/components/ui/responsive-breadcrumb";
import { useEffect, useState } from "react";
import { AuctionGridSkeleton } from "@/components/auction/AuctionGridSkeleton";
import { useMiniKit } from "@coinbase/onchainkit/minikit";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Auctions", href: "/auctions" },
  { label: "Active Auctions" },
];

export default function ActiveAuctionsClient() {
  const [auctions, setAuctions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { setFrameReady, isFrameReady } = useMiniKit();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch("/api/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            document: GetActiveAuctionsDocument,
            variables: {
              currentTimeEpoch: Math.floor(Date.now() / 1000),
            },
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch auctions");
        }

        const data = await response.json();
        setAuctions(data.auctions || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuctions();
  }, []);

  return (
    <SimpleLayout title="Active Auctions">
      <div className="space-y-4 p-2 sm:p-4">
        <ResponsiveBreadcrumb items={breadcrumbItems} />
        {error ? (
          <p className="text-red-500 text-center">Error: {error.message}</p>
        ) : isLoading ? (
          <AuctionGridSkeleton />
        ) : auctions.length === 0 ? (
          <p className="text-gray-500 text-center">No active auctions found</p>
        ) : (
          <AuctionGrid auctions={auctions} />
        )}
      </div>
    </SimpleLayout>
  );
}
