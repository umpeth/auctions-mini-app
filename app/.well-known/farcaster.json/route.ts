import { frameMetadata, appUrl } from "../../../lib/consts";

export async function GET() {
  return Response.json({
    accountAssociation: {
      header: process.env.FARCASTER_HEADER,
      payload: process.env.FARCASTER_PAYLOAD,
      signature: process.env.FARCASTER_SIGNATURE,
    },
    frame: {
      version: frameMetadata.version,
      name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
      subtitle: "Bid and Earn",
      description: "Bid and Earn with our Premium Auctions. Onchain with Base.",
      screenshotUrls: [],
      primaryCategory: "Shopping",
      tags: ["auction", "bid", "earn", "win", "cashback"],
      heroImageUrl: frameMetadata.imageUrl,
      tagline: "Every bid is a win",
      ogTitle: `${process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME} - Bid and Earn`,
      ogDescription: "Bid and Earn, every bid is a win",
      ogImageUrl: frameMetadata.imageUrl,
      iconUrl: frameMetadata.iconUrl,
      splashImageUrl: frameMetadata.splashImageUrl,
      splashBackgroundColor: frameMetadata.splashBackgroundColor,
      webhookUrl: `${appUrl}/api/webhook`,
      homeUrl: appUrl,
    },
  });
}
