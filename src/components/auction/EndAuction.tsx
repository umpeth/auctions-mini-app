import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";

export function EndAuction() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>End Auction</CardTitle>
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
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-600 text-sm">Auction Status</div>
                  <div className="text-red-600 font-medium">Ended</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">End Time</div>
                  <div>May 7, 2025 14:30</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">Winning Bid</div>
                  <div className="text-xl font-bold">0.75 ETH</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">Winner</div>
                  <div className="text-sm font-mono">0x988B8c3A...</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">Escrow Status</div>
                  <div className="text-green-600">Active</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">
                    Settlement Deadline
                  </div>
                  <div>May 28, 2025</div>
                </div>
              </div>
              <div className="mt-6 border-t pt-4 space-y-4">
                <div className="bg-gray-50 p-4 rounded border">
                  <div className="font-bold mb-2">NFT Transfer Status</div>
                  <div className="flex items-center text-green-600">
                    <span className="material-icons mr-2">check_circle</span>
                    NFT transferred to winner
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded border">
                  <div className="font-bold mb-2">Payment Status</div>
                  <div className="flex items-center text-yellow-600">
                    <span className="material-icons mr-2">hourglass_empty</span>
                    Funds in escrow pending settlement period
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded border">
                  <div className="font-bold mb-2">Actions</div>
                  <div className="flex space-x-3">
                    <Button disabled className="bg-green-300">
                      Funds already in escrow
                    </Button>
                    <Button variant="outline">View Escrow Details</Button>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                  <div className="font-bold text-yellow-800 mb-2">
                    About Settlement Period
                  </div>
                  <div className="text-sm text-yellow-700">
                    <p>
                      The auction has ended and funds are in escrow. The
                      settlement period allows time for the buyer and seller to
                      resolve any issues with the transaction.
                    </p>
                    <p className="mt-2">
                      After the settlement deadline (May 28, 2025), the funds
                      will be automatically released to the seller if no
                      disputes are raised.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t">
            <h4 className="font-bold mb-3">Transaction History</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction Hash
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm">May 7, 2025 14:30</td>
                    <td className="px-4 py-2 text-sm">Auction Ended</td>
                    <td className="px-4 py-2 text-sm font-mono">
                      0xf712f047...
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">May 7, 2025 14:30</td>
                    <td className="px-4 py-2 text-sm">
                      NFT Transferred to Winner
                    </td>
                    <td className="px-4 py-2 text-sm font-mono">
                      0xf712f047...
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">May 7, 2025 14:30</td>
                    <td className="px-4 py-2 text-sm">Funds Sent to Escrow</td>
                    <td className="px-4 py-2 text-sm font-mono">
                      0xf712f047...
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">May 7, 2025 11:45</td>
                    <td className="px-4 py-2 text-sm">Final Bid Placed</td>
                    <td className="px-4 py-2 text-sm font-mono">
                      0x4054c087...
                    </td>
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
