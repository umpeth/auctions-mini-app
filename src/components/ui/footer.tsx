"use client";

import { Navigation } from "@/components/navigation";
import { useMediaQuery } from "@/hooks/use-media-query";

export function Footer() {
  const isTabletOrLarger = useMediaQuery("(min-width: 768px)");
  const currentYear = new Date().getFullYear();

  if (!isTabletOrLarger) {
    return (
      <footer className="sticky bottom-0 left-0 right-0 mt-auto border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-2">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <nav className="flex items-center space-x-6">
              <Navigation />
            </nav>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="sticky mt-auto border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto py-2 flex justify-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} NFT Auction House
        </p>
      </div>
    </footer>
  );
}
