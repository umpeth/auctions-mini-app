import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";
import { useViewProfile, useMiniKit } from "@coinbase/onchainkit/minikit";
import { Address } from "@coinbase/onchainkit/identity";

interface FarcasterUser {
  object: "user";
  mystery_account?: boolean;
  fid: number;
  username: string;
  display_name: string;
  pfp_url: string;
  custody_address: string;
  follower_count: number | string;
  following_count: number | string;
}

interface FarcasterIdentityProps {
  address: string;
}

export function FarcasterIdentity({ address }: FarcasterIdentityProps) {
  const [user, setUser] = useState<FarcasterUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const viewProfile = useViewProfile();
  const { context } = useMiniKit();
  const handleProfileClick = () => {
    if (!context?.client) {
      // TODO: open profile in new tab ?
      return;
    }

    if (user && !user.mystery_account) {
      viewProfile(user.fid);
    }
  };

  useEffect(() => {
    const mysteryAccount = {
      fid: 0,
      object: "user",
      mystery_account: true,
      username: "Mystery Account",
      display_name: "Mystery Account",
      pfp_url: "https://robohash.org/mysteryaccount?set=set4",
      custody_address: "",
      follower_count: "-",
      following_count: "-",
    };

    const fetchFarcasterUser = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `/api/farcaster/user?custody_address=${address}`,
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch Farcaster user");
        }

        // Handle rate limiting
        if (response.status === 429) {
          const retryAfter = response.headers.get("Retry-After");
          throw new Error(
            `Rate limit exceeded. Please try again in ${retryAfter} seconds`,
          );
        }
        if (data[address]?.length > 0) {
          setUser(data[address][0]);
        } else {
          console.log("setting mystery account");
          setUser(mysteryAccount as FarcasterUser);
        }
      } catch (err) {
        console.error("Error fetching Farcaster user:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch user data",
        );
        setUser(mysteryAccount as FarcasterUser);
      } finally {
        setLoading(false);
      }
    };

    if (address) {
      fetchFarcasterUser();
    }
  }, [address]);

  if (loading) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-6 w-32" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mt-2" />
          <Skeleton className="h-4 w-3/4 mt-2" />
        </CardContent>
      </Card>
    );
  }

  if (error && !user) {
    return (
      <Card className="w-full max-w-md bg-destructive/10">
        <CardContent className="pt-6">
          <p className="text-destructive">Error: {error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!user) {
    return null;
  }

  const isMysteryAccount = user.mystery_account;

  return (
    <Card
      className={`w-full max-w-md ${
        isMysteryAccount
          ? "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30"
          : ""
      } ${!isMysteryAccount ? "cursor-pointer hover:bg-accent/50 transition-colors" : ""}`}
      onClick={handleProfileClick}
    >
      <CardHeader className="p-3">
        <CardTitle className="flex items-center gap-4">
          <Avatar
            className={
              isMysteryAccount ? "ring-2 ring-purple-500 ring-offset-2" : ""
            }
          >
            <AvatarImage src={user.pfp_url} alt={user.display_name} />
            <AvatarFallback>
              {user.username.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1 flex-1">
            <div className="flex items-center justify-between">
              <h3
                className={`text-lg font-bold ${
                  isMysteryAccount
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
                    : ""
                }`}
              >
                {user.display_name}
              </h3>
              <div className="text-sm text-muted-foreground">
                <Address address={address as `0x${string}`} />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">@{user.username}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="flex gap-4">
          <div>
            <span
              className={`font-bold ${
                isMysteryAccount ? "text-indigo-600 dark:text-indigo-400" : ""
              }`}
            >
              {user.follower_count}
            </span>
            <span className="text-sm text-muted-foreground ml-1">
              followers
            </span>
          </div>
          <div>
            <span
              className={`font-bold ${
                isMysteryAccount ? "text-indigo-600 dark:text-indigo-400" : ""
              }`}
            >
              {user.following_count}
            </span>
            <span className="text-sm text-muted-foreground ml-1">
              following
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
