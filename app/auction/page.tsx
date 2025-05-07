"use client";

import React, { useState } from "react";
import { CreateAuctionHouse } from "@/components/auction/CreateAuctionHouse";
import { CreateAuction } from "@/components/auction/CreateAuction";
import { AuctionDetails } from "@/components/auction/AuctionDetails";
import { PlaceBid } from "@/components/auction/PlaceBid";
import { EndAuction } from "@/components/auction/EndAuction";
// import { AuctionDetails } from "@/components/auction/AuctionDetails";
// import { PlaceBid } from "@/components/auction/PlaceBid";
// import { EndAuction } from "@/components/auction/EndAuction";

export default function AuctionSystemPage() {
  const [currentScreen, setCurrentScreen] = useState("createAuctionHouse");

  const renderScreen = () => {
    switch (currentScreen) {
      case "createAuctionHouse":
        return <CreateAuctionHouse setCurrentScreen={setCurrentScreen} />;
      case "createAuction":
        return <CreateAuction setCurrentScreen={setCurrentScreen} />;
      case "auctionDetails":
        return <AuctionDetails setCurrentScreen={setCurrentScreen} />;
      case "placeBid":
        return <PlaceBid setCurrentScreen={setCurrentScreen} />;
      case "endAuction":
        return <EndAuction setCurrentScreen={setCurrentScreen} />;
      // case "auctionDetails":
      //   return <AuctionDetails setCurrentScreen={setCurrentScreen} />;
      // case "placeBid":
      //   return <PlaceBid setCurrentScreen={setCurrentScreen} />;
      // case "endAuction":
      //   return <EndAuction setCurrentScreen={setCurrentScreen} />;
      default:
        return <CreateAuctionHouse setCurrentScreen={setCurrentScreen} />;
    }
  };

  return (
    <div className="flex flex-col h-full min-h-screen">
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Auction System</h1>
        <div className="flex justify-center mt-2 space-x-4">
          <button
            onClick={() => setCurrentScreen("createAuctionHouse")}
            className={`px-3 py-1 rounded ${currentScreen === "createAuctionHouse" ? "bg-blue-600" : "bg-gray-600"}`}
          >
            Create Auction House
          </button>
          <button
            onClick={() => setCurrentScreen("createAuction")}
            className={`px-3 py-1 rounded ${currentScreen === "createAuction" ? "bg-blue-600" : "bg-gray-600"}`}
          >
            Create Auction
          </button>
          <button
            onClick={() => setCurrentScreen("auctionDetails")}
            className={`px-3 py-1 rounded ${currentScreen === "auctionDetails" ? "bg-blue-600" : "bg-gray-600"}`}
          >
            Auction Details
          </button>
          <button
            onClick={() => setCurrentScreen("placeBid")}
            className={`px-3 py-1 rounded ${currentScreen === "placeBid" ? "bg-blue-600" : "bg-gray-600"}`}
          >
            Place Bid
          </button>
          <button
            onClick={() => setCurrentScreen("endAuction")}
            className={`px-3 py-1 rounded ${currentScreen === "endAuction" ? "bg-blue-600" : "bg-gray-600"}`}
          >
            End Auction
          </button>
          {/* <button
            onClick={() => setCurrentScreen("auctionDetails")}
            className={`px-3 py-1 rounded ${currentScreen === "auctionDetails" ? "bg-blue-600" : "bg-gray-600"}`}
          >
            Auction Details
          </button>
          <button
            onClick={() => setCurrentScreen("placeBid")}
            className={`px-3 py-1 rounded ${currentScreen === "placeBid" ? "bg-blue-600" : "bg-gray-600"}`}
          >
            Place Bid
          </button>
          <button
            onClick={() => setCurrentScreen("endAuction")}
            className={`px-3 py-1 rounded ${currentScreen === "endAuction" ? "bg-blue-600" : "bg-gray-600"}`}
          >
            End Auction
          </button> */}
        </div>
      </header>
      <main className="flex-grow p-4 bg-gray-100">{renderScreen()}</main>
    </div>
  );
}
