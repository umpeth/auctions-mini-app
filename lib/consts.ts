export const appUrl = process.env.NEXT_PUBLIC_URL;
if (!appUrl) {
  throw new Error("NEXT_PUBLIC_URL not configured");
}

export const auctionItemERC721FactoryAddress =
  "0xC6d383429967Ed49cAf224bbD6c7A7F4317C0a15";
export const affiliateEscrowFactoryAddress =
  "0xE07c41Bc76A8B56ad7E996cF60A3dDeD96ca575D";
export const auctionHouseFactoryAddress =
  "0xe7C121cb8773d324b68d1fb3531Fc9043440D1e0";
export const auctionHouseAddress = "0xEEBd856800C5e468AaFFBCd5fDA44C198e30DC9a";
export const affiliateVerifierAddress =
  "0x93ae91231ebE3B525E1A28a616C86d65A7aB91C2";

export const frameMetadata = {
  version: "next",
  iconUrl: `${appUrl}/icon.png`,
  imageUrl: `${appUrl}/icon.png`,
  splashImageUrl: `${appUrl}/icon.png`,
  splashBackgroundColor: "#ffffff",
};
