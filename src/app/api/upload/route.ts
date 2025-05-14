import { NextRequest, NextResponse } from "next/server";
import { PinataSDK } from "pinata";

const PINATA_JWT = process.env.PINATA_JWT;
const GATEWAY_URL = process.env.GATEWAY_URL;

if (!PINATA_JWT || !GATEWAY_URL) {
  throw new Error("Pinata JWT and Gateway URL are required");
}

const pinata = new PinataSDK({
  pinataJwt: PINATA_JWT,
  pinataGateway: GATEWAY_URL,
});

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  if (!formData) {
    return NextResponse.json({ error: "No data uploaded" }, { status: 400 });
  }

  try {
    const ipfsHashes = [];
    for (const file of formData.values()) {
      if (file instanceof File) {
        const result = await pinata.upload.public.file(file);
        ipfsHashes.push({
          name: file.name,
          hash: result.cid,
        });
      }
    }
    return NextResponse.json({ ipfsHashes });
  } catch (error) {
    console.error("Error uploading to Pinata:", error);
    return NextResponse.json(
      { error: "Error uploading to Pinata" },
      { status: 500 },
    );
  }
}
