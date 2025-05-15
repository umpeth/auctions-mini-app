"use client";

import { useCallback, useEffect, useState } from "react";

import { signIn, signOut, getCsrfToken } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import sdk, { SignIn as SignInCore } from "@farcaster/frame-sdk";
import FarcasterIcon from "@/components/icons/farcaster";

export function SignInButton() {
  const [signingIn, setSigningIn] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const [signInResult, setSignInResult] = useState<SignInCore.SignInResult>();
  const [signInFailure, setSignInFailure] = useState<string>();
  const { data: session, status } = useSession();

  // TODO: add error handling?

  useEffect(() => {
    // TODO: only for debugging
    if (signInResult) {
      console.log("signInResult", signInResult);
    }
    if (signInFailure) {
      console.log("signInFailure", signInFailure);
    }
    if (session) {
      console.log("session", session);
    }
  }, [session, signInResult, signInFailure]);

  const getNonce = useCallback(async () => {
    const nonce = await getCsrfToken();
    if (!nonce) throw new Error("Unable to generate nonce");
    return nonce;
  }, []);

  const handleSignIn = useCallback(async () => {
    try {
      setSigningIn(true);
      setSignInFailure(undefined);
      const nonce = await getNonce();
      const result = await sdk.actions.signIn({ nonce });
      setSignInResult(result);

      await signIn("credentials", {
        message: result.message,
        signature: result.signature,
        redirect: false,
      });
    } catch (e) {
      if (e instanceof SignInCore.RejectedByUser) {
        setSignInFailure("Rejected by user");
        return;
      }
      console.error(e);
      setSignInFailure("Unknown error");
    } finally {
      setSigningIn(false);
    }
  }, [getNonce]);

  const handleSignOut = useCallback(async () => {
    try {
      setSigningOut(true);
      await signOut({ redirect: false });
      setSignInResult(undefined);
    } finally {
      setSigningOut(false);
    }
  }, []);

  return (
    <>
      {status !== "authenticated" && (
        <Button onClick={handleSignIn} disabled={signingIn}>
          <FarcasterIcon className="w-4 h-4 mr-2" /> Sign In
        </Button>
      )}
      {status === "authenticated" && (
        <Button onClick={handleSignOut} disabled={signingOut}>
          <FarcasterIcon className="w-4 h-4 mr-2" /> Sign Out
        </Button>
      )}
    </>
  );
}
