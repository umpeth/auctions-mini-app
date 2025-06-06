import { NextResponse } from "next/server";
import { trackBid } from "@/lib/redis";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { checkForOverbid } from "@/lib/overbid-handling";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const body = await request.json();
    const { auctionId, amount, fid, auctionHouseAddress, bidderAddress } = body;

    // Validate FID if provided
    if (fid && session?.user?.fid && session.user.fid.toString() !== fid) {
      console.error(
        "Received unauthorized request: FID mismatch",
        session,
        fid,
      );
      return NextResponse.json(
        { error: "Unauthorized - FID mismatch" },
        { status: 401 },
      );
    }

    if (!auctionId || typeof amount !== "number") {
      return NextResponse.json(
        { error: "Invalid request - auctionId and amount are required" },
        { status: 400 },
      );
    }

    const timestampInSeconds = Math.floor(Date.now() / 1000);

    await trackBid(
      auctionHouseAddress,
      auctionId,
      fid || "anonymous",
      amount,
      bidderAddress,
      timestampInSeconds,
    );

    await checkForOverbid(auctionHouseAddress, auctionId, {
      fid: fid || "anonymous",
      bidderAddress,
      timestampInSeconds,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error tracking bid:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
