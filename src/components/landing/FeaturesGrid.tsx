import { Wallet2, Layers, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

type IconType = typeof Wallet2 | typeof Layers | typeof Scale;

interface Feature {
  name: string;
  description: string;
  Icon: IconType;
}

const features: Feature[] = [
  {
    name: "Fair and Transparent",
    description:
      "Auctions run securely via blockchain smart contracts—no hidden fees or surprises",
    Icon: Scale,
  },
  {
    name: "Secure and Private",
    description:
      "Transactions and user information are protected using end-to-end encryption and decentralized escrow",
    Icon: Wallet2,
  },
  {
    name: "Simple and Accessible",
    description:
      "No sign-ups required; participate seamlessly using your Coinbase or Warpcast wallet",
    Icon: Layers,
  },
];

export function FeaturesGrid() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--app-foreground)] sm:text-4xl">
            Why Participate in {process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME}
            ?
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
