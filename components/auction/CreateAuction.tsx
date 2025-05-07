import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

interface CreateAuctionProps {
  setCurrentScreen: (screen: string) => void;
}

export function CreateAuction({ setCurrentScreen }: CreateAuctionProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create New Auction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-b pb-4 mb-4">
            <div className="font-bold mb-2">Step 1: Select Auction House</div>
            <select className="w-full p-2 border rounded">
              <option>My Auction House (0xa753377e...)</option>
              <option>Art Gallery Auctions (0x8842aef5...)</option>
            </select>
          </div>
          <div className="border-b pb-4 mb-4">
            <div className="font-bold mb-4">Step 2: NFT Details</div>
            <div className="space-y-4">
              <div>
                <Label>Item Name</Label>
                <Input type="text" placeholder="Rare Collectible #42" />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea placeholder="Description of the item being auctioned..." />
              </div>
              <div>
                <Label>Item Image</Label>
                <div className="border-2 border-dashed border-gray-300 p-8 text-center rounded">
                  <div className="text-gray-500">
                    Upload image or drop file here
                  </div>
                  <Button className="mt-2" variant="secondary">
                    Browse Files
                  </Button>
                </div>
              </div>
              <div>
                <Label>Terms of Service</Label>
                <Input type="text" placeholder="Item terms & conditions" />
              </div>
              <div>
                <Label>Supplemental Images (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded">
                  <div className="text-gray-500 text-sm">
                    Upload additional images (max 5)
                  </div>
                  <Button className="mt-2" variant="secondary">
                    Add Images
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="font-bold mb-4">Step 3: Auction Settings</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Reserve Price</Label>
                <div className="flex">
                  <Input
                    type="number"
                    placeholder="0.5"
                    className="rounded-l"
                  />
                  <select className="p-2 border-t border-r border-b rounded-r bg-gray-50 w-24">
                    <option>ETH</option>
                    <option>USDC</option>
                    <option>DAI</option>
                  </select>
                </div>
              </div>
              <div>
                <Label>Start Time</Label>
                <Input type="datetime-local" />
              </div>
              <div>
                <Label>Duration (hours)</Label>
                <Input type="number" placeholder="48" />
              </div>
              <div>
                <Label>Affiliate Fee (%)</Label>
                <Input type="number" placeholder="5" />
              </div>
              <div>
                <Label>Arbiter Address</Label>
                <Input type="text" placeholder="0x..." />
              </div>
              <div>
                <Label>Time Extension (minutes)</Label>
                <Input type="number" placeholder="5" />
                <div className="text-xs text-muted-foreground mt-1">
                  Extends auction if bid placed in final minutes
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id="premium"
                  className="mr-2"
                  defaultChecked
                />
                <Label htmlFor="premium">Enable Premium Auction</Label>
              </div>
              <div className="ml-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Min Bid Increment (%)</Label>
                  <Input type="number" placeholder="0.5" />
                  <div className="text-xs text-muted-foreground mt-1">
                    Minimum % increase for new bids
                  </div>
                </div>
                <div>
                  <Label>Premium Rate (%)</Label>
                  <Input type="number" placeholder="100" />
                  <div className="text-xs text-muted-foreground mt-1">
                    % of bid increment paid to outbid user
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-4">
              <Button variant="success">Create Auction</Button>
            </div>
          </div>
          <div className="bg-muted p-4 rounded border">
            <div className="font-bold mb-2">Result:</div>
            <div className="flex items-center text-green-600">
              <span className="material-icons mr-2">check_circle</span>
              Auction Created Successfully!
            </div>
            <div className="mt-2 text-sm">
              <div>
                <span className="font-medium">Transaction Hash:</span>{" "}
                0x105a0056...
              </div>
              <div>
                <span className="font-medium">Auction ID:</span> 3
              </div>
              <div>
                <span className="font-medium">Token ID:</span> 42
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
