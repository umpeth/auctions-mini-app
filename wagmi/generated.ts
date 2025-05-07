import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from "wagmi/codegen";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AffiliateEscrowFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const affiliateEscrowFactoryAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  { type: "error", inputs: [], name: "FailedDeployment" },
  {
    type: "error",
    inputs: [
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "InsufficientBalance",
  },
  { type: "error", inputs: [], name: "InvalidAddress" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "escrowAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "payee",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "storefront",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "arbiter",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "AffiliateEscrowCreated",
  },
  {
    type: "function",
    inputs: [
      { name: "payee", internalType: "address", type: "address" },
      { name: "storefront", internalType: "address", type: "address" },
      { name: "arbiter", internalType: "address", type: "address" },
    ],
    name: "createEscrow",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "escrowImplementation",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AuctionHouse
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const auctionHouseAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "_name", internalType: "string", type: "string" },
      { name: "_image", internalType: "string", type: "string" },
      { name: "_description", internalType: "string", type: "string" },
      { name: "_contractURI", internalType: "string", type: "string" },
      { name: "_symbol", internalType: "string", type: "string" },
      { name: "_customDeadline", internalType: "uint256", type: "uint256" },
      { name: "_auctionItemFactory", internalType: "address", type: "address" },
      { name: "_escrowFactory", internalType: "address", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  { type: "error", inputs: [], name: "AuctionExpired" },
  { type: "error", inputs: [], name: "AuctionHasntCompleted" },
  { type: "error", inputs: [], name: "AuctionHasntStarted" },
  { type: "error", inputs: [], name: "AuctionNotFound" },
  { type: "error", inputs: [], name: "AuctionStillActive" },
  { type: "error", inputs: [], name: "BidTooLow" },
  { type: "error", inputs: [], name: "BidsAlreadyPlaced" },
  { type: "error", inputs: [], name: "CannotRescueToZeroAddress" },
  { type: "error", inputs: [], name: "CannotRescueWhileAuctionsActive" },
  { type: "error", inputs: [], name: "InsufficientBalance" },
  { type: "error", inputs: [], name: "InsufficientTokenAmount" },
  { type: "error", inputs: [], name: "InvalidPremiumPercentage" },
  { type: "error", inputs: [], name: "NFTNotHeldByContract" },
  { type: "error", inputs: [], name: "NotAuctionOwner" },
  { type: "error", inputs: [], name: "NotWinner" },
  { type: "error", inputs: [], name: "OnlyOwnerCanRescue" },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnableInvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "OwnableUnauthorizedAccount",
  },
  { type: "error", inputs: [], name: "ReentrancyGuardReentrantCall" },
  { type: "error", inputs: [], name: "ReservePriceTooLow" },
  { type: "error", inputs: [], name: "TokenInActiveAuction" },
  { type: "error", inputs: [], name: "TokenTransferFailed" },
  { type: "error", inputs: [], name: "TransferFailed" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "auctionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "auctionAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "bidder",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "affiliate",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "firstBid", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "AuctionBid",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "auctionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "auctionAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "auctionOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "AuctionCanceled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "auctionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "auctionHouse",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "AuctionCancelled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "auctionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "auctionAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "auctionOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenContract",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "duration",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "reservePrice",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "affiliateFee",
        internalType: "uint16",
        type: "uint16",
        indexed: false,
      },
      {
        name: "arbiter",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "escrowAddress",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "isPremiumAuction",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
    ],
    name: "AuctionCreated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "auctionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "auctionAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "bidder",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "encryptedData",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      {
        name: "ephemeralPublicKey",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      { name: "iv", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "verificationHash",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      { name: "isFinal", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "AuctionEncryptedMessage",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "auctionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "auctionAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "winner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "affiliate",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "finalAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "affiliatePayout",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "AuctionEnded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "auctionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "auctionAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newEndTime",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "AuctionExtended",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "auctionHouse",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
      { name: "image", internalType: "string", type: "string", indexed: false },
      {
        name: "description",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "AuctionHouseMetadataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "auctionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "auctionAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "bidder",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "bidAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "affiliate",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "encryptedData",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      {
        name: "ephemeralPublicKey",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      { name: "iv", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "verificationHash",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      { name: "isFinal", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "BidCreated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "token",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "ERC20Rescued",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "token",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "ERC721Rescued",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "ETHRescued",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "from", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenContract",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "NFTReceived",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "auctionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "auctionAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "outbidUser",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newBidder",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "originalBid",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "premiumAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "PremiumPaid",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "newDeadline",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "SettlementDeadlineUpdated",
  },
  {
    type: "function",
    inputs: [],
    name: "VERSION",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "activeAuctionsCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "auctionEncryptedMessages",
    outputs: [
      { name: "encryptedData", internalType: "bytes", type: "bytes" },
      { name: "ephemeralPublicKey", internalType: "bytes", type: "bytes" },
      { name: "iv", internalType: "bytes", type: "bytes" },
      { name: "verificationHash", internalType: "bytes", type: "bytes" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "auctionExists",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "auctionItemContract",
    outputs: [
      { name: "", internalType: "contract AuctionItemERC721", type: "address" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "auctionItemFactoryAddress",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "auctions",
    outputs: [
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "tokenContract", internalType: "address", type: "address" },
      { name: "highestBid", internalType: "uint256", type: "uint256" },
      { name: "endTime", internalType: "uint256", type: "uint256" },
      { name: "startTime", internalType: "uint256", type: "uint256" },
      { name: "reservePrice", internalType: "uint256", type: "uint256" },
      { name: "affiliateFee", internalType: "uint16", type: "uint16" },
      { name: "auctionOwner", internalType: "address", type: "address" },
      { name: "bidder", internalType: "address payable", type: "address" },
      { name: "affiliate", internalType: "address", type: "address" },
      { name: "arbiter", internalType: "address", type: "address" },
      { name: "escrowAddress", internalType: "address", type: "address" },
      { name: "auctionCurrency", internalType: "address", type: "address" },
      { name: "minBidIncrementBps", internalType: "uint16", type: "uint16" },
      { name: "isPremiumAuction", internalType: "bool", type: "bool" },
      { name: "premiumBps", internalType: "uint16", type: "uint16" },
      { name: "timeExtension", internalType: "uint256", type: "uint256" },
      { name: "paymentAmount", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_auctionIds", internalType: "uint256[]", type: "uint256[]" },
    ],
    name: "batchEndExpiredAuctions",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "_auctionId", internalType: "uint256", type: "uint256" }],
    name: "cancelAuction",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "_tokenContract", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
      { name: "_startTime", internalType: "uint256", type: "uint256" },
      { name: "_reservePrice", internalType: "uint256", type: "uint256" },
      { name: "_duration", internalType: "uint256", type: "uint256" },
      { name: "_affiliateFee", internalType: "uint16", type: "uint16" },
      { name: "_arbiter", internalType: "address", type: "address" },
      { name: "_escrowFactory", internalType: "address", type: "address" },
      { name: "_auctionCurrency", internalType: "address", type: "address" },
      { name: "_isPremiumAuction", internalType: "bool", type: "bool" },
      { name: "_premiumBps", internalType: "uint16", type: "uint16" },
      { name: "_minBidIncrementBps", internalType: "uint16", type: "uint16" },
      { name: "_timeExtension", internalType: "uint256", type: "uint256" },
    ],
    name: "createAuction",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "_metadata",
        internalType: "struct AuctionHouse.NFTMetadata",
        type: "tuple",
        components: [
          { name: "name", internalType: "string", type: "string" },
          { name: "description", internalType: "string", type: "string" },
          { name: "image", internalType: "string", type: "string" },
          { name: "termsOfService", internalType: "string", type: "string" },
          {
            name: "supplementalImages",
            internalType: "string[]",
            type: "string[]",
          },
        ],
      },
      { name: "_startTime", internalType: "uint256", type: "uint256" },
      { name: "_reservePrice", internalType: "uint256", type: "uint256" },
      { name: "_duration", internalType: "uint256", type: "uint256" },
      { name: "_affiliateFee", internalType: "uint16", type: "uint16" },
      { name: "_arbiterAddress", internalType: "address", type: "address" },
      {
        name: "_escrowFactoryAddress",
        internalType: "address",
        type: "address",
      },
      { name: "_auctionCurrency", internalType: "address", type: "address" },
      { name: "_isPremiumAuction", internalType: "bool", type: "bool" },
      { name: "_premiumRateBps", internalType: "uint16", type: "uint16" },
      { name: "_minBidIncrementBps", internalType: "uint16", type: "uint16" },
      { name: "_timeExtension", internalType: "uint256", type: "uint256" },
    ],
    name: "createAuctionWithNewNFT",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "_auctionId", internalType: "uint256", type: "uint256" },
      { name: "_affiliate", internalType: "address", type: "address" },
      {
        name: "_encryptedMsg",
        internalType: "struct IAuctionHouse.EncryptedMessage",
        type: "tuple",
        components: [
          { name: "encryptedData", internalType: "bytes", type: "bytes" },
          { name: "ephemeralPublicKey", internalType: "bytes", type: "bytes" },
          { name: "iv", internalType: "bytes", type: "bytes" },
          { name: "verificationHash", internalType: "bytes", type: "bytes" },
        ],
      },
      { name: "_bidAmount", internalType: "uint256", type: "uint256" },
    ],
    name: "createBid",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "_name", internalType: "string", type: "string" },
      { name: "_symbol", internalType: "string", type: "string" },
      { name: "_contractURI", internalType: "string", type: "string" },
    ],
    name: "createNFTContract",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "description",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_auctionId", internalType: "uint256", type: "uint256" }],
    name: "endAuction",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "escrowFactory",
    outputs: [
      {
        name: "",
        internalType: "contract AffiliateEscrowFactory",
        type: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_auctionId", internalType: "uint256", type: "uint256" }],
    name: "getAuctionData",
    outputs: [
      {
        name: "",
        internalType: "struct IAuctionHouse.Auction",
        type: "tuple",
        components: [
          { name: "tokenId", internalType: "uint256", type: "uint256" },
          { name: "tokenContract", internalType: "address", type: "address" },
          { name: "highestBid", internalType: "uint256", type: "uint256" },
          { name: "endTime", internalType: "uint256", type: "uint256" },
          { name: "startTime", internalType: "uint256", type: "uint256" },
          { name: "reservePrice", internalType: "uint256", type: "uint256" },
          { name: "affiliateFee", internalType: "uint16", type: "uint16" },
          { name: "auctionOwner", internalType: "address", type: "address" },
          { name: "bidder", internalType: "address payable", type: "address" },
          { name: "affiliate", internalType: "address", type: "address" },
          { name: "arbiter", internalType: "address", type: "address" },
          { name: "escrowAddress", internalType: "address", type: "address" },
          { name: "auctionCurrency", internalType: "address", type: "address" },
          {
            name: "minBidIncrementBps",
            internalType: "uint16",
            type: "uint16",
          },
          { name: "isPremiumAuction", internalType: "bool", type: "bool" },
          { name: "premiumBps", internalType: "uint16", type: "uint16" },
          { name: "timeExtension", internalType: "uint256", type: "uint256" },
          { name: "paymentAmount", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_auctionId", internalType: "uint256", type: "uint256" }],
    name: "getMinimumBid",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "houseName",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "image",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_auctionId", internalType: "uint256", type: "uint256" }],
    name: "isAuctionActive",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "noActiveAuctions",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "from", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "tokenAddress", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "rescueERC20",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "tokenAddress", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "rescueERC721",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address payable", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "rescueETH",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "_auctionId", internalType: "uint256", type: "uint256" },
      {
        name: "_newMsg",
        internalType: "struct IAuctionHouse.EncryptedMessage",
        type: "tuple",
        components: [
          { name: "encryptedData", internalType: "bytes", type: "bytes" },
          { name: "ephemeralPublicKey", internalType: "bytes", type: "bytes" },
          { name: "iv", internalType: "bytes", type: "bytes" },
          { name: "verificationHash", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setWinningBidderEncryptedMessage",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "settlementDeadline",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
    ],
    name: "tokenToAuctionId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "_name", internalType: "string", type: "string" },
      { name: "_image", internalType: "string", type: "string" },
      { name: "_description", internalType: "string", type: "string" },
    ],
    name: "updateAuctionHouseMetadata",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "_newDeadline", internalType: "uint256", type: "uint256" },
    ],
    name: "updateSettlementDeadline",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AuctionHouseFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const auctionHouseFactoryAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "auctionHouse",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "AuctionHouseCreated",
  },
  {
    type: "function",
    inputs: [
      { name: "_name", internalType: "string", type: "string" },
      { name: "_image", internalType: "string", type: "string" },
      { name: "_description", internalType: "string", type: "string" },
      { name: "_contractURI", internalType: "string", type: "string" },
      { name: "_symbol", internalType: "string", type: "string" },
      { name: "_customDeadline", internalType: "uint256", type: "uint256" },
      { name: "_auctionItemFactory", internalType: "address", type: "address" },
      { name: "_escrowFactory", internalType: "address", type: "address" },
    ],
    name: "createAuctionHouse",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AuctionItemERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const auctionItemErc721Abi = [
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newURI", internalType: "string", type: "string" }],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "name", internalType: "string", type: "string" },
      { name: "description", internalType: "string", type: "string" },
      { name: "image", internalType: "string", type: "string" },
      { name: "termsOfService", internalType: "string", type: "string" },
      {
        name: "supplementalImages",
        internalType: "string[]",
        type: "string[]",
      },
    ],
    name: "setTokenMetadata",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AuctionItemERC721Factory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const auctionItemErc721FactoryAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnableInvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "OwnableUnauthorizedAccount",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenContract",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "AuctionItemERC721Created",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
  },
  {
    type: "function",
    inputs: [
      { name: "name", internalType: "string", type: "string" },
      { name: "symbol", internalType: "string", type: "string" },
      { name: "contractURI", internalType: "string", type: "string" },
    ],
    name: "createAuctionItemERC721",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link affiliateEscrowFactoryAbi}__
 */
export const useReadAffiliateEscrowFactory =
  /*#__PURE__*/ createUseReadContract({ abi: affiliateEscrowFactoryAbi });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link affiliateEscrowFactoryAbi}__ and `functionName` set to `"escrowImplementation"`
 */
export const useReadAffiliateEscrowFactoryEscrowImplementation =
  /*#__PURE__*/ createUseReadContract({
    abi: affiliateEscrowFactoryAbi,
    functionName: "escrowImplementation",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link affiliateEscrowFactoryAbi}__
 */
export const useWriteAffiliateEscrowFactory =
  /*#__PURE__*/ createUseWriteContract({ abi: affiliateEscrowFactoryAbi });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link affiliateEscrowFactoryAbi}__ and `functionName` set to `"createEscrow"`
 */
export const useWriteAffiliateEscrowFactoryCreateEscrow =
  /*#__PURE__*/ createUseWriteContract({
    abi: affiliateEscrowFactoryAbi,
    functionName: "createEscrow",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link affiliateEscrowFactoryAbi}__
 */
export const useSimulateAffiliateEscrowFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: affiliateEscrowFactoryAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link affiliateEscrowFactoryAbi}__ and `functionName` set to `"createEscrow"`
 */
export const useSimulateAffiliateEscrowFactoryCreateEscrow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: affiliateEscrowFactoryAbi,
    functionName: "createEscrow",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link affiliateEscrowFactoryAbi}__
 */
export const useWatchAffiliateEscrowFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: affiliateEscrowFactoryAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link affiliateEscrowFactoryAbi}__ and `eventName` set to `"AffiliateEscrowCreated"`
 */
export const useWatchAffiliateEscrowFactoryAffiliateEscrowCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: affiliateEscrowFactoryAbi,
    eventName: "AffiliateEscrowCreated",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__
 */
export const useReadAuctionHouse = /*#__PURE__*/ createUseReadContract({
  abi: auctionHouseAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"VERSION"`
 */
export const useReadAuctionHouseVersion = /*#__PURE__*/ createUseReadContract({
  abi: auctionHouseAbi,
  functionName: "VERSION",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"activeAuctionsCount"`
 */
export const useReadAuctionHouseActiveAuctionsCount =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionHouseAbi,
    functionName: "activeAuctionsCount",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"auctionEncryptedMessages"`
 */
export const useReadAuctionHouseAuctionEncryptedMessages =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionHouseAbi,
    functionName: "auctionEncryptedMessages",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"auctionExists"`
 */
export const useReadAuctionHouseAuctionExists =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionHouseAbi,
    functionName: "auctionExists",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"auctionItemContract"`
 */
export const useReadAuctionHouseAuctionItemContract =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionHouseAbi,
    functionName: "auctionItemContract",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"auctionItemFactoryAddress"`
 */
export const useReadAuctionHouseAuctionItemFactoryAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionHouseAbi,
    functionName: "auctionItemFactoryAddress",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"auctions"`
 */
export const useReadAuctionHouseAuctions = /*#__PURE__*/ createUseReadContract({
  abi: auctionHouseAbi,
  functionName: "auctions",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"description"`
 */
export const useReadAuctionHouseDescription =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionHouseAbi,
    functionName: "description",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"escrowFactory"`
 */
export const useReadAuctionHouseEscrowFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionHouseAbi,
    functionName: "escrowFactory",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"getAuctionData"`
 */
export const useReadAuctionHouseGetAuctionData =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionHouseAbi,
    functionName: "getAuctionData",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"getMinimumBid"`
 */
export const useReadAuctionHouseGetMinimumBid =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionHouseAbi,
    functionName: "getMinimumBid",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"houseName"`
 */
export const useReadAuctionHouseHouseName = /*#__PURE__*/ createUseReadContract(
  { abi: auctionHouseAbi, functionName: "houseName" },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"image"`
 */
export const useReadAuctionHouseImage = /*#__PURE__*/ createUseReadContract({
  abi: auctionHouseAbi,
  functionName: "image",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"isAuctionActive"`
 */
export const useReadAuctionHouseIsAuctionActive =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionHouseAbi,
    functionName: "isAuctionActive",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"noActiveAuctions"`
 */
export const useReadAuctionHouseNoActiveAuctions =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionHouseAbi,
    functionName: "noActiveAuctions",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"owner"`
 */
export const useReadAuctionHouseOwner = /*#__PURE__*/ createUseReadContract({
  abi: auctionHouseAbi,
  functionName: "owner",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"settlementDeadline"`
 */
export const useReadAuctionHouseSettlementDeadline =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionHouseAbi,
    functionName: "settlementDeadline",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"tokenToAuctionId"`
 */
export const useReadAuctionHouseTokenToAuctionId =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionHouseAbi,
    functionName: "tokenToAuctionId",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__
 */
export const useWriteAuctionHouse = /*#__PURE__*/ createUseWriteContract({
  abi: auctionHouseAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"batchEndExpiredAuctions"`
 */
export const useWriteAuctionHouseBatchEndExpiredAuctions =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "batchEndExpiredAuctions",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"cancelAuction"`
 */
export const useWriteAuctionHouseCancelAuction =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "cancelAuction",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"createAuction"`
 */
export const useWriteAuctionHouseCreateAuction =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "createAuction",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"createAuctionWithNewNFT"`
 */
export const useWriteAuctionHouseCreateAuctionWithNewNft =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "createAuctionWithNewNFT",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"createBid"`
 */
export const useWriteAuctionHouseCreateBid =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "createBid",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"createNFTContract"`
 */
export const useWriteAuctionHouseCreateNftContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "createNFTContract",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"endAuction"`
 */
export const useWriteAuctionHouseEndAuction =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "endAuction",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteAuctionHouseOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "onERC721Received",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteAuctionHouseRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"rescueERC20"`
 */
export const useWriteAuctionHouseRescueErc20 =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "rescueERC20",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"rescueERC721"`
 */
export const useWriteAuctionHouseRescueErc721 =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "rescueERC721",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"rescueETH"`
 */
export const useWriteAuctionHouseRescueEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "rescueETH",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"setWinningBidderEncryptedMessage"`
 */
export const useWriteAuctionHouseSetWinningBidderEncryptedMessage =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "setWinningBidderEncryptedMessage",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteAuctionHouseTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"updateAuctionHouseMetadata"`
 */
export const useWriteAuctionHouseUpdateAuctionHouseMetadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "updateAuctionHouseMetadata",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"updateSettlementDeadline"`
 */
export const useWriteAuctionHouseUpdateSettlementDeadline =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseAbi,
    functionName: "updateSettlementDeadline",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__
 */
export const useSimulateAuctionHouse = /*#__PURE__*/ createUseSimulateContract({
  abi: auctionHouseAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"batchEndExpiredAuctions"`
 */
export const useSimulateAuctionHouseBatchEndExpiredAuctions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "batchEndExpiredAuctions",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"cancelAuction"`
 */
export const useSimulateAuctionHouseCancelAuction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "cancelAuction",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"createAuction"`
 */
export const useSimulateAuctionHouseCreateAuction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "createAuction",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"createAuctionWithNewNFT"`
 */
export const useSimulateAuctionHouseCreateAuctionWithNewNft =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "createAuctionWithNewNFT",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"createBid"`
 */
export const useSimulateAuctionHouseCreateBid =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "createBid",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"createNFTContract"`
 */
export const useSimulateAuctionHouseCreateNftContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "createNFTContract",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"endAuction"`
 */
export const useSimulateAuctionHouseEndAuction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "endAuction",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateAuctionHouseOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "onERC721Received",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateAuctionHouseRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"rescueERC20"`
 */
export const useSimulateAuctionHouseRescueErc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "rescueERC20",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"rescueERC721"`
 */
export const useSimulateAuctionHouseRescueErc721 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "rescueERC721",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"rescueETH"`
 */
export const useSimulateAuctionHouseRescueEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "rescueETH",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"setWinningBidderEncryptedMessage"`
 */
export const useSimulateAuctionHouseSetWinningBidderEncryptedMessage =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "setWinningBidderEncryptedMessage",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateAuctionHouseTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"updateAuctionHouseMetadata"`
 */
export const useSimulateAuctionHouseUpdateAuctionHouseMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "updateAuctionHouseMetadata",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseAbi}__ and `functionName` set to `"updateSettlementDeadline"`
 */
export const useSimulateAuctionHouseUpdateSettlementDeadline =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseAbi,
    functionName: "updateSettlementDeadline",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__
 */
export const useWatchAuctionHouseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: auctionHouseAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"AuctionBid"`
 */
export const useWatchAuctionHouseAuctionBidEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "AuctionBid",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"AuctionCanceled"`
 */
export const useWatchAuctionHouseAuctionCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "AuctionCanceled",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"AuctionCancelled"`
 */
export const useWatchAuctionHouseAuctionCancelledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "AuctionCancelled",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"AuctionCreated"`
 */
export const useWatchAuctionHouseAuctionCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "AuctionCreated",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"AuctionEncryptedMessage"`
 */
export const useWatchAuctionHouseAuctionEncryptedMessageEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "AuctionEncryptedMessage",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"AuctionEnded"`
 */
export const useWatchAuctionHouseAuctionEndedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "AuctionEnded",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"AuctionExtended"`
 */
export const useWatchAuctionHouseAuctionExtendedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "AuctionExtended",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"AuctionHouseMetadataUpdated"`
 */
export const useWatchAuctionHouseAuctionHouseMetadataUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "AuctionHouseMetadataUpdated",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"BidCreated"`
 */
export const useWatchAuctionHouseBidCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "BidCreated",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"ERC20Rescued"`
 */
export const useWatchAuctionHouseErc20RescuedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "ERC20Rescued",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"ERC721Rescued"`
 */
export const useWatchAuctionHouseErc721RescuedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "ERC721Rescued",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"ETHRescued"`
 */
export const useWatchAuctionHouseEthRescuedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "ETHRescued",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"NFTReceived"`
 */
export const useWatchAuctionHouseNftReceivedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "NFTReceived",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchAuctionHouseOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "OwnershipTransferred",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"PremiumPaid"`
 */
export const useWatchAuctionHousePremiumPaidEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "PremiumPaid",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseAbi}__ and `eventName` set to `"SettlementDeadlineUpdated"`
 */
export const useWatchAuctionHouseSettlementDeadlineUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseAbi,
    eventName: "SettlementDeadlineUpdated",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseFactoryAbi}__
 */
export const useWriteAuctionHouseFactory = /*#__PURE__*/ createUseWriteContract(
  { abi: auctionHouseFactoryAbi },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionHouseFactoryAbi}__ and `functionName` set to `"createAuctionHouse"`
 */
export const useWriteAuctionHouseFactoryCreateAuctionHouse =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionHouseFactoryAbi,
    functionName: "createAuctionHouse",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseFactoryAbi}__
 */
export const useSimulateAuctionHouseFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: auctionHouseFactoryAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionHouseFactoryAbi}__ and `functionName` set to `"createAuctionHouse"`
 */
export const useSimulateAuctionHouseFactoryCreateAuctionHouse =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionHouseFactoryAbi,
    functionName: "createAuctionHouse",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseFactoryAbi}__
 */
export const useWatchAuctionHouseFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: auctionHouseFactoryAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionHouseFactoryAbi}__ and `eventName` set to `"AuctionHouseCreated"`
 */
export const useWatchAuctionHouseFactoryAuctionHouseCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionHouseFactoryAbi,
    eventName: "AuctionHouseCreated",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionItemErc721Abi}__
 */
export const useReadAuctionItemErc721 = /*#__PURE__*/ createUseReadContract({
  abi: auctionItemErc721Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadAuctionItemErc721OwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionItemErc721Abi,
    functionName: "ownerOf",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadAuctionItemErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionItemErc721Abi,
    functionName: "supportsInterface",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadAuctionItemErc721Symbol =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionItemErc721Abi,
    functionName: "symbol",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadAuctionItemErc721TokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionItemErc721Abi,
    functionName: "tokenURI",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionItemErc721Abi}__
 */
export const useWriteAuctionItemErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: auctionItemErc721Abi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteAuctionItemErc721RenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionItemErc721Abi,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteAuctionItemErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionItemErc721Abi,
    functionName: "safeTransferFrom",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteAuctionItemErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionItemErc721Abi,
    functionName: "setApprovalForAll",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"setContractURI"`
 */
export const useWriteAuctionItemErc721SetContractUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionItemErc721Abi,
    functionName: "setContractURI",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"setTokenMetadata"`
 */
export const useWriteAuctionItemErc721SetTokenMetadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionItemErc721Abi,
    functionName: "setTokenMetadata",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteAuctionItemErc721TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionItemErc721Abi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteAuctionItemErc721TransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionItemErc721Abi,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionItemErc721Abi}__
 */
export const useSimulateAuctionItemErc721 =
  /*#__PURE__*/ createUseSimulateContract({ abi: auctionItemErc721Abi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateAuctionItemErc721RenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionItemErc721Abi,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateAuctionItemErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionItemErc721Abi,
    functionName: "safeTransferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateAuctionItemErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionItemErc721Abi,
    functionName: "setApprovalForAll",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"setContractURI"`
 */
export const useSimulateAuctionItemErc721SetContractUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionItemErc721Abi,
    functionName: "setContractURI",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"setTokenMetadata"`
 */
export const useSimulateAuctionItemErc721SetTokenMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionItemErc721Abi,
    functionName: "setTokenMetadata",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateAuctionItemErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionItemErc721Abi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionItemErc721Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateAuctionItemErc721TransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionItemErc721Abi,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionItemErc721FactoryAbi}__
 */
export const useReadAuctionItemErc721Factory =
  /*#__PURE__*/ createUseReadContract({ abi: auctionItemErc721FactoryAbi });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link auctionItemErc721FactoryAbi}__ and `functionName` set to `"owner"`
 */
export const useReadAuctionItemErc721FactoryOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: auctionItemErc721FactoryAbi,
    functionName: "owner",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionItemErc721FactoryAbi}__
 */
export const useWriteAuctionItemErc721Factory =
  /*#__PURE__*/ createUseWriteContract({ abi: auctionItemErc721FactoryAbi });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionItemErc721FactoryAbi}__ and `functionName` set to `"createAuctionItemERC721"`
 */
export const useWriteAuctionItemErc721FactoryCreateAuctionItemErc721 =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionItemErc721FactoryAbi,
    functionName: "createAuctionItemERC721",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionItemErc721FactoryAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteAuctionItemErc721FactoryRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionItemErc721FactoryAbi,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link auctionItemErc721FactoryAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteAuctionItemErc721FactoryTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: auctionItemErc721FactoryAbi,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionItemErc721FactoryAbi}__
 */
export const useSimulateAuctionItemErc721Factory =
  /*#__PURE__*/ createUseSimulateContract({ abi: auctionItemErc721FactoryAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionItemErc721FactoryAbi}__ and `functionName` set to `"createAuctionItemERC721"`
 */
export const useSimulateAuctionItemErc721FactoryCreateAuctionItemErc721 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionItemErc721FactoryAbi,
    functionName: "createAuctionItemERC721",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionItemErc721FactoryAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateAuctionItemErc721FactoryRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionItemErc721FactoryAbi,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link auctionItemErc721FactoryAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateAuctionItemErc721FactoryTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: auctionItemErc721FactoryAbi,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionItemErc721FactoryAbi}__
 */
export const useWatchAuctionItemErc721FactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionItemErc721FactoryAbi,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionItemErc721FactoryAbi}__ and `eventName` set to `"AuctionItemERC721Created"`
 */
export const useWatchAuctionItemErc721FactoryAuctionItemErc721CreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionItemErc721FactoryAbi,
    eventName: "AuctionItemERC721Created",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link auctionItemErc721FactoryAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchAuctionItemErc721FactoryOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: auctionItemErc721FactoryAbi,
    eventName: "OwnershipTransferred",
  });
