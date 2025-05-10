"use client";

import React from "react";
import { CreateAuction } from "@/components/auction/CreateAuction";
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
        <CreateAuction />
      </div>
    </SimpleLayout>
  );
}
