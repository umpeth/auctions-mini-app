"use client";

import React from "react";
import SimpleLayout from "@/components/SimpleLayout";
import { ResponsiveBreadcrumb } from "@/components/ui/responsive-breadcrumb";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { truncateAddress } from "@/lib/misc";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import { useEffect } from "react";

export default function AuctionHouseClient() {
  const { name } = useParams();
  const decodedAddress = decodeURIComponent(name as string);
  const { setFrameReady, isFrameReady } = useMiniKit();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Auctions", href: "/auctions" },
    { label: truncateAddress(decodedAddress) },
  ];

  return (
    <SimpleLayout title={`Auction House: ${truncateAddress(decodedAddress)}`}>
      <div className="container mx-auto px-2 sm:px-4">
        <ResponsiveBreadcrumb items={breadcrumbItems} />

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link href={`/auctions/house/${name}/new`}>
              <Button>Create New Auction</Button>
            </Link>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <span className="font-semibold text-yellow-800 dark:text-yellow-200">
                🚧 WIP
              </span>
              <span className="ml-2 text-yellow-700 dark:text-yellow-300">
                This auction house interface is currently under development.
                Some features may be limited or unavailable.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Auction Management</h2>
              <div className="text-muted-foreground">
                Manage your auctions and monitor their status. Create new
                auctions or review existing ones.
              </div>
            </div>
            {/* Auction House Details */}
            {/* TODO: add real detail components */}
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Active Auctions</h2>
              <div className="text-muted-foreground">
                No active auctions found.
              </div>
            </div>

            <div className="mt-8 bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Past Auctions</h2>
              <div className="text-muted-foreground">
                No past auctions found.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}
