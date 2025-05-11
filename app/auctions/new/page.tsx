"use client";

import React from "react";
import { AuctionHouseSelector } from "@/components/auction/AuctionHouseSelector";
import SimpleLayout from "@/components/SimpleLayout";
import { ResponsiveBreadcrumb } from "@/components/ui/responsive-breadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Auctions", href: "/auctions" },
  { label: "Create New Auction" },
];

export default function CreateAuctionPage() {
  return (
    <SimpleLayout title="Create New Auction">
      <div className="container py-8">
        <ResponsiveBreadcrumb items={breadcrumbItems} />
        <div className="max-w-2xl mx-auto">
          <AuctionHouseSelector />
        </div>
      </div>
    </SimpleLayout>
  );
}
