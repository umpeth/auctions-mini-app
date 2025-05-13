"use client";
import { notFound } from "next/navigation";
import { GetAuctionByAuctionIdDocument } from "@/graphql/queryDocuments";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import React, { useCallback, useState } from "react";
import { Auction } from "@/graphql/generated";

import SimpleLayout from "@/components/SimpleLayout";
import { ResponsiveBreadcrumb } from "@/components/ui/responsive-breadcrumb";
import { AuctionDetails } from "@/components/auction/AuctionDetails";

interface PageProps {
  params: {
    id: string;
  };
}

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

export default function AuctionPage({ params }: PageProps) {
  const [error, setError] = useState<string | null>(null);
  const [auction, setAuction] = useState<Auction | null>(null);

  const fetchAuctionWithRetry = useCallback(
    async (retryCount = 0) => {
      try {
        setError(null);

        const response = await fetch("/api/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            document: GetAuctionByAuctionIdDocument,
            variables: {
              auctionID: params.id,
              currentTimeEpoch: Math.floor(Date.now() / 1000),
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.auction) {
          notFound();
        }

        setAuction(data.auction);
      } catch (error) {
        console.error("Error fetching auction:", error);

        if (retryCount < MAX_RETRIES) {
          await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
          return fetchAuctionWithRetry(retryCount + 1);
        }

        setError(
          "Failed to load auction data. Please try refreshing the page.",
        );
        toast.error(
          "Failed to load auction data. Please try refreshing the page.",
        );
      }
    },
    [params.id],
  );

  React.useEffect(() => {
    fetchAuctionWithRetry();
  }, [fetchAuctionWithRetry]);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => fetchAuctionWithRetry()}>Retry</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!auction) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <p className="text-lg">Loading auction details...</p>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Auctions", href: "/auctions" },
    { label: "Active", href: "/auctions/active" },
    {
      label:
        auction.tokenReference?.metadata?.name || `Token #${auction.tokenId}`,
    },
  ];

  return (
    <SimpleLayout title="Auction Details">
      <div className="container mx-auto px-4 py-8">
        <ResponsiveBreadcrumb items={breadcrumbItems} />
        <AuctionDetails auction={auction} />
      </div>
    </SimpleLayout>
  );
}
