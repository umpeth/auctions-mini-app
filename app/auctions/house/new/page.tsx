"use client";

import React from "react";
import SimpleLayout from "@/components/SimpleLayout";
import { ResponsiveBreadcrumb } from "@/components/ui/responsive-breadcrumb";
import { CreateAuctionHouse } from "@/components/auction/CreateAuctionHouse";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Auctions", href: "/auctions" },
  { label: "Create Auction House" },
];

export default function CreateAuctionHousePage() {
  return (
    <SimpleLayout title="Create Auction House">
      <div className="container mx-auto px-2 sm:px-4">
        <ResponsiveBreadcrumb items={breadcrumbItems} />
        <CreateAuctionHouse />
      </div>
    </SimpleLayout>
  );
}
