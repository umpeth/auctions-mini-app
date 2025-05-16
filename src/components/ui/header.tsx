"use client";

import {
  Wallet,
  ConnectWallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import {
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import { SignInButton } from "@/components/auth/SignInButton";
import { Navigation } from "@/components/navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const isTabletOrLarger = useMediaQuery("(min-width: 768px)");

  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center gap-x-12">
          <Link href="/">
            <Image src="/icon.png" alt="logo" width={32} height={32} />
          </Link>
          {isTabletOrLarger && (
            <div className="hidden lg:flex lg:gap-x-16 lg:py-4">
              <Navigation className="text-lg" />
            </div>
          )}
        </div>
        <div className="flex gap-x-2">
          <Wallet className="z-10 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium">
            <ConnectWallet className="min-h-[36px] min-w-[120px] w-full px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 rounded-md">
              <Name className="text-inherit" />
            </ConnectWallet>
            <WalletDropdown>
              <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                <Avatar />
                <Name />
                <Address />
                <EthBalance />
              </Identity>
              <WalletDropdownDisconnect />
            </WalletDropdown>
          </Wallet>

          <SignInButton />
        </div>
      </nav>
    </header>
  );
}
