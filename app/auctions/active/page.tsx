import { AuctionGrid } from "@/components/auction/AuctionGrid";
import { GetActiveAuctionsDocument } from "@/graphql/queryDocuments";
import { AuctionStatus } from "@/graphql/generated";
import SimpleLayout from "@/components/SimpleLayout";

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
        currentTimeEpoch: Number(
          Math.floor(Date.now() / 1000) - 24 * 60 * 60 * 10,
        ),
      },
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch auctions");
  }

  const data = await response.json();

  return (
    <SimpleLayout title="Active Auctions">
      <div className="px-4">
        {data.auctions.length === 0 ? (
          <p className="text-gray-500 text-center">No active auctions found</p>
        ) : (
          <AuctionGrid auctions={data.auctions} />
        )}
      </div>
    </SimpleLayout>
  );
}
