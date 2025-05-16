"use client";

import React, { useEffect } from "react";
import { AuctionHouseSelector } from "@/components/auction/AuctionHouseSelector";
import SimpleLayout from "@/components/SimpleLayout";
import { ResponsiveBreadcrumb } from "@/components/ui/responsive-breadcrumb";
import { useMiniKit } from "@coinbase/onchainkit/minikit";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Auctions", href: "/auctions" },
  { label: "Create New Auction" },
];

export default function CreateAuctionClient() {
  const { setFrameReady, isFrameReady } = useMiniKit();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  return (
    <SimpleLayout title="Create New Auction">
      <div className="container mx-auto px-2 sm:px-4">
        <ResponsiveBreadcrumb items={breadcrumbItems} />
        <div className="max-w-2xl mx-auto">
          <AuctionHouseSelector />
        </div>
      </div>
    </SimpleLayout>
  );
}
