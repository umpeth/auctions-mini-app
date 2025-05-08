import { AuctionGrid } from "@/components/auction/AuctionGrid";
import { GetActiveAuctionsDocument } from "@/graphql/queryDocuments";
import { AuctionStatus } from "@/graphql/generated";

const API_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

export default async function ActiveAuctionsPage() {
  const response = await fetch(`${API_URL}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      document: GetActiveAuctionsDocument,
      variables: {
        status: AuctionStatus.Active,
        currentTimeEpoch: Number(Math.floor(Date.now() / 1000)),
      },
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch auctions");
  }

  const data = await response.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Active Auctions</h1>
      {data.auctions.length === 0 ? (
        <p className="text-gray-500 text-center">No active auctions found</p>
      ) : (
        <AuctionGrid auctions={data.auctions} />
      )}
    </div>
  );
}
