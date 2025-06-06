import {
  ArrowRight,
  CheckCircle,
  Wallet,
  Scale,
  HandCoins,
} from "lucide-react";
import { cn } from "@/lib/utils";

type IconType =
  | typeof ArrowRight
  | typeof CheckCircle
  | typeof Wallet
  | typeof Scale
  | typeof HandCoins;

interface Step {
  name: string;
  description: string;
  Icon: IconType;
}

const steps: Step[] = [
  {
    name: "Place your bid",
    description:
      "Engage early by bidding on exciting items listed directly by sellers",
    Icon: ArrowRight,
  },
  {
    name: "Get Paid to bid",
    description: "If you get outbid, you receive your bid back, plus a reward!",
    Icon: HandCoins,
  },
  {
    name: "Get your stuff",
    description:
      "Your purchase is secured by our escrow smart contracts until you confirm receipt",
    Icon: CheckCircle,
  },
  {
    name: "Dispute or Settlement",
    description:
      "Need help? A neutral arbiter is available to resolve disputes",
    Icon: Scale,
  },
];

export function HowItWorks() {
  return (
    <div className="py-12 sm:py-16 bg-[var(--app-gray)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--app-foreground)] sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-[var(--app-foreground-muted)]">
            Simple and secure auction process from start to finish
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.name} className="relative">
                {index !== steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-[var(--app-card-border)] md:block" />
                )}
                <div className="relative flex flex-col items-center">
                  <div
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--app-accent)]",
                      "ring-8 ring-[var(--app-gray)]",
                    )}
                  >
                    <step.Icon className="h-6 w-6 text-[var(--app-background)]" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-[var(--app-foreground)]">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-center text-sm text-[var(--app-foreground-muted)]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
