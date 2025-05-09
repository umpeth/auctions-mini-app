import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const custodyAddress = searchParams.get("custody_address");

  if (!custodyAddress) {
    return NextResponse.json(
      { error: "custody_address is required" },
      { status: 400 },
    );
  }

  const apiKey = process.env.NEYNAR_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 },
    );
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
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 },
    );
  }
}
