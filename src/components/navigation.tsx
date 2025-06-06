"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
}

interface NavigationProps {
  className?: string;
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

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm transition-colors hover:text-foreground/80",
            className,
            pathname === item.href
              ? "text-foreground"
              : "text-muted-foreground",
          )}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}
