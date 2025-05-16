"use client";

import React, { useEffect } from "react";
import SimpleLayout from "@/components/SimpleLayout";
import { ResponsiveBreadcrumb } from "@/components/ui/responsive-breadcrumb";
import { CreateAuctionHouse } from "@/components/auction/CreateAuctionHouse";
import { useMiniKit } from "@coinbase/onchainkit/minikit";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Auctions", href: "/auctions" },
  { label: "Create Auction House" },
];

export default function CreateAuctionHouseClient() {
  const { setFrameReady, isFrameReady } = useMiniKit();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  return (
    <SimpleLayout title="Create Auction House">
      <div className="container mx-auto px-2 sm:px-4">
        <ResponsiveBreadcrumb items={breadcrumbItems} />
        <CreateAuctionHouse />
      </div>
    </SimpleLayout>
  );
}
