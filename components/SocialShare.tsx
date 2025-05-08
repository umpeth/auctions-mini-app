import React from "react";
import {
  ShareIcon,
  EllipsisHorizontalIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { Share } from "lucide-react";
import { toast } from "sonner";
import { transformIPFSUrl } from "@/lib/misc";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Props for the SocialShare component
 * @interface SocialShareProps
 * @property {string} [text] - The text to share. This will be included in social media posts.
 * @property {string} [url] - The URL to share. Defaults to the current page URL.
 * @property {string} [image] - An image URL to include with the share (only works with Warpcast).
 * @property {'default' | 'gradient'} [variant] - The visual style of the share button.
 * @property {'icon' | 'default'} [size] - The size of the share button. 'icon' shows just the icon, 'default' includes text.
 * @property {boolean} [highlight] - When true, adds a glowing animation to draw attention to the button.
 * @property {(text: string, url?: string, image?: string) => Promise<boolean>} [onWarpcastShare] - Callback for handling Warpcast sharing in Frame contexts. Called when user clicks the Warpcast share option. Should return true if sharing was successful, false otherwise.
 */
interface SocialShareProps {
  text?: string;
  url?: string;
  image?: string;
  variant?: "default" | "gradient";
  size?: "icon" | "default";
  highlight?: boolean;
  onWarpcastShare?: (
    text: string,
    url?: string,
    image?: string,
  ) => Promise<boolean>;
}

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  </svg>
);

const WarpcastIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    width="24"
    height="24"
    viewBox="0 0 1260 1260"
    {...props}
  >
    <g>
      <path
        d="M947.747 1259.61H311.861C139.901 1259.61 0 1119.72 0 947.752V311.871C0 139.907 139.901 0.00541362 311.861 0.00541362H947.747C1119.71 0.00541362 1259.61 139.907 1259.61 311.871V947.752C1259.61 1119.72 1119.71 1259.61 947.747 1259.61Z"
        fill="currentColor"
      />
      <path
        d="M826.513 398.633L764.404 631.889L702.093 398.633H558.697L495.789 633.607L433.087 398.633H269.764L421.528 914.36H562.431L629.807 674.876L697.181 914.36H838.388L989.819 398.633H826.513Z"
        fill="white"
      />
    </g>
  </svg>
);

/**
 * A social sharing component that lets users share content on X, Warpcast, or their device's native share menu.
 *
 * Features:
 * - Share to X with custom text and URL
 * - Share to Warpcast with text, URL, and optional image
 * - Uses native share if available on the device
 * - Two visual styles: default and gradient
 * - Two size options: icon-only or icon with text
 *
 * @example
 * // Basic usage
 * <SocialShare text="Check out this cool NFT!" />
 *
 * // With custom URL and image
 * <SocialShare
 *   text="Amazing artwork!"
 *   url="https://example.com/nft/123"
 *   image="https://example.com/nft-image.jpg"
 *   variant="gradient"
 *   size="default"
 * />
 */
const SocialShare = ({
  text = "",
  url = typeof window !== "undefined" ? window.location.href : "",
  image = "",
  variant = "default",
  size = "default",
  highlight = false,
  onWarpcastShare,
}: SocialShareProps) => {
  const canNativeShare =
    typeof navigator !== "undefined" && "share" in navigator;

  const handleNativeShare = async () => {
    const shareData = {
      title: text,
      text: text,
      url: url,
    };

    try {
      if (canNativeShare) {
        await navigator.share(shareData);
      } else {
        throw new Error("Native sharing not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleTwitterShare = () => {
    const twitterUrl = new URL("https://x.com/intent/tweet");
    let textToShare = text;
    if (url) {
      textToShare += `\n\nCheck it out:`;
    }

    twitterUrl.searchParams.append("text", textToShare);
    twitterUrl.searchParams.append("via", "ump_eth");
    if (url) {
      twitterUrl.searchParams.append("url", url);
    }
    window.open(twitterUrl.toString(), "_blank");
  };

  const handleWarpcastShare = async () => {
    if (onWarpcastShare) {
      try {
        const success = await onWarpcastShare(text, url, image);
        if (success) {
          return;
        }
      } catch (err) {
        console.error("Failed to share via Warpcast:", err);
      }
    }
    handleWarpcastUrlShare();
  };

  const handleWarpcastUrlShare = () => {
    const warpcastUrl = new URL("https://warpcast.com/~/compose");
    let textToShare = text + " via @ump";
    if (url) {
      textToShare += `\n\nCheck it out: ${url}`;
    }
    warpcastUrl.searchParams.append("text", textToShare);
    if (image) {
      warpcastUrl.searchParams.append("embeds[]", transformIPFSUrl(image));
    }
    window.open(warpcastUrl.toString(), "_blank");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    } catch (error) {
      console.error("Failed to copy link:", error);
      toast.error("Failed to copy link");
    }
  };

  const buttonStyles = {
    default: {
      base: "inline-flex items-center gap-2 rounded-lg bg-black/10 px-4 py-2 text-black transition-colors hover:bg-black/20 w-auto",
      icon: "inline-flex items-center rounded-lg bg-black/10 p-2 text-black transition-colors hover:bg-black/20",
    },
    gradient: {
      base: "group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] transition-all hover:shadow-lg w-auto",
      icon: "group relative inline-flex items-center overflow-hidden rounded-lg bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] transition-all hover:shadow-lg",
    },
  };

  const innerSpanStyles = {
    default: {
      base: "",
      icon: "",
    },
    gradient: {
      base: "relative inline-flex h-full w-full items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-all group-hover:bg-white/90",
      icon: "relative inline-flex h-full w-full items-center rounded-lg bg-white p-2 text-sm font-medium text-gray-900 transition-all group-hover:bg-white/90",
    },
  };

  const glowStyles = {
    default:
      "animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.65)]",
    gradient:
      "animate-pulse shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.65)] before:absolute before:inset-[-2px] before:rounded-lg before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:opacity-0 before:transition-opacity hover:before:opacity-100 before:-z-10",
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            buttonStyles[variant][size === "icon" ? "icon" : "base"],
            highlight && glowStyles[variant],
          )}
        >
          {variant === "gradient" ? (
            <span
              className={
                innerSpanStyles[variant][size === "icon" ? "icon" : "base"]
              }
            >
              <ShareIcon className="size-4" />
              {size === "default" && (
                <>
                  Share
                  <EllipsisHorizontalIcon className="size-4 text-gray-500" />
                </>
              )}
            </span>
          ) : (
            <>
              <ShareIcon className="size-4" />
              {size === "default" && (
                <>
                  Share
                  <EllipsisHorizontalIcon className="size-4" />
                </>
              )}
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          className="min-w-[200px] rounded-lg border border-gray-100 bg-white p-1 shadow-lg"
        >
          <DropdownMenuItem
            onClick={handleTwitterShare}
            className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <TwitterIcon className="size-4" />
            Share on X
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleWarpcastShare}
            className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <WarpcastIcon className="size-4" />
            Share on Warpcast
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleCopyLink}
            className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LinkIcon className="size-4" />
            Copy Link
          </DropdownMenuItem>
          {canNativeShare && (
            <DropdownMenuItem
              onClick={handleNativeShare}
              className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Share className="size-4" />
              Share on ...
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default SocialShare;
