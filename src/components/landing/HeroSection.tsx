import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--app-foreground)] sm:text-6xl">
            Next-Gen NFT Auction House
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--app-foreground-muted)]">
            A comprehensive solution for creating and managing on-chain NFT
            auctions with premium bidding features, anti-sniping protections,
            and secure escrow-based settlement.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/auctions/active">
              <Button size="lg">
                <ArrowRightIcon />
                Check Out Auctions
              </Button>
            </Link>
            <Link href="/auctions/new">
              <Button variant="outline" size="lg">
                Create Auction
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
