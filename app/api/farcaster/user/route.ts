import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { rateLimit } from "@/lib/rate-limit";

const CACHE_TTL = 5 * 60; // 5 minutes in seconds
const RATE_LIMIT_CONFIG = {
  maxRequests: 6,
  windowMs: 60 * 1000, // 60 seconds
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const custodyAddress = searchParams.get("custody_address");

  if (!custodyAddress) {
    return NextResponse.json(
      { error: "custody_address is required" },
      { status: 400 },
    );
  }

  // Apply rate limiting based on custody address
  const rateLimitResult = await rateLimit(
    `farcaster:${custodyAddress.toLowerCase()}`,
    RATE_LIMIT_CONFIG,
  );

  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: "Rate limit exceeded" },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil(
            (rateLimitResult.reset - Date.now()) / 1000,
          ).toString(),
          "X-RateLimit-Limit": rateLimitResult.limit.toString(),
          "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
          "X-RateLimit-Reset": rateLimitResult.reset.toString(),
        },
      },
    );
  }

  const apiKey = process.env.NEYNAR_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 },
    );
  }

  // Check cache first
  if (redis) {
    const cacheKey = `farcaster:user:${custodyAddress.toLowerCase()}`;
    const cachedData = await redis.get(cacheKey);
    if (cachedData) {
      return NextResponse.json(cachedData);
    }
  }

  try {
    const response = await fetch(
      `https://api.neynar.com/v2/farcaster/user/bulk-by-address?addresses=${custodyAddress}`,
      {
        headers: {
          "x-api-key": apiKey,
        },
      },
    );

    if (!response.ok) {
      if (response.status === 404) {
        if (redis) {
          const cacheKey = `farcaster:user:${custodyAddress.toLowerCase()}`;
          await redis.set(cacheKey, { users: [] }, { ex: CACHE_TTL });
        }
        return NextResponse.json({ users: [] });
      }
      const error = await response.text();
      console.log(error);
      return NextResponse.json(
        { error: "Failed to fetch Farcaster user" },
        { status: response.status },
      );
    }

    const data = await response.json();
    console.log({ data });

    // Ensure we have the expected structure
    // const responseData = {
    //   users: Array.isArray(data.users)
    //     ? data.users
    //     : data.result?.users
    //       ? data.result.users
    //       : [],
    // };

    const responseData = data;
    // Cache successful responses
    if (redis) {
      const cacheKey = `farcaster:user:${custodyAddress.toLowerCase()}`;
      await redis.set(cacheKey, responseData, { ex: CACHE_TTL });
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 },
    );
  }
}
