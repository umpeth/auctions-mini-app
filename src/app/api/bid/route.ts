import { NextResponse } from "next/server";
import { trackBid } from "@/lib/redis";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const body = await request.json();
    const { auctionId, amount, fid, auctionHouseAddress } = body;

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

    await trackBid(auctionHouseAddress, auctionId, fid || "anonymous", amount);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error tracking bid:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
