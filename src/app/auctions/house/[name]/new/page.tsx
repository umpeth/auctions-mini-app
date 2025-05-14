"use client";

import React from "react";
import { CreateAuction } from "@/components/auction/CreateAuction";
import SimpleLayout from "@/components/SimpleLayout";
import { ResponsiveBreadcrumb } from "@/components/ui/responsive-breadcrumb";
import { useParams } from "next/navigation";

export default function CreateAuctionUnderHousePage() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name as string);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Auctions", href: "/auctions" },
    { label: decodedName, href: `/auctions/house/${name}` },
    { label: "Create New Auction" },
  ];

  return (
    <SimpleLayout title="Create New Auction">
      <div className="container mx-auto px-2 sm:px-4">
        <ResponsiveBreadcrumb items={breadcrumbItems} />
        <div className="max-w-2xl mx-auto">
          <CreateAuction auctionHouseAddress={decodedName} />
        </div>
      </div>
    </SimpleLayout>
  );
}
