"use client";

import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
} from "@coinbase/onchainkit/minikit";
import { useEffect, useMemo, useState, useCallback } from "react";
import { Button } from "../components/DemoComponents";
import { Icon } from "../components/DemoComponents";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import SimpleLayout from "@/components/SimpleLayout";
import { AuctionCarousel } from "@/components/auction/AuctionCarousel";

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);

  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  const handleAddFrame = useCallback(async () => {
    const frameAdded = await addFrame();
    setFrameAdded(Boolean(frameAdded));
  }, [addFrame]);

  const saveFrameButton = useMemo(() => {
    if (context && !context.client.added) {
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleAddFrame}
          className="text-[var(--app-accent)] p-4"
          icon={<Icon name="plus" size="sm" />}
        >
          Save Frame
        </Button>
      );
    }

    if (frameAdded) {
      return (
        <div className="flex items-center space-x-1 text-sm font-medium text-[#0052FF] animate-fade-out">
          <Icon name="check" size="sm" className="text-[#0052FF]" />
          <span>Saved</span>
        </div>
      );
    }

    return null;
  }, [context, frameAdded, handleAddFrame]);

  return (
    <SimpleLayout>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="w-full border-b-2 p-3">
          <AuctionCarousel />
        </div>
        <div className="w-full">
          <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex justify-between items-center h-11">
              <div>{saveFrameButton}</div>
            </div>
          </header>

          <main>
            <HeroSection />
            <FeaturesGrid />
            <HowItWorks />
          </main>

          <footer className="mt-2 pt-4 pb-8 flex justify-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-[var(--ock-text-foreground-muted)] text-xs"
              onClick={() => openUrl("https://base.org/builders/minikit")}
            >
              Built on Base with MiniKit
            </Button>
          </footer>
        </div>
      </div>
    </SimpleLayout>
  );
}
