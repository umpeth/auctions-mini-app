"use client";

import { Navigation } from "@/components/navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function Footer() {
  const isTabletOrLarger = useMediaQuery("(min-width: 768px)");
  const currentYear = new Date().getFullYear();

  const extraLinks = [
    {
      label: "All Auctions",
      href: "/auctions",
    },
    {
      label: "Auction House",
      href: "/houses",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  if (!isTabletOrLarger) {
    return (
      <footer className="sticky bottom-0 left-0 right-0 mt-auto border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-2">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <nav className="flex items-center space-x-6">
              <Navigation />
              <div className="flex items-center gap-4">
                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 shrink-0"
                      >
                        <MoreHorizontal className="h-5 w-5" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-80">
                      <SheetHeader>
                        <SheetTitle>Navigation</SheetTitle>
                        <div className="mt-4 flex flex-col gap-3">
                          {extraLinks.map((link, index) => (
                            <Link
                              key={index}
                              href={link.href}
                              className="text-sm transition-colors hover:text-foreground/80"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
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
