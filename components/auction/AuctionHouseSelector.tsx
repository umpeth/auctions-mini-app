import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { GetAuctionHousesByOwnerDocument } from "@/graphql/queryDocuments";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { AuctionHouse } from "@/graphql/generated";

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
        console.log({ data });

        setAuctionHouses(data.auctionHouses as AuctionHouse[]);
        console.log(data);
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
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">
          Create Your First Auction House
        </h2>
        <p className="mb-4">
          You need to create an auction house before you can create auctions.
        </p>
        <Link href="/auctions/house/new">
          <Button className="w-full">Create Auction House</Button>
        </Link>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Select an Auction House</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {auctionHouses.map((house) => (
          <Link
            key={house.name}
            href={`/auctions/house/${house.auctionHouseAddress}/new`}
          >
            <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
              <h3 className="font-medium">{house.name}</h3>
              <p className="text-sm text-muted-foreground">
                {house.auctions?.length || 0} auctions
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
