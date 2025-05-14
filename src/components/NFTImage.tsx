import React, { useState, useEffect, useCallback } from "react";
import {
  ExclamationTriangleIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { transformIPFSUrl } from "@/lib/misc";
import Image from "next/image";

interface NFTImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  disableModal?: boolean;
}

const NFTImage: React.FC<NFTImageProps> = ({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  disableModal = false,
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isImage, setIsImage] = useState(true);
  const [noImage, setNoImage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const fetchWithRetry = useCallback(
    async (url: string, attempt: number = 0): Promise<Response> => {
      const MAX_RETRIES = 5;

      try {
        const response = await fetch(url, { method: "HEAD" });

        if (response.status === 429) {
          if (attempt >= MAX_RETRIES) {
            throw new Error("Max retries reached");
          }
          const retryAfter = response.headers.get("retry-after");
          console.info(
            `Rate-limited by Pinata. Retry-After: ${retryAfter}, Attempt: ${attempt}`,
          );
          const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : 2500;

          await sleep(waitTime);
          return fetchWithRetry(url, attempt + 1);
        }
        return response;
      } catch (error) {
        if (attempt >= MAX_RETRIES) {
          throw error;
        }
        console.warn(
          `Attempt ${attempt + 1}/${MAX_RETRIES} failed for ${url}:`,
          error,
        );
        const waitTime = Math.min(3000 * Math.pow(2, attempt), 30000);
        console.info(`Waiting ${waitTime}ms before retrying ${url}`);
        await sleep(waitTime);
        return fetchWithRetry(url, attempt + 1);
      }
    },
    [],
  );

  const needsIframe = (contentType?: string) => {
    if (contentType?.includes("image/svg+xml")) {
      return true;
    }
    if (contentType?.includes("image/")) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    const getContentType = async (tokenMedia: string) => {
      const transformedUrl = transformIPFSUrl(tokenMedia);
      try {
        const response = await fetchWithRetry(transformedUrl);
        return response.headers.get("content-type");
      } catch (error) {
        console.error("[NFTImage] Error in getContentType:", error);
        setError(true);
      }
    };

    if (!src || src === "ipfs://") {
      setNoImage(true);
      setError(false);
      return;
    }

    getContentType(src)
      .then((contentType) => {
        if (needsIframe(contentType || "")) {
          setIsImage(false);
          setLoaded(true);
        } else {
          setIsImage(true);
          setLoaded(true);
        }
      })
      .catch((error) => {
        console.error("Error detecting content type:", error);
        setError(true);
      });
  }, [src, fetchWithRetry]);

  if (error) {
    return (
      <div className="relative h-full w-full object-cover object-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100/90">
          <ExclamationTriangleIcon className="size-16 text-yellow-400" />
          <p className="mt-2 text-sm font-medium text-gray-500">
            Could not load NFT
          </p>
          <a
            href={src} //TODO: maybe we should open BaseScan NFT viewer instead?
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-500 hover:underline"
          >
            Open in new tab
          </a>
        </div>
      </div>
    );
  }

  if (noImage) {
    return (
      <div className="relative h-full w-full object-cover object-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100/90">
          <PhotoIcon className="size-16 text-gray-400" />
          <p className="mt-2 text-sm font-medium text-gray-500">
            No Image Available
          </p>
        </div>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gray-100">
        <div
          data-testid="loading-spinner"
          className="size-12 animate-spin rounded-full border-b-2 border-gray-900"
        />
      </div>
    );
  }

  return (
    <>
      <div
        className={`relative h-full w-full object-cover object-center ${
          isImage && !disableModal ? "cursor-zoom-in" : "cursor-default"
        }`}
        onClick={() => isImage && !disableModal && setIsModalOpen(true)}
        title={isImage && !disableModal ? "Click to enlarge" : undefined}
      >
        {isImage ? (
          <Image
            src={transformIPFSUrl(src)}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            title="Click to enlarge"
            fill
            sizes={sizes}
            quality={75}
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E"
            onError={() => setError(true)}
            priority={priority}
          />
        ) : (
          <iframe
            src={transformIPFSUrl(src)}
            title={alt}
            loading="lazy"
            sandbox="allow-scripts"
            className="absolute top-0 left-0 h-full w-full"
            allowFullScreen
            referrerPolicy="no-referrer"
            onError={() => setError(true)}
          />
        )}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="mx-auto max-h-[90vh] w-full max-w-[90vw] sm:w-fit !p-0 !border-0 sm:max-w-[90vw] !grid-none !gap-0 rounded-none">
          <VisuallyHidden asChild>
            <DialogTitle>
              <DialogDescription>{alt}</DialogDescription>
            </DialogTitle>
          </VisuallyHidden>
          <Image
            src={transformIPFSUrl(src)}
            alt={alt}
            width={1200}
            height={800}
            style={{
              width: "auto",
              height: "auto",
              maxHeight: "90vh",
              maxWidth: "100%",
            }}
            quality={90}
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E"
            className="object-contain"
            onError={() => setError(true)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NFTImage;
