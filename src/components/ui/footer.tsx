"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    title: "Auctions",
    href: "/auctions/active",
  },
  {
    title: "Create Auction",
    href: "/auctions/new",
  },
];

export function Footer() {
  const pathname = usePathname();
  // const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 mt-auto border-t bg-background/95">
      <div className="container py-2">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-foreground/80",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          {/* <p className="text-sm text-muted-foreground">
            © {currentYear} NFT Auction House
          </p> */}
        </div>
      </div>
    </footer>
  );
}
