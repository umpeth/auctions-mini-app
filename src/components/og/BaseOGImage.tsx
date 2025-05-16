import { ImageResponse } from "next/og";

/**
 * The default size for Open Graph (OG) images.
 * These images appear when you share links on social media.
 */
export const DEFAULT_OG_SIZE = {
  width: 1200,
  height: 630,
} as const;

export const DEFAULT_OG_SIZE_WARPCAST = {
  width: 768,
  height: 512,
} as const;
/**
 * Props for the BaseOGImage component
 * @property {string} title - The main heading text to display in the image
 * @property {string} [description] - Optional text that appears below the title
 * @property {React.ReactNode} [children] - Optional content to display in the center of the image
 */
interface BaseOGImageProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

/**
 * Creates a beautiful Open Graph image for social media sharing.
 *
 * This component generates an image with:
 * - A white to light gray gradient background
 * - A large title at the top
 * - An optional description below the title
 * - Optional custom content in the center
 *
 * The image is cached for 1 hour to improve loading speed.
 *
 * @example
 * ```tsx
 * // Basic usage with just a title
 * <BaseOGImage title="Welcome to My Site" />
 *
 * // With description
 * <BaseOGImage
 *   title="Welcome to My Site"
 *   description="Learn more about our amazing features"
 * />
 *
 * // With custom content
 * <BaseOGImage title="Welcome">
 *   <img src="logo.png" alt="Logo" />
 * </BaseOGImage>
 * ```
 */
export async function BaseOGImage({
  title,
  description,
  children,
}: BaseOGImageProps) {
  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-col justify-between relative bg-white p-16"
        style={{
          backgroundImage: "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
        }}
      >
        {/* Header Section */}
        <div tw="flex flex-col items-center justify-center mb-8">
          <h1 tw="text-6xl font-bold text-gray-900 mb-4">{title}</h1>
          {description && (
            <p tw="text-2xl text-gray-600 text-center max-w-3xl">
              {description}
            </p>
          )}
        </div>

        {/* Content Section */}
        {children && (
          <div tw="flex justify-center items-center">{children}</div>
        )}
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
