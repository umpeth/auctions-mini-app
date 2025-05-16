import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { GetAuctionHousesByOwnerDocument } from "@/graphql/queryDocuments";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { AuctionHouse } from "@/graphql/generated";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AuctionHouseSelector() {
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [auctionHouses, setAuctionHouses] = useState<AuctionHouse[]>([]);

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

  if (!address) {
    return (
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Connect Your Wallet</h2>
        <p>Please connect your wallet to create an auction.</p>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card className="p-6">
        <p>Loading your auction houses...</p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6">
        <p>Error loading auction houses. Please try again.</p>
      </Card>
    );
  }

  // const auctionHouses = data?.auctionHouses || [];

  if (auctionHouses.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Create New Auction</h2>
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
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Create New Auction</h2>
        <p className="text-muted-foreground">
          Select an auction house to create your auction in.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          {auctionHouses.map((house) => (
            <Link
              key={house.name}
              href={`/auctions/house/${house.auctionHouseAddress}/new`}
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
                      {house.auctions?.length === 1 ? "auction" : "auctions"}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div>
          <Link href="/auctions/house/new">
            <Button variant="outline">
              <PlusIcon className="w-4 h-4 mr-2" />
              Create Another Auction House
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
