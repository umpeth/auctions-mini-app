"use client";

import { type ReactNode } from "react";
import { base } from "wagmi/chains";
import { MiniKitProvider } from "@coinbase/onchainkit/minikit";
import { TooltipProvider } from "@/components/ui/tooltip";
import { appUrl } from "@/lib/consts";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export function Providers(props: {
  children: ReactNode;
  session: Session | null;
}) {
  console.log(props.session);

  return (
    <SessionProvider session={props.session}>
      <MiniKitProvider
        apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
        chain={base}
        config={{
          appearance: {
            mode: "auto",
            theme: "mini-app-theme",
            name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
            logo: `${appUrl}/icon.png`,
          },
        }}
      >
        <TooltipProvider>{props.children}</TooltipProvider>
      </MiniKitProvider>
    </SessionProvider>
  );
}
