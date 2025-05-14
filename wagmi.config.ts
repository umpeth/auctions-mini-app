import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { AuctionHouseABI } from "./src/abi/AuctionHouse";
import { AuctionItemERC721ABI } from "./src/abi/AuctionItemERC721";
import { AuctionHouseFactoryABI } from "./src/abi/AuctionHouseFactory";
import { AuctionItemERC721FactoryABI } from "./src/abi/AuctionItemERC721Factory";
import { AffiliateEscrowFactoryABI } from "./src/abi/AffiliateEscrowFactory";
import { AffiliateEscrowABI } from "./src/abi/AffiliateEscrow";

export default defineConfig({
  out: "wagmi/generated.ts",
  contracts: [
    {
      name: "AuctionHouse",
      abi: AuctionHouseABI,
    },
    {
      name: "AuctionItemERC721",
      abi: AuctionItemERC721ABI,
    },
    {
      name: "AuctionHouseFactory",
      abi: AuctionHouseFactoryABI,
    },
    {
      name: "AuctionItemERC721Factory",
      abi: AuctionItemERC721FactoryABI,
    },
    {
      name: "AffiliateEscrowFactory",
      abi: AffiliateEscrowFactoryABI,
    },
    {
      name: "AffiliateEscrow",
      abi: AffiliateEscrowABI,
    },
  ],
  plugins: [react()],
});
