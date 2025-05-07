import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

interface PlaceBidProps {
  setCurrentScreen: (screen: string) => void;
}

export function PlaceBid({ setCurrentScreen }: PlaceBidProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Place Bid</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-1">
              <div className="bg-gray-100 p-2 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-5xl mb-2">🖼️</div>
                  <div>Item Image</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold">Rare Collectible #42</h3>
              <div className="text-gray-700 mt-1 text-sm">
                Description of the item being auctioned...
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-600 text-sm">Current Bid</div>
                  <div className="text-xl font-bold">0.75 ETH</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">Minimum Next Bid</div>
                  <div className="text-lg font-bold text-green-600">
                    0.75375 ETH
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-6">
            <div className="font-bold mb-4">Your Bid</div>
            <div className="space-y-6">
              <div>
                <Label>Bid Amount (ETH)</Label>
                <Input type="number" placeholder="0.75375" step="0.000001" />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">
                    Min: 0.75375 ETH
                  </span>
                  <span className="text-xs text-blue-600 cursor-pointer">
                    Bid minimum amount
                  </span>
                </div>
              </div>
              <div>
                <Label>Encrypted Message (Optional)</Label>
                <Textarea placeholder="Enter a private message to the seller..." />
                <div className="text-xs text-gray-500">
                  This message will be encrypted and only visible to the seller
                </div>
              </div>
              <div>
                <div className="font-medium mb-2">
                  Optional: Include Affiliate Address
                </div>
                <Input type="text" placeholder="0x..." />
                <div className="text-xs text-gray-500 mt-1">
                  If you were referred by an affiliate, enter their address
                </div>
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex items-start mb-4">
                  <Input type="checkbox" id="confirm" className="mt-1 mr-2" />
                  <Label htmlFor="confirm" className="text-sm">
                    I confirm that I want to place this bid. If I am outbid, I
                    will receive a premium payment of 0.5% of the increment
                    above my bid.
                  </Label>
                </div>
                <Button variant="success">Place Bid</Button>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded border border-blue-200">
            <div className="font-bold text-blue-800 mb-2">
              About Premium Auctions
            </div>
            <div className="text-sm text-blue-700">
              <p>
                This is a premium auction. If your bid is outbid by another
                user, you will receive a premium payment equal to 100% of the
                minimum bid increment (0.5%).
              </p>
              <p className="mt-2">
                Example: If you bid 0.75 ETH and someone outbids you with 0.76
                ETH, you will receive 0.00125 ETH as a premium payment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
