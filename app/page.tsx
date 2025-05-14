import { Metadata } from "next";
import { frameMetadata } from "@/lib/consts";
import App from "./app";

export async function generateMetadata(): Promise<Metadata> {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const frame = {
    version: "next",
    // imageUrl: `${appUrl}/opengraph-image`, //TODO: Add opengraph image
    button: {
      title: frameMetadata.tagline,
      action: {
        type: "launch_frame",
        name: frameMetadata.appName,
        url: appUrl,
        splashImageUrl: `${appUrl}/splash.png`,
        splashBackgroundColor: frameMetadata.splashBackgroundColor,
      },
    },
  };

  return {
    title: frameMetadata.appName,
    openGraph: {
      title: frameMetadata.appName,
      description: frameMetadata.tagline,
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return <App />;
}
