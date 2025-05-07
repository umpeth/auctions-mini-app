import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface CreateAuctionHouseProps {
  setCurrentScreen: (screen: string) => void;
}

export function CreateAuctionHouse({
  setCurrentScreen,
}: CreateAuctionHouseProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create Auction House</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-b pb-4 mb-4">
            <div className="font-bold mb-2">Step 1: Connect Wallet</div>
            <Button variant="default">Connect Wallet</Button>
          </div>
          <div className="mb-6">
            <div className="font-bold mb-4">
              Step 2: Configure Auction House
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Auction House Name</Label>
                  <Input type="text" placeholder="My Auction House" />
                </div>
                <div>
                  <Label>Description</Label>
                  <Input
                    type="text"
                    placeholder="Description of your auction house"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>ERC721 Token Name</Label>
                  <Input type="text" placeholder="Auction Items" />
                </div>
                <div>
                  <Label>ERC721 Token Symbol</Label>
                  <Input type="text" placeholder="AUCT" />
                </div>
              </div>
              <div>
                <Label>Settlement Deadline (days)</Label>
                <Input type="number" placeholder="21" />
                <div className="text-xs text-muted-foreground mt-1">
                  Time allowed for dispute resolution after auction ends
                </div>
              </div>
              <div className="pt-4">
                <Button type="submit" variant="success">
                  Create Auction House
                </Button>
              </div>
            </form>
          </div>
          <div className="bg-muted p-4 rounded border">
            <div className="font-bold mb-2">Result:</div>
            <div className="flex items-center text-green-600">
              <span className="material-icons mr-2">check_circle</span>
              Auction House Created Successfully!
            </div>
            <div className="mt-2 text-sm">
              <div>
                <span className="font-medium">Transaction Hash:</span>{" "}
                0x6a5b0177...
              </div>
              <div>
                <span className="font-medium">Auction House Address:</span>{" "}
                0xa753377e...
              </div>
              <div>
                <span className="font-medium">ERC721 Token Address:</span>{" "}
                0xa72f04a5...
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
