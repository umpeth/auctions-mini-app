import { Star, Shield, Wallet2, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

type IconType = typeof Star | typeof Shield | typeof Wallet2 | typeof Layers;

interface Feature {
  name: string;
  description: string;
  Icon: IconType;
}

const features: Feature[] = [
  {
    name: "Premium Bidding",
    description:
      "Get compensated when outbid with a percentage of the bid increment",
    Icon: Star,
  },
  {
    name: "Anti-Sniping",
    description:
      "Automatic time extensions when bids are placed near auction end",
    Icon: Shield,
  },
  {
    name: "Secure Escrow",
    description: "All payments are held in escrow until transaction completes",
    Icon: Wallet2,
  },
  {
    name: "Multiple Houses",
    description: "Create distinct auction houses for different collections",
    Icon: Layers,
  },
];

export function FeaturesGrid() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--app-foreground)] sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 text-lg text-[var(--app-foreground-muted)]">
            Everything you need to run successful NFT auctions
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root rounded-lg bg-[var(--app-card-bg)] px-6 pb-8">
                <div className="-mt-6">
                  <div
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--app-accent)]",
                      "ring-8 ring-[var(--app-card-bg)]",
                    )}
                  >
                    <feature.Icon className="h-6 w-6 text-[var(--app-background)]" />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-[var(--app-foreground)]">
                    {feature.name}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-[var(--app-foreground-muted)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
