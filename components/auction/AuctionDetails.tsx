import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";

interface AuctionDetailsProps {
  setCurrentScreen: (screen: string) => void;
}

export function AuctionDetails({ setCurrentScreen }: AuctionDetailsProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Auction Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="bg-gray-100 p-2 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-2">🖼️</div>
                  <div>Item Image</div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">NFT Contract:</span>
                  <span className="text-sm font-mono">0xa72f04a5...</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Token ID:</span>
                  <span>42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Owner:</span>
                  <span className="text-sm font-mono">0xa753377e...</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold">Rare Collectible #42</h3>
              <div className="text-gray-700 mt-2">
                Description of the item being auctioned. This is a unique
                collectible with special attributes and characteristics that
                make it valuable.
              </div>
              <div className="mt-6 border-t pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-600 text-sm">Current Bid</div>
                    <div className="text-2xl font-bold">0.75 ETH</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">
                      Minimum Next Bid
                    </div>
                    <div className="text-xl font-bold text-green-600">
                      0.75375 ETH
                    </div>
                    <div className="text-xs text-gray-500">
                      (+0.5% increment)
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Auction Status</div>
                    <div className="text-green-600 font-medium">Active</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Time Remaining</div>
                    <div className="font-medium">23h 14m 32s</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Current Winner</div>
                    <div className="text-sm font-mono">0x988B8c3A...</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Reserve Price</div>
                    <div>0.5 ETH</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Bid Count</div>
                    <div>3 bids</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Premium Type</div>
                    <div>100% of increment</div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline">View Bid History</Button>
                  <Button
                    variant="success"
                    onClick={() => setCurrentScreen("placeBid")}
                  >
                    Place Bid
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t">
            <h4 className="font-bold mb-3">Bid History</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bidder
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Premium Paid
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm">2h ago</td>
                    <td className="px-4 py-2 text-sm font-mono">
                      0x988B8c3A...
                    </td>
                    <td className="px-4 py-2 text-sm">0.75 ETH</td>
                    <td className="px-4 py-2 text-sm">
                      0.00125 ETH to 0x31d96034...
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">4h ago</td>
                    <td className="px-4 py-2 text-sm font-mono">
                      0x31d96034...
                    </td>
                    <td className="px-4 py-2 text-sm">0.65 ETH</td>
                    <td className="px-4 py-2 text-sm">
                      0.00075 ETH to 0x45a72b8c...
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">5h ago</td>
                    <td className="px-4 py-2 text-sm font-mono">
                      0x45a72b8c...
                    </td>
                    <td className="px-4 py-2 text-sm">0.55 ETH</td>
                    <td className="px-4 py-2 text-sm">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
