"use client";
import { AuctionGrid } from "@/components/auction/AuctionGrid";
import { GetEndedAuctionsDocument } from "@/graphql/queryDocuments";
import SimpleLayout from "@/components/SimpleLayout";
import { ResponsiveBreadcrumb } from "@/components/ui/responsive-breadcrumb";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Auctions", href: "/auctions" },
  { label: "Active Auctions" },
];

export default function EndedAuctionsClient() {
  const [auctions, setAuctions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch(`${API_URL}/api/graphql`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            document: GetEndedAuctionsDocument,
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
    <SimpleLayout title="Ended Auctions">
      <div className="space-y-4 p-4">
        <ResponsiveBreadcrumb items={breadcrumbItems} />
        {error ? (
          <p className="text-red-500 text-center">Error: {error.message}</p>
        ) : isLoading ? (
          <p className="text-gray-500 text-center">Loading auctions...</p>
        ) : auctions.length === 0 ? (
          <p className="text-gray-500 text-center">No auctions found</p>
        ) : (
          <AuctionGrid auctions={auctions} />
        )}
      </div>
    </SimpleLayout>
  );
}
