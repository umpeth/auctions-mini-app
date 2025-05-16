"use client";

import React, { useEffect, useState } from "react";
import SimpleLayout from "@/components/SimpleLayout";
import { ResponsiveBreadcrumb } from "@/components/ui/responsive-breadcrumb";

import { useAccount } from "wagmi";
import { GetAuctionHousesByOwnerDocument } from "@/graphql/queryDocuments";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { AuctionHouse } from "@/graphql/generated";
import { useMiniKit } from "@coinbase/onchainkit/minikit";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Auction Houses", href: "/houses" },
];

export default function AuctionHouseClient() {
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [auctionHouses, setAuctionHouses] = useState<AuctionHouse[]>([]);
  const { setFrameReady, isFrameReady } = useMiniKit();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  useEffect(() => {
    if (!address) return;
    const fetchAuctions = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            document: GetAuctionHousesByOwnerDocument,
            variables: { ownerAddress: address },
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch auctions");
        }

        const data = await response.json();
        setAuctionHouses(data.auctionHouses as AuctionHouse[]);
      } catch (error) {
        console.error("Error fetching auctions:", error);
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAuctions();
  }, [address]);

  return (
    <SimpleLayout title="Auction Houses">
      <div className="space-y-4 p-2 sm:p-4">
        <ResponsiveBreadcrumb items={breadcrumbItems} />

        {!address ? (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Connect Your Wallet</h2>
            <p>Please connect your wallet to create an auction.</p>
          </Card>
        ) : isLoading ? (
          <Card className="p-6">
            <p>Loading your auction houses...</p>
          </Card>
        ) : error ? (
          <Card className="p-6">
            <p>Error loading auction houses. Please try again.</p>
          </Card>
        ) : (
          <div className="space-y-6">
            {auctionHouses.length === 0 ? (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Create New Auction House
                  </h2>
                  <p className="text-muted-foreground">
                    Start by creating your first auction house.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Link href="/auctions/house/new">
                    <Card className="p-6 hover:bg-accent cursor-pointer transition-colors border-2 border-primary border-dashed group">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">
                            Create Your First Auction House
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Get started by setting up your first auction house
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </div>
              </div>
            ) : (
              auctionHouses.map((house) => (
                <Link
                  key={house.name}
                  href={`/auctions/house/${house.auctionHouseAddress}`}
                >
                  <Card className="p-6 hover:bg-accent cursor-pointer transition-colors group border-2 border-transparent hover:border-primary">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-secondary/10 group-hover:bg-secondary/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                          <path d="M12 3v6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{house.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {house.auctions?.length || 0} active{" "}
                          {house.auctions?.length === 1
                            ? "auction"
                            : "auctions"}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </SimpleLayout>
  );
}
