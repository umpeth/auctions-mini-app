import { useCallback } from "react";
import sdk from "@farcaster/frame-sdk";
import { transformIPFSUrl } from "@/lib/misc";

import { useMiniKit } from "@coinbase/onchainkit/minikit";

export function useFrameActions() {
  const { isFrameReady, context } = useMiniKit();

  /**
   * Shares content to Warpcast through the Frame SDK
   * @param {string} text - The main text content to share in the cast
   * @param {string} [url] - Optional URL to attach to the cast
   * @param {string} [image] - Optional IPFS image URL to attach to the cast
   * @returns {Promise<boolean>} Returns true if the cast was shared successfully, false otherwise
   */
  const handleWarpcastShare = useCallback(
    async (text: string, url?: string, image?: string) => {
      if (!isFrameReady || !context) {
        return false;
      }

      try {
        const textToShare =
          text + " via @ump" + (url ? `\n\nCheck it out: ${url}` : "");
        const embeds: (string | undefined)[] = [];

        if (url) {
          embeds.push(url);
        }
        if (image) {
          embeds.push(transformIPFSUrl(image));
        }

        // Warpcast only supports up to 2 embeds
        const embedsToShare = embeds.slice(0, 2) as [string] | [string, string];

        await sdk.actions.composeCast({
          text: textToShare,
          embeds: embedsToShare,
          close: false,
        });

        return true;
      } catch (err) {
        console.error("Error composing cast:", err);
        return false;
      }
    },
    [isFrameReady, context],
  );

  /**
   * Opens the UMP (Universal Marketplace Protocol) profile in Farcaster.
   *
   * @returns {boolean} Returns false if SDK is not loaded or context is missing,
   * otherwise returns undefined after opening the profile
   */
  const showUMPProfile = useCallback(() => {
    if (!isFrameReady || !context) {
      return false;
    }
    sdk.actions.viewProfile({
      fid: 883020, // UMP FID
    });
  }, [isFrameReady, context]);

  return {
    handleWarpcastShare,
    showUMPProfile,
    isFrameEnabled: isFrameReady && !!context,
  };
}
