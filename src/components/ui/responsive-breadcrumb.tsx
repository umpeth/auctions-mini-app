"use client";

import * as React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ITEMS_TO_DISPLAY = 3;

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function ResponsiveBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Calculate which items to show directly and which to put in dropdown
  const showDirectly = items.length <= ITEMS_TO_DISPLAY;
  const firstItem = items[0];
  const lastItems = showDirectly
    ? []
    : items.slice(-Math.max(1, ITEMS_TO_DISPLAY - 1));
  const middleItems = showDirectly
    ? []
    : items.slice(1, -Math.max(1, ITEMS_TO_DISPLAY - 1));

  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        {/* Always show first item */}
        <BreadcrumbItem>
          {firstItem.href === "/" ? (
            <BreadcrumbLink
              href={firstItem.href}
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
            </BreadcrumbLink>
          ) : (
            <BreadcrumbLink href={firstItem.href}>
              {firstItem.label}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>

        {/* Show middle items in dropdown if needed */}
        {!showDirectly && middleItems.length > 0 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {isDesktop ? (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {middleItems.map((item, index) => (
                      <DropdownMenuItem key={index}>
                        <Link href={item.href ? item.href : "#"}>
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger aria-label="Toggle Menu">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Navigate to</DrawerTitle>
                      <DrawerDescription>
                        Select a page to navigate to.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-1 px-4">
                      {middleItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href ? item.href : "#"}
                          className="py-1 text-sm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <DrawerFooter className="pt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
          </>
        )}

        {/* Show either all items (if <= ITEMS_TO_DISPLAY) or just the last items */}
        {(showDirectly ? items.slice(1) : lastItems).map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink
                  asChild
                  className="max-w-40 truncate md:max-w-none"
                >
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="max-w-40 truncate md:max-w-none">
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
