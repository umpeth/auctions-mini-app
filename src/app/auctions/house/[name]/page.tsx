"use client";

import React from "react";
import SimpleLayout from "@/components/SimpleLayout";
import { ResponsiveBreadcrumb } from "@/components/ui/responsive-breadcrumb";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { truncateAddress } from "@/lib/misc";

export default function AuctionHousePage() {
  const { name } = useParams();
  const decodedAddress = decodeURIComponent(name as string);

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

          {/* Auction House Details */}
          {/* TODO: add real detail components */}
          {/* <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Active Auctions</h2>
            <div className="text-muted-foreground">
              No active auctions found.
            </div>
          </div>

          <div className="mt-8 bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Past Auctions</h2>
            <div className="text-muted-foreground">No past auctions found.</div>
          </div> */}
        </div>
      </div>
    </SimpleLayout>
  );
}
