"use client";

import React, { useState } from "react";
import { CreateAuctionHouse } from "@/components/auction/CreateAuctionHouse";
import { CreateAuction } from "@/components/auction/CreateAuction";
import { AuctionDetails } from "@/components/auction/AuctionDetails";
import { PlaceBid } from "@/components/auction/PlaceBid";
import { EndAuction } from "@/components/auction/EndAuction";
import { Button } from "@/components/ui/button";
import SimpleLayout from "@/components/SimpleLayout";

interface SelectedAuction {
  auctionHouseAddress: `0x${string}`;
  auctionId: bigint;
  currentBid: string;
  minNextBid: string;
}

export default function AuctionSystemPage() {
  const [currentScreen, setCurrentScreen] = useState("createAuctionHouse");
  const [selectedAuction, setSelectedAuction] =
    useState<SelectedAuction | null>(null);

  const renderScreen = () => {
    switch (currentScreen) {
      case "createAuctionHouse":
        return <CreateAuctionHouse />;
      case "createAuction":
        return <CreateAuction setCurrentScreen={setCurrentScreen} />;
      case "auctionDetails":
        return (
          <AuctionDetails
            setCurrentScreen={setCurrentScreen}
            auctionHouseAddress="0xf95c7d922b28d1023deceedaa387ea50bdefbd0a"
            onPlaceBid={setSelectedAuction}
          />
        );
      case "placeBid":
        return selectedAuction ? (
          <PlaceBid
            // setCurrentScreen={setCurrentScreen}
            auctionHouseAddress={selectedAuction.auctionHouseAddress}
            auctionId={selectedAuction.auctionId}
            currentBid={selectedAuction.currentBid}
            minNextBid={selectedAuction.minNextBid}
          />
        ) : (
          <div className="text-center py-10 text-red-500">
            No auction selected. Please select an auction first.
          </div>
        );
      case "endAuction":
        return <EndAuction setCurrentScreen={setCurrentScreen} />;
      default:
        return <CreateAuctionHouse />;
    }
  };

  return (
    <SimpleLayout title="Auction System">
      <div className="flex flex-col h-full min-h-screen">
        <header className="bg-gray-800 text-white p-4 text-center">
          <div className="flex justify-center mt-2 space-x-4">
            <Button
              onClick={() => setCurrentScreen("createAuctionHouse")}
              className={`px-3 py-1 rounded ${currentScreen === "createAuctionHouse" ? "bg-blue-600" : "bg-gray-600"}`}
            >
              Create Auction House
            </Button>
            <Button
              onClick={() => setCurrentScreen("createAuction")}
              className={`px-3 py-1 rounded ${currentScreen === "createAuction" ? "bg-blue-600" : "bg-gray-600"}`}
            >
              Create Auction
            </Button>
            <Button
              onClick={() => setCurrentScreen("auctionDetails")}
              className={`px-3 py-1 rounded ${currentScreen === "auctionDetails" ? "bg-blue-600" : "bg-gray-600"}`}
            >
              Auction Details
            </Button>
            <Button
              onClick={() => setCurrentScreen("placeBid")}
              className={`px-3 py-1 rounded ${currentScreen === "placeBid" ? "bg-blue-600" : "bg-gray-600"}`}
            >
              Place Bid
            </Button>
            <Button
              onClick={() => setCurrentScreen("endAuction")}
              className={`px-3 py-1 rounded ${currentScreen === "endAuction" ? "bg-blue-600" : "bg-gray-600"}`}
            >
              End Auction
            </Button>
          </div>
        </header>
        <main className="flex-grow p-4 bg-gray-100">{renderScreen()}</main>
      </div>
    </SimpleLayout>
  );
}
