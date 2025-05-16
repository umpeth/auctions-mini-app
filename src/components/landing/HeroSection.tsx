import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden py-8 sm:py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight px-4">
              <span className="block mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[var(--app-foreground)] to-[var(--app-foreground-muted)] ">
                {process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME}
              </span>
              <span className="block text-[0.85em] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-400 dark:to-blue-400">
                Earn Rewards Just for Bidding!
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold tracking-tight text-[var(--app-foreground-muted)]">
              Experience Auctions Like Never Before
            </h2>
          </div>

          <p className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-[var(--app-foreground-muted)] max-w-xl mx-auto px-4">
            {process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME} introduces a
            revolutionary new way to buy and sell goods. Unlike traditional
            auction platforms, our Premium Auctions reward you for
            participating, even if you don&apos;t win!
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-x-6 px-6 sm:px-0">
            <Link href="/auctions/active" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full text-base sm:text-lg font-medium bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-0"
              >
                <ArrowRightIcon className="h-5 w-5 mr-2" />
                Check Out Auctions
              </Button>
            </Link>
            <Link href="/auctions/new" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full text-base sm:text-lg font-medium border-2 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10"
              >
                Create Auction
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
