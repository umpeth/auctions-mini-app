import { ImageResponse } from "next/og";
import { DEFAULT_OG_SIZE } from "@/components/og/BaseOGImage";

export const size = DEFAULT_OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const imageUrl = `${process.env.NEXT_PUBLIC_URL}/auctioneers.png`;

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full">
        {/* Background Image */}
        <div tw="absolute inset-0 flex">
          <img
            src={imageUrl}
            alt="UMP.eth Auctions"
            width={DEFAULT_OG_SIZE.width}
            height={DEFAULT_OG_SIZE.height}
            tw="w-full h-full object-cover"
          />
        </div>
      </div>
    ),
    {
      ...DEFAULT_OG_SIZE,
      headers: {
        "Cache-Control": "public, immutable, no-transform, max-age=3600",
      },
    },
  );
}
