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
      // subtitle: "",
      // description: "",
      // screenshotUrls: [],
      // primaryCategory: "",
      // tags:[],
      heroImageUrl: frameMetadata.imageUrl,
      // tagline: "",
      // ogTitle: "",
      // ogDescription: "",
      ogImageUrl: frameMetadata.imageUrl,
      iconUrl: frameMetadata.iconUrl,
      splashImageUrl: frameMetadata.splashImageUrl,
      splashBackgroundColor: frameMetadata.splashBackgroundColor,
      webhookUrl: `${appUrl}/api/webhook`,
      homeUrl: appUrl,
    },
  });
}
