export const AuctionHouseABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_image",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_contractURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_customDeadline",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_auctionItemFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_escrowFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AuctionExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "AuctionHasntCompleted",
    type: "error",
  },
  {
    inputs: [],
    name: "AuctionHasntStarted",
    type: "error",
  },
  {
    inputs: [],
    name: "AuctionNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "AuctionStillActive",
    type: "error",
  },
  {
    inputs: [],
    name: "BidTooLow",
    type: "error",
  },
  {
    inputs: [],
    name: "BidsAlreadyPlaced",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotRescueToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotRescueWhileAuctionsActive",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientTokenAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPremiumPercentage",
    type: "error",
  },
  {
    inputs: [],
    name: "NFTNotHeldByContract",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAuctionOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NotWinner",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyOwnerCanRescue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "ReservePriceTooLow",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenInActiveAuction",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "auctionAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "affiliate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "firstBid",
        type: "bool",
      },
    ],
    name: "AuctionBid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "auctionAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "auctionOwner",
        type: "address",
      },
    ],
    name: "AuctionCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "auctionHouse",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "AuctionCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "auctionAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "auctionOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "affiliateFee",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "address",
        name: "arbiter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "escrowAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPremiumAuction",
        type: "bool",
      },
    ],
    name: "AuctionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "auctionAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encryptedData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "ephemeralPublicKey",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "iv",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "verificationHash",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isFinal",
        type: "bool",
      },
    ],
    name: "AuctionEncryptedMessage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "auctionAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "affiliate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "finalAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "affiliatePayout",
        type: "uint256",
      },
    ],
    name: "AuctionEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "auctionAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newEndTime",
        type: "uint256",
      },
    ],
    name: "AuctionExtended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "auctionHouse",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "image",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "AuctionHouseMetadataUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "auctionAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "affiliate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encryptedData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "ephemeralPublicKey",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "iv",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "verificationHash",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isFinal",
        type: "bool",
      },
    ],
    name: "BidCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ERC20Rescued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721Rescued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ETHRescued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NFTReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "auctionAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "outbidUser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newBidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "originalBid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "premiumAmount",
        type: "uint256",
      },
    ],
    name: "PremiumPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newDeadline",
        type: "uint256",
      },
    ],
    name: "SettlementDeadlineUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "activeAuctionsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctionEncryptedMessages",
    outputs: [
      {
        internalType: "bytes",
        name: "encryptedData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "ephemeralPublicKey",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "iv",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "verificationHash",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctionExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "auctionItemContract",
    outputs: [
      {
        internalType: "contract AuctionItemERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "auctionItemFactoryAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctions",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "highestBid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "affiliateFee",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "auctionOwner",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "bidder",
        type: "address",
      },
      {
        internalType: "address",
        name: "affiliate",
        type: "address",
      },
      {
        internalType: "address",
        name: "arbiter",
        type: "address",
      },
      {
        internalType: "address",
        name: "escrowAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "auctionCurrency",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "minBidIncrementBps",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "isPremiumAuction",
        type: "bool",
      },
      {
        internalType: "uint16",
        name: "premiumBps",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "timeExtension",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_auctionIds",
        type: "uint256[]",
      },
    ],
    name: "batchEndExpiredAuctions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "cancelAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reservePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_affiliateFee",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_arbiter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_escrowFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_auctionCurrency",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isPremiumAuction",
        type: "bool",
      },
      {
        internalType: "uint16",
        name: "_premiumBps",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_minBidIncrementBps",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "_timeExtension",
        type: "uint256",
      },
    ],
    name: "createAuction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "string",
            name: "termsOfService",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "supplementalImages",
            type: "string[]",
          },
        ],
        internalType: "struct AuctionHouse.NFTMetadata",
        name: "_metadata",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reservePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_affiliateFee",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_arbiterAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_escrowFactoryAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_auctionCurrency",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isPremiumAuction",
        type: "bool",
      },
      {
        internalType: "uint16",
        name: "_premiumRateBps",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_minBidIncrementBps",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "_timeExtension",
        type: "uint256",
      },
    ],
    name: "createAuctionWithNewNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_affiliate",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "encryptedData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "ephemeralPublicKey",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "iv",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "verificationHash",
            type: "bytes",
          },
        ],
        internalType: "struct IAuctionHouse.EncryptedMessage",
        name: "_encryptedMsg",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_bidAmount",
        type: "uint256",
      },
    ],
    name: "createBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_contractURI",
        type: "string",
      },
    ],
    name: "createNFTContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "endAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "escrowFactory",
    outputs: [
      {
        internalType: "contract AffiliateEscrowFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "highestBid",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reservePrice",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "affiliateFee",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "auctionOwner",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "bidder",
            type: "address",
          },
          {
            internalType: "address",
            name: "affiliate",
            type: "address",
          },
          {
            internalType: "address",
            name: "arbiter",
            type: "address",
          },
          {
            internalType: "address",
            name: "escrowAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "auctionCurrency",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "minBidIncrementBps",
            type: "uint16",
          },
          {
            internalType: "bool",
            name: "isPremiumAuction",
            type: "bool",
          },
          {
            internalType: "uint16",
            name: "premiumBps",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "timeExtension",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "paymentAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IAuctionHouse.Auction",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getMinimumBid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "houseName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "image",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "isAuctionActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "noActiveAuctions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "rescueERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "rescueERC721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "rescueETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "encryptedData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "ephemeralPublicKey",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "iv",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "verificationHash",
            type: "bytes",
          },
        ],
        internalType: "struct IAuctionHouse.EncryptedMessage",
        name: "_newMsg",
        type: "tuple",
      },
    ],
    name: "setWinningBidderEncryptedMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settlementDeadline",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenToAuctionId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_image",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    name: "updateAuctionHouseMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newDeadline",
        type: "uint256",
      },
    ],
    name: "updateSettlementDeadline",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
