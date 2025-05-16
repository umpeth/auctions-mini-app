import { AuctionPageClient } from "./AuctionPageClient";

interface PageProps {
  params: {
    id: string;
  };
}

export default function AuctionPage({ params }: PageProps) {
  return <AuctionPageClient auctionId={params.id} />;
}
