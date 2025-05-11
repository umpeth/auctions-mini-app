export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigDecimal: { input: any; output: any };
  BigInt: { input: any; output: any };
  Bytes: { input: any; output: any };
  Int8: { input: any; output: any };
  Timestamp: { input: any; output: any };
};

export enum Aggregation_Interval {
  Day = "day",
  Hour = "hour",
}

export type ArbiterChange = {
  __typename?: "ArbiterChange";
  approved: Scalars["Boolean"]["output"];
  approver?: Maybe<Scalars["Bytes"]["output"]>;
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  escrow: OrderEscrow;
  id: Scalars["ID"]["output"];
  newArbiter?: Maybe<Scalars["Bytes"]["output"]>;
  oldArbiter: Scalars["Bytes"]["output"];
  proposedArbiter: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type ArbiterChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ArbiterChange_Filter>>>;
  approved?: InputMaybe<Scalars["Boolean"]["input"]>;
  approved_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  approved_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  approver?: InputMaybe<Scalars["Bytes"]["input"]>;
  approver_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  approver_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  approver_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  approver_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  approver_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  approver_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  approver_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  approver_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  approver_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  escrow?: InputMaybe<Scalars["String"]["input"]>;
  escrow_?: InputMaybe<OrderEscrow_Filter>;
  escrow_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_lt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_lte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  newArbiter?: InputMaybe<Scalars["Bytes"]["input"]>;
  newArbiter_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  newArbiter_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  newArbiter_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  newArbiter_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newArbiter_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  newArbiter_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  newArbiter_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  newArbiter_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  newArbiter_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  oldArbiter?: InputMaybe<Scalars["Bytes"]["input"]>;
  oldArbiter_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  oldArbiter_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  oldArbiter_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  oldArbiter_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  oldArbiter_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  oldArbiter_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  oldArbiter_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  oldArbiter_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  oldArbiter_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<ArbiterChange_Filter>>>;
  proposedArbiter?: InputMaybe<Scalars["Bytes"]["input"]>;
  proposedArbiter_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  proposedArbiter_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  proposedArbiter_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  proposedArbiter_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  proposedArbiter_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  proposedArbiter_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  proposedArbiter_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  proposedArbiter_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  proposedArbiter_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum ArbiterChange_OrderBy {
  Approved = "approved",
  Approver = "approver",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Escrow = "escrow",
  EscrowAffiliate = "escrow__affiliate",
  EscrowAffiliateShare = "escrow__affiliateShare",
  EscrowArbiter = "escrow__arbiter",
  EscrowBlockNumber = "escrow__blockNumber",
  EscrowBlockTimestamp = "escrow__blockTimestamp",
  EscrowEscrowAddress = "escrow__escrowAddress",
  EscrowId = "escrow__id",
  EscrowIsDisputed = "escrow__isDisputed",
  EscrowIsRefunded = "escrow__isRefunded",
  EscrowPayee = "escrow__payee",
  EscrowSourceAddress = "escrow__sourceAddress",
  EscrowSourceType = "escrow__sourceType",
  EscrowTransactionHash = "escrow__transactionHash",
  Id = "id",
  NewArbiter = "newArbiter",
  OldArbiter = "oldArbiter",
  ProposedArbiter = "proposedArbiter",
  TransactionHash = "transactionHash",
}

export type Auction = {
  __typename?: "Auction";
  affiliateFee: Scalars["Int"]["output"];
  arbiter: Scalars["Bytes"]["output"];
  auctionCurrency: Scalars["Bytes"]["output"];
  auctionHouse: AuctionHouse;
  auctionId: Scalars["BigInt"]["output"];
  auctionOwner: Scalars["Bytes"]["output"];
  bids: Array<Bid>;
  createdAt: Scalars["BigInt"]["output"];
  createdAtBlock: Scalars["BigInt"]["output"];
  creationTx: Scalars["Bytes"]["output"];
  currentAffiliate?: Maybe<Scalars["Bytes"]["output"]>;
  currentBidder?: Maybe<Scalars["Bytes"]["output"]>;
  currentWinningBid?: Maybe<Bid>;
  duration: Scalars["BigInt"]["output"];
  encryptedMessages: Array<EncryptedMessage>;
  endTime: Scalars["BigInt"]["output"];
  endedAt?: Maybe<Scalars["BigInt"]["output"]>;
  endedAtBlock?: Maybe<Scalars["BigInt"]["output"]>;
  endedTx?: Maybe<Scalars["Bytes"]["output"]>;
  escrow?: Maybe<OrderEscrow>;
  escrowAddress?: Maybe<Scalars["Bytes"]["output"]>;
  extensionCount: Scalars["Int"]["output"];
  highestBid: Scalars["BigInt"]["output"];
  highestBidAmount: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  isPremiumAuction: Scalars["Boolean"]["output"];
  lastUpdatedAt: Scalars["BigInt"]["output"];
  lastUpdatedTx: Scalars["Bytes"]["output"];
  minBidIncrementBps: Scalars["Int"]["output"];
  paymentAmount: Scalars["BigInt"]["output"];
  premiumBps: Scalars["Int"]["output"];
  premiumPayments: Array<PremiumPayment>;
  reservePrice: Scalars["BigInt"]["output"];
  startTime: Scalars["BigInt"]["output"];
  status: AuctionStatus;
  timeExtension: Scalars["BigInt"]["output"];
  tokenContract: Scalars["Bytes"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  tokenMetadata?: Maybe<AuctionItemErc721Metadata>;
  tokenReference?: Maybe<AuctionItemErc721Token>;
  totalBidCount: Scalars["Int"]["output"];
  totalPremiumPaid: Scalars["BigInt"]["output"];
  wasExtended: Scalars["Boolean"]["output"];
};

export type AuctionBidsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Bid_Filter>;
};

export type AuctionEncryptedMessagesArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EncryptedMessage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EncryptedMessage_Filter>;
};

export type AuctionPremiumPaymentsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PremiumPayment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PremiumPayment_Filter>;
};

export type AuctionHouse = {
  __typename?: "AuctionHouse";
  auctionHouseAddress: Scalars["Bytes"]["output"];
  auctions: Array<Auction>;
  createdAt: Scalars["BigInt"]["output"];
  createdAtBlock: Scalars["BigInt"]["output"];
  creationTx: Scalars["Bytes"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["Bytes"]["output"];
  image: Scalars["String"]["output"];
  lastUpdatedAt?: Maybe<Scalars["BigInt"]["output"]>;
  lastUpdatedTx?: Maybe<Scalars["Bytes"]["output"]>;
  name: Scalars["String"]["output"];
  owner: Scalars["Bytes"]["output"];
  settlementDeadline: Scalars["BigInt"]["output"];
  version: Scalars["String"]["output"];
};

export type AuctionHouseAuctionsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Auction_Filter>;
};

export type AuctionHouse_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuctionHouse_Filter>>>;
  auctionHouseAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouseAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouseAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouseAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouseAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionHouseAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouseAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouseAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouseAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouseAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctions_?: InputMaybe<Auction_Filter>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAtBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  creationTx?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  creationTx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  description_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_gt?: InputMaybe<Scalars["String"]["input"]>;
  description_gte?: InputMaybe<Scalars["String"]["input"]>;
  description_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_lt?: InputMaybe<Scalars["String"]["input"]>;
  description_lte?: InputMaybe<Scalars["String"]["input"]>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  description_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  description_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  description_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  image_contains?: InputMaybe<Scalars["String"]["input"]>;
  image_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  image_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_gt?: InputMaybe<Scalars["String"]["input"]>;
  image_gte?: InputMaybe<Scalars["String"]["input"]>;
  image_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  image_lt?: InputMaybe<Scalars["String"]["input"]>;
  image_lte?: InputMaybe<Scalars["String"]["input"]>;
  image_not?: InputMaybe<Scalars["String"]["input"]>;
  image_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  image_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  image_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  image_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  image_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  image_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedTx?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lastUpdatedTx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<AuctionHouse_Filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  settlementDeadline?: InputMaybe<Scalars["BigInt"]["input"]>;
  settlementDeadline_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  settlementDeadline_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  settlementDeadline_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  settlementDeadline_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  settlementDeadline_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  settlementDeadline_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  settlementDeadline_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  version?: InputMaybe<Scalars["String"]["input"]>;
  version_contains?: InputMaybe<Scalars["String"]["input"]>;
  version_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  version_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  version_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  version_gt?: InputMaybe<Scalars["String"]["input"]>;
  version_gte?: InputMaybe<Scalars["String"]["input"]>;
  version_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  version_lt?: InputMaybe<Scalars["String"]["input"]>;
  version_lte?: InputMaybe<Scalars["String"]["input"]>;
  version_not?: InputMaybe<Scalars["String"]["input"]>;
  version_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  version_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  version_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  version_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  version_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  version_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  version_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  version_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  version_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum AuctionHouse_OrderBy {
  AuctionHouseAddress = "auctionHouseAddress",
  Auctions = "auctions",
  CreatedAt = "createdAt",
  CreatedAtBlock = "createdAtBlock",
  CreationTx = "creationTx",
  Description = "description",
  Id = "id",
  Image = "image",
  LastUpdatedAt = "lastUpdatedAt",
  LastUpdatedTx = "lastUpdatedTx",
  Name = "name",
  Owner = "owner",
  SettlementDeadline = "settlementDeadline",
  Version = "version",
}

export type AuctionItemErc721 = {
  __typename?: "AuctionItemERC721";
  contractURI?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["BigInt"]["output"];
  createdAtBlock: Scalars["BigInt"]["output"];
  creationTx: Scalars["Bytes"]["output"];
  id: Scalars["Bytes"]["output"];
  lastUpdatedAt?: Maybe<Scalars["BigInt"]["output"]>;
  lastUpdatedTx?: Maybe<Scalars["Bytes"]["output"]>;
  name: Scalars["String"]["output"];
  owner: Scalars["Bytes"]["output"];
  symbol: Scalars["String"]["output"];
  tokenAddress: Scalars["Bytes"]["output"];
  tokens: Array<AuctionItemErc721Token>;
};

export type AuctionItemErc721TokensArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuctionItemErc721Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AuctionItemErc721Token_Filter>;
};

export type AuctionItemErc721Metadata = {
  __typename?: "AuctionItemERC721Metadata";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  rawJson: Scalars["String"]["output"];
  supplementalImages?: Maybe<Array<Scalars["String"]["output"]>>;
  termsOfService?: Maybe<Scalars["String"]["output"]>;
};

export type AuctionItemErc721Metadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuctionItemErc721Metadata_Filter>>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  description_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_gt?: InputMaybe<Scalars["String"]["input"]>;
  description_gte?: InputMaybe<Scalars["String"]["input"]>;
  description_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_lt?: InputMaybe<Scalars["String"]["input"]>;
  description_lte?: InputMaybe<Scalars["String"]["input"]>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  description_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  description_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  description_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  image_contains?: InputMaybe<Scalars["String"]["input"]>;
  image_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  image_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_gt?: InputMaybe<Scalars["String"]["input"]>;
  image_gte?: InputMaybe<Scalars["String"]["input"]>;
  image_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  image_lt?: InputMaybe<Scalars["String"]["input"]>;
  image_lte?: InputMaybe<Scalars["String"]["input"]>;
  image_not?: InputMaybe<Scalars["String"]["input"]>;
  image_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  image_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  image_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  image_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  image_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  image_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<AuctionItemErc721Metadata_Filter>>>;
  rawJson?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_contains?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_gt?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_gte?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rawJson_lt?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_lte?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rawJson_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  supplementalImages?: InputMaybe<Array<Scalars["String"]["input"]>>;
  supplementalImages_contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
  supplementalImages_contains_nocase?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  supplementalImages_not?: InputMaybe<Array<Scalars["String"]["input"]>>;
  supplementalImages_not_contains?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  supplementalImages_not_contains_nocase?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  termsOfService?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_contains?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_gt?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_gte?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  termsOfService_lt?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_lte?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_not?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  termsOfService_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  termsOfService_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  termsOfService_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum AuctionItemErc721Metadata_OrderBy {
  Description = "description",
  Id = "id",
  Image = "image",
  Name = "name",
  RawJson = "rawJson",
  SupplementalImages = "supplementalImages",
  TermsOfService = "termsOfService",
}

export type AuctionItemErc721Token = {
  __typename?: "AuctionItemERC721Token";
  auctions: Array<Auction>;
  contract: AuctionItemErc721;
  createdAt: Scalars["BigInt"]["output"];
  createdAtBlock: Scalars["BigInt"]["output"];
  creationTx: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  lastTransferredAt?: Maybe<Scalars["BigInt"]["output"]>;
  lastTransferredTx?: Maybe<Scalars["Bytes"]["output"]>;
  metadata?: Maybe<AuctionItemErc721Metadata>;
  owner: Scalars["Bytes"]["output"];
  tokenId: Scalars["BigInt"]["output"];
};

export type AuctionItemErc721TokenAuctionsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Auction_Filter>;
};

export type AuctionItemErc721Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuctionItemErc721Token_Filter>>>;
  auctions_?: InputMaybe<Auction_Filter>;
  contract?: InputMaybe<Scalars["String"]["input"]>;
  contract_?: InputMaybe<AuctionItemErc721_Filter>;
  contract_contains?: InputMaybe<Scalars["String"]["input"]>;
  contract_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contract_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contract_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contract_gt?: InputMaybe<Scalars["String"]["input"]>;
  contract_gte?: InputMaybe<Scalars["String"]["input"]>;
  contract_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contract_lt?: InputMaybe<Scalars["String"]["input"]>;
  contract_lte?: InputMaybe<Scalars["String"]["input"]>;
  contract_not?: InputMaybe<Scalars["String"]["input"]>;
  contract_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contract_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contract_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contract_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contract_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contract_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contract_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAtBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  creationTx?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  creationTx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  lastTransferredAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastTransferredAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastTransferredAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastTransferredAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastTransferredAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastTransferredAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastTransferredAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastTransferredAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastTransferredTx?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastTransferredTx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastTransferredTx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastTransferredTx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastTransferredTx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lastTransferredTx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastTransferredTx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastTransferredTx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastTransferredTx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastTransferredTx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  metadata?: InputMaybe<Scalars["String"]["input"]>;
  metadata_?: InputMaybe<AuctionItemErc721Metadata_Filter>;
  metadata_contains?: InputMaybe<Scalars["String"]["input"]>;
  metadata_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metadata_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  metadata_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metadata_gt?: InputMaybe<Scalars["String"]["input"]>;
  metadata_gte?: InputMaybe<Scalars["String"]["input"]>;
  metadata_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  metadata_lt?: InputMaybe<Scalars["String"]["input"]>;
  metadata_lte?: InputMaybe<Scalars["String"]["input"]>;
  metadata_not?: InputMaybe<Scalars["String"]["input"]>;
  metadata_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  metadata_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metadata_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metadata_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  metadata_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metadata_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  metadata_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<AuctionItemErc721Token_Filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum AuctionItemErc721Token_OrderBy {
  Auctions = "auctions",
  Contract = "contract",
  ContractContractUri = "contract__contractURI",
  ContractCreatedAt = "contract__createdAt",
  ContractCreatedAtBlock = "contract__createdAtBlock",
  ContractCreationTx = "contract__creationTx",
  ContractId = "contract__id",
  ContractLastUpdatedAt = "contract__lastUpdatedAt",
  ContractLastUpdatedTx = "contract__lastUpdatedTx",
  ContractName = "contract__name",
  ContractOwner = "contract__owner",
  ContractSymbol = "contract__symbol",
  ContractTokenAddress = "contract__tokenAddress",
  CreatedAt = "createdAt",
  CreatedAtBlock = "createdAtBlock",
  CreationTx = "creationTx",
  Id = "id",
  LastTransferredAt = "lastTransferredAt",
  LastTransferredTx = "lastTransferredTx",
  Metadata = "metadata",
  MetadataDescription = "metadata__description",
  MetadataId = "metadata__id",
  MetadataImage = "metadata__image",
  MetadataName = "metadata__name",
  MetadataRawJson = "metadata__rawJson",
  MetadataTermsOfService = "metadata__termsOfService",
  Owner = "owner",
  TokenId = "tokenId",
}

export type AuctionItemErc721_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuctionItemErc721_Filter>>>;
  contractURI?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractURI_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAtBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  creationTx?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  creationTx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lastUpdatedAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedTx?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lastUpdatedTx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<AuctionItemErc721_Filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  symbol?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_lte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokens_?: InputMaybe<AuctionItemErc721Token_Filter>;
};

export enum AuctionItemErc721_OrderBy {
  ContractUri = "contractURI",
  CreatedAt = "createdAt",
  CreatedAtBlock = "createdAtBlock",
  CreationTx = "creationTx",
  Id = "id",
  LastUpdatedAt = "lastUpdatedAt",
  LastUpdatedTx = "lastUpdatedTx",
  Name = "name",
  Owner = "owner",
  Symbol = "symbol",
  TokenAddress = "tokenAddress",
  Tokens = "tokens",
}

export enum AuctionStatus {
  Active = "ACTIVE",
  Cancelled = "CANCELLED",
  Completed = "COMPLETED",
  Created = "CREATED",
}

export type Auction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  affiliateFee?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_gt?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_gte?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  affiliateFee_lt?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_lte?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_not?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Auction_Filter>>>;
  arbiter?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  arbiter_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionCurrency?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionCurrency_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionCurrency_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionCurrency_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionCurrency_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionCurrency_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionCurrency_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionCurrency_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionCurrency_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionCurrency_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionHouse?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_?: InputMaybe<AuctionHouse_Filter>;
  auctionHouse_contains?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_gt?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_gte?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auctionHouse_lt?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_lte?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_not?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auctionHouse_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auctionHouse_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionId?: InputMaybe<Scalars["BigInt"]["input"]>;
  auctionId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auctionId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auctionId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auctionId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auctionId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auctionId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  auctionId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auctionOwner?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionOwner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionOwner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionOwner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionOwner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionOwner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionOwner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionOwner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionOwner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  bids_?: InputMaybe<Bid_Filter>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAtBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  creationTx?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  creationTx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  currentAffiliate?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentAffiliate_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentAffiliate_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentAffiliate_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentAffiliate_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  currentAffiliate_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentAffiliate_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentAffiliate_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentAffiliate_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentAffiliate_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  currentBidder?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentBidder_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentBidder_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentBidder_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentBidder_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  currentBidder_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentBidder_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentBidder_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentBidder_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  currentBidder_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  currentWinningBid?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_?: InputMaybe<Bid_Filter>;
  currentWinningBid_contains?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_gt?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_gte?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  currentWinningBid_lt?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_lte?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_not?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  currentWinningBid_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  currentWinningBid_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  currentWinningBid_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  currentWinningBid_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  currentWinningBid_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  duration?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  duration_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  encryptedMessages_?: InputMaybe<EncryptedMessage_Filter>;
  endTime?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTime_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTime_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTime_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endTime_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTime_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTime_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTime_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endedAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endedAtBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  endedAtBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endedAtBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endedAtBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endedAtBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endedAtBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endedAtBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  endedAtBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endedAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endedAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endedAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endedAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endedAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endedAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  endedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endedTx?: InputMaybe<Scalars["Bytes"]["input"]>;
  endedTx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  endedTx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  endedTx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  endedTx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  endedTx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  endedTx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  endedTx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  endedTx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  endedTx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  escrow?: InputMaybe<Scalars["String"]["input"]>;
  escrowAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  escrowAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  escrow_?: InputMaybe<OrderEscrow_Filter>;
  escrow_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_lt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_lte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  extensionCount?: InputMaybe<Scalars["Int"]["input"]>;
  extensionCount_gt?: InputMaybe<Scalars["Int"]["input"]>;
  extensionCount_gte?: InputMaybe<Scalars["Int"]["input"]>;
  extensionCount_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  extensionCount_lt?: InputMaybe<Scalars["Int"]["input"]>;
  extensionCount_lte?: InputMaybe<Scalars["Int"]["input"]>;
  extensionCount_not?: InputMaybe<Scalars["Int"]["input"]>;
  extensionCount_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  highestBid?: InputMaybe<Scalars["BigInt"]["input"]>;
  highestBidAmount?: InputMaybe<Scalars["BigInt"]["input"]>;
  highestBidAmount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  highestBidAmount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  highestBidAmount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  highestBidAmount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  highestBidAmount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  highestBidAmount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  highestBidAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  highestBid_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  highestBid_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  highestBid_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  highestBid_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  highestBid_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  highestBid_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  highestBid_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  isPremiumAuction?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPremiumAuction_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isPremiumAuction_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPremiumAuction_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  lastUpdatedAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedTx?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lastUpdatedTx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  minBidIncrementBps?: InputMaybe<Scalars["Int"]["input"]>;
  minBidIncrementBps_gt?: InputMaybe<Scalars["Int"]["input"]>;
  minBidIncrementBps_gte?: InputMaybe<Scalars["Int"]["input"]>;
  minBidIncrementBps_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  minBidIncrementBps_lt?: InputMaybe<Scalars["Int"]["input"]>;
  minBidIncrementBps_lte?: InputMaybe<Scalars["Int"]["input"]>;
  minBidIncrementBps_not?: InputMaybe<Scalars["Int"]["input"]>;
  minBidIncrementBps_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Auction_Filter>>>;
  paymentAmount?: InputMaybe<Scalars["BigInt"]["input"]>;
  paymentAmount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  paymentAmount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  paymentAmount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  paymentAmount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  paymentAmount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  paymentAmount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  paymentAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  premiumBps?: InputMaybe<Scalars["Int"]["input"]>;
  premiumBps_gt?: InputMaybe<Scalars["Int"]["input"]>;
  premiumBps_gte?: InputMaybe<Scalars["Int"]["input"]>;
  premiumBps_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  premiumBps_lt?: InputMaybe<Scalars["Int"]["input"]>;
  premiumBps_lte?: InputMaybe<Scalars["Int"]["input"]>;
  premiumBps_not?: InputMaybe<Scalars["Int"]["input"]>;
  premiumBps_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  premiumPayments_?: InputMaybe<PremiumPayment_Filter>;
  reservePrice?: InputMaybe<Scalars["BigInt"]["input"]>;
  reservePrice_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  reservePrice_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  reservePrice_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  reservePrice_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  reservePrice_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  reservePrice_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  reservePrice_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startTime?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTime_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTime_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTime_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startTime_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTime_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTime_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTime_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  status?: InputMaybe<AuctionStatus>;
  status_in?: InputMaybe<Array<AuctionStatus>>;
  status_not?: InputMaybe<AuctionStatus>;
  status_not_in?: InputMaybe<Array<AuctionStatus>>;
  timeExtension?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeExtension_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeExtension_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeExtension_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timeExtension_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeExtension_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeExtension_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeExtension_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenContract?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenContract_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenContract_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenContract_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenContract_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenContract_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenContract_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenContract_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenContract_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenContract_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenMetadata?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_?: InputMaybe<AuctionItemErc721Metadata_Filter>;
  tokenMetadata_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenMetadata_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenMetadata_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_?: InputMaybe<AuctionItemErc721Token_Filter>;
  tokenReference_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenReference_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenReference_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  tokenReference_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenReference_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  totalBidCount?: InputMaybe<Scalars["Int"]["input"]>;
  totalBidCount_gt?: InputMaybe<Scalars["Int"]["input"]>;
  totalBidCount_gte?: InputMaybe<Scalars["Int"]["input"]>;
  totalBidCount_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  totalBidCount_lt?: InputMaybe<Scalars["Int"]["input"]>;
  totalBidCount_lte?: InputMaybe<Scalars["Int"]["input"]>;
  totalBidCount_not?: InputMaybe<Scalars["Int"]["input"]>;
  totalBidCount_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  totalPremiumPaid?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPremiumPaid_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPremiumPaid_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPremiumPaid_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalPremiumPaid_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPremiumPaid_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPremiumPaid_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPremiumPaid_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  wasExtended?: InputMaybe<Scalars["Boolean"]["input"]>;
  wasExtended_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  wasExtended_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  wasExtended_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

export enum Auction_OrderBy {
  AffiliateFee = "affiliateFee",
  Arbiter = "arbiter",
  AuctionCurrency = "auctionCurrency",
  AuctionHouse = "auctionHouse",
  AuctionHouseAuctionHouseAddress = "auctionHouse__auctionHouseAddress",
  AuctionHouseCreatedAt = "auctionHouse__createdAt",
  AuctionHouseCreatedAtBlock = "auctionHouse__createdAtBlock",
  AuctionHouseCreationTx = "auctionHouse__creationTx",
  AuctionHouseDescription = "auctionHouse__description",
  AuctionHouseId = "auctionHouse__id",
  AuctionHouseImage = "auctionHouse__image",
  AuctionHouseLastUpdatedAt = "auctionHouse__lastUpdatedAt",
  AuctionHouseLastUpdatedTx = "auctionHouse__lastUpdatedTx",
  AuctionHouseName = "auctionHouse__name",
  AuctionHouseOwner = "auctionHouse__owner",
  AuctionHouseSettlementDeadline = "auctionHouse__settlementDeadline",
  AuctionHouseVersion = "auctionHouse__version",
  AuctionId = "auctionId",
  AuctionOwner = "auctionOwner",
  Bids = "bids",
  CreatedAt = "createdAt",
  CreatedAtBlock = "createdAtBlock",
  CreationTx = "creationTx",
  CurrentAffiliate = "currentAffiliate",
  CurrentBidder = "currentBidder",
  CurrentWinningBid = "currentWinningBid",
  CurrentWinningBidAffiliate = "currentWinningBid__affiliate",
  CurrentWinningBidAmount = "currentWinningBid__amount",
  CurrentWinningBidBidder = "currentWinningBid__bidder",
  CurrentWinningBidBlockNumber = "currentWinningBid__blockNumber",
  CurrentWinningBidId = "currentWinningBid__id",
  CurrentWinningBidIsWinningBid = "currentWinningBid__isWinningBid",
  CurrentWinningBidTimestamp = "currentWinningBid__timestamp",
  CurrentWinningBidTransactionHash = "currentWinningBid__transactionHash",
  Duration = "duration",
  EncryptedMessages = "encryptedMessages",
  EndTime = "endTime",
  EndedAt = "endedAt",
  EndedAtBlock = "endedAtBlock",
  EndedTx = "endedTx",
  Escrow = "escrow",
  EscrowAddress = "escrowAddress",
  EscrowAffiliate = "escrow__affiliate",
  EscrowAffiliateShare = "escrow__affiliateShare",
  EscrowArbiter = "escrow__arbiter",
  EscrowBlockNumber = "escrow__blockNumber",
  EscrowBlockTimestamp = "escrow__blockTimestamp",
  EscrowEscrowAddress = "escrow__escrowAddress",
  EscrowId = "escrow__id",
  EscrowIsDisputed = "escrow__isDisputed",
  EscrowIsRefunded = "escrow__isRefunded",
  EscrowPayee = "escrow__payee",
  EscrowSourceAddress = "escrow__sourceAddress",
  EscrowSourceType = "escrow__sourceType",
  EscrowTransactionHash = "escrow__transactionHash",
  ExtensionCount = "extensionCount",
  HighestBid = "highestBid",
  HighestBidAmount = "highestBidAmount",
  Id = "id",
  IsPremiumAuction = "isPremiumAuction",
  LastUpdatedAt = "lastUpdatedAt",
  LastUpdatedTx = "lastUpdatedTx",
  MinBidIncrementBps = "minBidIncrementBps",
  PaymentAmount = "paymentAmount",
  PremiumBps = "premiumBps",
  PremiumPayments = "premiumPayments",
  ReservePrice = "reservePrice",
  StartTime = "startTime",
  Status = "status",
  TimeExtension = "timeExtension",
  TokenContract = "tokenContract",
  TokenId = "tokenId",
  TokenMetadata = "tokenMetadata",
  TokenMetadataDescription = "tokenMetadata__description",
  TokenMetadataId = "tokenMetadata__id",
  TokenMetadataImage = "tokenMetadata__image",
  TokenMetadataName = "tokenMetadata__name",
  TokenMetadataRawJson = "tokenMetadata__rawJson",
  TokenMetadataTermsOfService = "tokenMetadata__termsOfService",
  TokenReference = "tokenReference",
  TokenReferenceCreatedAt = "tokenReference__createdAt",
  TokenReferenceCreatedAtBlock = "tokenReference__createdAtBlock",
  TokenReferenceCreationTx = "tokenReference__creationTx",
  TokenReferenceId = "tokenReference__id",
  TokenReferenceLastTransferredAt = "tokenReference__lastTransferredAt",
  TokenReferenceLastTransferredTx = "tokenReference__lastTransferredTx",
  TokenReferenceOwner = "tokenReference__owner",
  TokenReferenceTokenId = "tokenReference__tokenId",
  TotalBidCount = "totalBidCount",
  TotalPremiumPaid = "totalPremiumPaid",
  WasExtended = "wasExtended",
}

export type Bid = {
  __typename?: "Bid";
  affiliate?: Maybe<Scalars["Bytes"]["output"]>;
  amount: Scalars["BigInt"]["output"];
  auction: Auction;
  bidder: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  encryptedMessage?: Maybe<EncryptedMessage>;
  id: Scalars["ID"]["output"];
  isWinningBid: Scalars["Boolean"]["output"];
  timestamp: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type Bid_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  affiliate?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  affiliate_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Bid_Filter>>>;
  auction?: InputMaybe<Scalars["String"]["input"]>;
  auction_?: InputMaybe<Auction_Filter>;
  auction_contains?: InputMaybe<Scalars["String"]["input"]>;
  auction_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_gt?: InputMaybe<Scalars["String"]["input"]>;
  auction_gte?: InputMaybe<Scalars["String"]["input"]>;
  auction_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auction_lt?: InputMaybe<Scalars["String"]["input"]>;
  auction_lte?: InputMaybe<Scalars["String"]["input"]>;
  auction_not?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auction_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bidder?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  bidder_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  encryptedMessage?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_?: InputMaybe<EncryptedMessage_Filter>;
  encryptedMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_gt?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_gte?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  encryptedMessage_lt?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_lte?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_not?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  encryptedMessage_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  encryptedMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  encryptedMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMessage_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  isWinningBid?: InputMaybe<Scalars["Boolean"]["input"]>;
  isWinningBid_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isWinningBid_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isWinningBid_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Bid_Filter>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum Bid_OrderBy {
  Affiliate = "affiliate",
  Amount = "amount",
  Auction = "auction",
  AuctionAffiliateFee = "auction__affiliateFee",
  AuctionArbiter = "auction__arbiter",
  AuctionAuctionCurrency = "auction__auctionCurrency",
  AuctionAuctionId = "auction__auctionId",
  AuctionAuctionOwner = "auction__auctionOwner",
  AuctionCreatedAt = "auction__createdAt",
  AuctionCreatedAtBlock = "auction__createdAtBlock",
  AuctionCreationTx = "auction__creationTx",
  AuctionCurrentAffiliate = "auction__currentAffiliate",
  AuctionCurrentBidder = "auction__currentBidder",
  AuctionDuration = "auction__duration",
  AuctionEndTime = "auction__endTime",
  AuctionEndedAt = "auction__endedAt",
  AuctionEndedAtBlock = "auction__endedAtBlock",
  AuctionEndedTx = "auction__endedTx",
  AuctionEscrowAddress = "auction__escrowAddress",
  AuctionExtensionCount = "auction__extensionCount",
  AuctionHighestBid = "auction__highestBid",
  AuctionHighestBidAmount = "auction__highestBidAmount",
  AuctionId = "auction__id",
  AuctionIsPremiumAuction = "auction__isPremiumAuction",
  AuctionLastUpdatedAt = "auction__lastUpdatedAt",
  AuctionLastUpdatedTx = "auction__lastUpdatedTx",
  AuctionMinBidIncrementBps = "auction__minBidIncrementBps",
  AuctionPaymentAmount = "auction__paymentAmount",
  AuctionPremiumBps = "auction__premiumBps",
  AuctionReservePrice = "auction__reservePrice",
  AuctionStartTime = "auction__startTime",
  AuctionStatus = "auction__status",
  AuctionTimeExtension = "auction__timeExtension",
  AuctionTokenContract = "auction__tokenContract",
  AuctionTokenId = "auction__tokenId",
  AuctionTotalBidCount = "auction__totalBidCount",
  AuctionTotalPremiumPaid = "auction__totalPremiumPaid",
  AuctionWasExtended = "auction__wasExtended",
  Bidder = "bidder",
  BlockNumber = "blockNumber",
  EncryptedMessage = "encryptedMessage",
  EncryptedMessageBidder = "encryptedMessage__bidder",
  EncryptedMessageBlockNumber = "encryptedMessage__blockNumber",
  EncryptedMessageEncryptedData = "encryptedMessage__encryptedData",
  EncryptedMessageEphemeralPublicKey = "encryptedMessage__ephemeralPublicKey",
  EncryptedMessageId = "encryptedMessage__id",
  EncryptedMessageIsFinal = "encryptedMessage__isFinal",
  EncryptedMessageIv = "encryptedMessage__iv",
  EncryptedMessageTimestamp = "encryptedMessage__timestamp",
  EncryptedMessageTransactionHash = "encryptedMessage__transactionHash",
  EncryptedMessageVerificationHash = "encryptedMessage__verificationHash",
  Id = "id",
  IsWinningBid = "isWinningBid",
  Timestamp = "timestamp",
  TransactionHash = "transactionHash",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"]["input"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ConsiderationItem = {
  __typename?: "ConsiderationItem";
  amount: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  identifier: Scalars["BigInt"]["output"];
  itemType: Scalars["BigInt"]["output"];
  orderFulfilled: OrderFulfilled;
  recipient: Scalars["Bytes"]["output"];
  token: Scalars["Bytes"]["output"];
};

export type ConsiderationItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<ConsiderationItem_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  identifier?: InputMaybe<Scalars["BigInt"]["input"]>;
  identifier_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  identifier_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  identifier_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  identifier_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  identifier_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  identifier_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  identifier_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  itemType?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemType_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemType_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemType_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  itemType_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemType_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemType_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemType_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<ConsiderationItem_Filter>>>;
  orderFulfilled?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_?: InputMaybe<OrderFulfilled_Filter>;
  orderFulfilled_contains?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_gt?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_gte?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  orderFulfilled_lt?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_lte?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  orderFulfilled_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  orderFulfilled_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  recipient?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  recipient_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  token?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  token_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum ConsiderationItem_OrderBy {
  Amount = "amount",
  Id = "id",
  Identifier = "identifier",
  ItemType = "itemType",
  OrderFulfilled = "orderFulfilled",
  OrderFulfilledAffiliate = "orderFulfilled__affiliate",
  OrderFulfilledAffiliateShare = "orderFulfilled__affiliateShare",
  OrderFulfilledBlockNumber = "orderFulfilled__blockNumber",
  OrderFulfilledBlockTimestamp = "orderFulfilled__blockTimestamp",
  OrderFulfilledEncryptedData = "orderFulfilled__encryptedData",
  OrderFulfilledEphemeralPublicKey = "orderFulfilled__ephemeralPublicKey",
  OrderFulfilledErc1155ContractUri = "orderFulfilled__erc1155ContractURI",
  OrderFulfilledErc1155TokenUri = "orderFulfilled__erc1155TokenURI",
  OrderFulfilledId = "orderFulfilled__id",
  OrderFulfilledIv = "orderFulfilled__iv",
  OrderFulfilledOfferer = "orderFulfilled__offerer",
  OrderFulfilledOrderHash = "orderFulfilled__orderHash",
  OrderFulfilledRecipient = "orderFulfilled__recipient",
  OrderFulfilledTransactionHash = "orderFulfilled__transactionHash",
  OrderFulfilledVerificationHash = "orderFulfilled__verificationHash",
  OrderFulfilledZone = "orderFulfilled__zone",
  Recipient = "recipient",
  Token = "token",
}

export type CurationListing = {
  __typename?: "CurationListing";
  active: Scalars["Boolean"]["output"];
  affiliateFee?: Maybe<Scalars["Int"]["output"]>;
  contractMetadata?: Maybe<Erc1155ContractMetadata>;
  contractURI?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["BigInt"]["output"];
  createdTxHash: Scalars["Bytes"]["output"];
  curation: CurationStorefront;
  erc1155Token?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  lastUpdatedAt?: Maybe<Scalars["BigInt"]["output"]>;
  lastUpdatedTxHash?: Maybe<Scalars["Bytes"]["output"]>;
  listingId: Scalars["BigInt"]["output"];
  paymentToken?: Maybe<Scalars["Bytes"]["output"]>;
  price?: Maybe<Scalars["BigInt"]["output"]>;
  storefront: Scalars["Bytes"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  tokenMetadata?: Maybe<Erc1155TokenMetadata>;
  tokenURI?: Maybe<Scalars["String"]["output"]>;
};

export type CurationListing_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  active_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  active_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  active_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  affiliateFee?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_gt?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_gte?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  affiliateFee_lt?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_lte?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_not?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<CurationListing_Filter>>>;
  contractMetadata?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_?: InputMaybe<Erc1155ContractMetadata_Filter>;
  contractMetadata_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_gt?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_gte?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractMetadata_lt?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_lte?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  contractMetadata_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractMetadata_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  contractMetadata_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractURI_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdTxHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  createdTxHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  curation?: InputMaybe<Scalars["String"]["input"]>;
  curation_?: InputMaybe<CurationStorefront_Filter>;
  curation_contains?: InputMaybe<Scalars["String"]["input"]>;
  curation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  curation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_gt?: InputMaybe<Scalars["String"]["input"]>;
  curation_gte?: InputMaybe<Scalars["String"]["input"]>;
  curation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  curation_lt?: InputMaybe<Scalars["String"]["input"]>;
  curation_lte?: InputMaybe<Scalars["String"]["input"]>;
  curation_not?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  curation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  curation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  erc1155Token?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  erc1155Token_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  lastUpdatedAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedTxHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTxHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTxHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTxHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTxHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lastUpdatedTxHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTxHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTxHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTxHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTxHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  listingId?: InputMaybe<Scalars["BigInt"]["input"]>;
  listingId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  listingId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  listingId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  listingId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  listingId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  listingId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  listingId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<CurationListing_Filter>>>;
  paymentToken?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  paymentToken_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  price?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  price_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  storefront?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  storefront_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenMetadata?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_?: InputMaybe<Erc1155TokenMetadata_Filter>;
  tokenMetadata_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenMetadata_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenMetadata_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenURI_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum CurationListing_OrderBy {
  Active = "active",
  AffiliateFee = "affiliateFee",
  ContractMetadata = "contractMetadata",
  ContractMetadataDescription = "contractMetadata__description",
  ContractMetadataExternalLink = "contractMetadata__externalLink",
  ContractMetadataId = "contractMetadata__id",
  ContractMetadataImage = "contractMetadata__image",
  ContractMetadataName = "contractMetadata__name",
  ContractMetadataRawJson = "contractMetadata__rawJson",
  ContractUri = "contractURI",
  CreatedAt = "createdAt",
  CreatedTxHash = "createdTxHash",
  Curation = "curation",
  CurationCreatedAt = "curation__createdAt",
  CurationCreatedTxHash = "curation__createdTxHash",
  CurationDescription = "curation__description",
  CurationId = "curation__id",
  CurationName = "curation__name",
  CurationOwner = "curation__owner",
  CurationPaymentAddress = "curation__paymentAddress",
  CurationTokenUri = "curation__tokenURI",
  Erc1155Token = "erc1155Token",
  Id = "id",
  LastUpdatedAt = "lastUpdatedAt",
  LastUpdatedTxHash = "lastUpdatedTxHash",
  ListingId = "listingId",
  PaymentToken = "paymentToken",
  Price = "price",
  Storefront = "storefront",
  TokenId = "tokenId",
  TokenMetadata = "tokenMetadata",
  TokenMetadataId = "tokenMetadata__id",
  TokenMetadataRawEncodedJson = "tokenMetadata__rawEncodedJson",
  TokenMetadataRawJson = "tokenMetadata__rawJson",
  TokenUri = "tokenURI",
}

export type CurationStorefront = {
  __typename?: "CurationStorefront";
  activeCurators: Array<Curator>;
  createdAt: Scalars["BigInt"]["output"];
  createdTxHash: Scalars["Bytes"]["output"];
  curatorHistory: Array<CuratorAction>;
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  listings: Array<CurationListing>;
  name: Scalars["String"]["output"];
  owner: Scalars["Bytes"]["output"];
  paymentAddress: Scalars["Bytes"]["output"];
  tokenURI?: Maybe<Scalars["String"]["output"]>;
};

export type CurationStorefrontActiveCuratorsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Curator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Curator_Filter>;
};

export type CurationStorefrontCuratorHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CuratorAction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CuratorAction_Filter>;
};

export type CurationStorefrontListingsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CurationListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CurationListing_Filter>;
};

export type CurationStorefront_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeCurators_?: InputMaybe<Curator_Filter>;
  and?: InputMaybe<Array<InputMaybe<CurationStorefront_Filter>>>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdTxHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  createdTxHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTxHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  curatorHistory_?: InputMaybe<CuratorAction_Filter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  description_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_gt?: InputMaybe<Scalars["String"]["input"]>;
  description_gte?: InputMaybe<Scalars["String"]["input"]>;
  description_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_lt?: InputMaybe<Scalars["String"]["input"]>;
  description_lte?: InputMaybe<Scalars["String"]["input"]>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  description_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  description_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  description_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  listings_?: InputMaybe<CurationListing_Filter>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<CurationStorefront_Filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  paymentAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  paymentAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenURI?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenURI_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum CurationStorefront_OrderBy {
  ActiveCurators = "activeCurators",
  CreatedAt = "createdAt",
  CreatedTxHash = "createdTxHash",
  CuratorHistory = "curatorHistory",
  Description = "description",
  Id = "id",
  Listings = "listings",
  Name = "name",
  Owner = "owner",
  PaymentAddress = "paymentAddress",
  TokenUri = "tokenURI",
}

export type Curator = {
  __typename?: "Curator";
  actions: Array<CuratorAction>;
  addedAt: Scalars["BigInt"]["output"];
  addedTxHash: Scalars["Bytes"]["output"];
  curation: CurationStorefront;
  curator: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  removedAt?: Maybe<Scalars["BigInt"]["output"]>;
  removedTxHash?: Maybe<Scalars["Bytes"]["output"]>;
};

export type CuratorActionsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CuratorAction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CuratorAction_Filter>;
};

export type CuratorAction = {
  __typename?: "CuratorAction";
  actionType: Scalars["String"]["output"];
  curation: CurationStorefront;
  curator: Curator;
  id: Scalars["ID"]["output"];
  timestamp: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type CuratorAction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actionType?: InputMaybe<Scalars["String"]["input"]>;
  actionType_contains?: InputMaybe<Scalars["String"]["input"]>;
  actionType_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  actionType_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  actionType_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  actionType_gt?: InputMaybe<Scalars["String"]["input"]>;
  actionType_gte?: InputMaybe<Scalars["String"]["input"]>;
  actionType_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  actionType_lt?: InputMaybe<Scalars["String"]["input"]>;
  actionType_lte?: InputMaybe<Scalars["String"]["input"]>;
  actionType_not?: InputMaybe<Scalars["String"]["input"]>;
  actionType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  actionType_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  actionType_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  actionType_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  actionType_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  actionType_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  actionType_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  actionType_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  actionType_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  and?: InputMaybe<Array<InputMaybe<CuratorAction_Filter>>>;
  curation?: InputMaybe<Scalars["String"]["input"]>;
  curation_?: InputMaybe<CurationStorefront_Filter>;
  curation_contains?: InputMaybe<Scalars["String"]["input"]>;
  curation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  curation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_gt?: InputMaybe<Scalars["String"]["input"]>;
  curation_gte?: InputMaybe<Scalars["String"]["input"]>;
  curation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  curation_lt?: InputMaybe<Scalars["String"]["input"]>;
  curation_lte?: InputMaybe<Scalars["String"]["input"]>;
  curation_not?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  curation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  curation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curator?: InputMaybe<Scalars["String"]["input"]>;
  curator_?: InputMaybe<Curator_Filter>;
  curator_contains?: InputMaybe<Scalars["String"]["input"]>;
  curator_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curator_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  curator_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curator_gt?: InputMaybe<Scalars["String"]["input"]>;
  curator_gte?: InputMaybe<Scalars["String"]["input"]>;
  curator_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  curator_lt?: InputMaybe<Scalars["String"]["input"]>;
  curator_lte?: InputMaybe<Scalars["String"]["input"]>;
  curator_not?: InputMaybe<Scalars["String"]["input"]>;
  curator_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  curator_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curator_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curator_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  curator_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curator_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  curator_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<CuratorAction_Filter>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum CuratorAction_OrderBy {
  ActionType = "actionType",
  Curation = "curation",
  CurationCreatedAt = "curation__createdAt",
  CurationCreatedTxHash = "curation__createdTxHash",
  CurationDescription = "curation__description",
  CurationId = "curation__id",
  CurationName = "curation__name",
  CurationOwner = "curation__owner",
  CurationPaymentAddress = "curation__paymentAddress",
  CurationTokenUri = "curation__tokenURI",
  Curator = "curator",
  CuratorAddedAt = "curator__addedAt",
  CuratorAddedTxHash = "curator__addedTxHash",
  CuratorCurator = "curator__curator",
  CuratorId = "curator__id",
  CuratorIsActive = "curator__isActive",
  CuratorRemovedAt = "curator__removedAt",
  CuratorRemovedTxHash = "curator__removedTxHash",
  Id = "id",
  Timestamp = "timestamp",
  TransactionHash = "transactionHash",
}

export type Curator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actions_?: InputMaybe<CuratorAction_Filter>;
  addedAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  addedAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  addedAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  addedAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  addedAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  addedAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  addedAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  addedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  addedTxHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  addedTxHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  addedTxHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  addedTxHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  addedTxHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  addedTxHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  addedTxHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  addedTxHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  addedTxHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  addedTxHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Curator_Filter>>>;
  curation?: InputMaybe<Scalars["String"]["input"]>;
  curation_?: InputMaybe<CurationStorefront_Filter>;
  curation_contains?: InputMaybe<Scalars["String"]["input"]>;
  curation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  curation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_gt?: InputMaybe<Scalars["String"]["input"]>;
  curation_gte?: InputMaybe<Scalars["String"]["input"]>;
  curation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  curation_lt?: InputMaybe<Scalars["String"]["input"]>;
  curation_lte?: InputMaybe<Scalars["String"]["input"]>;
  curation_not?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  curation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  curation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  curation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  curator?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  curator_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Curator_Filter>>>;
  removedAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  removedAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  removedAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  removedAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  removedAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  removedAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  removedAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  removedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  removedTxHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  removedTxHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  removedTxHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  removedTxHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  removedTxHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  removedTxHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  removedTxHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  removedTxHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  removedTxHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  removedTxHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum Curator_OrderBy {
  Actions = "actions",
  AddedAt = "addedAt",
  AddedTxHash = "addedTxHash",
  Curation = "curation",
  CurationCreatedAt = "curation__createdAt",
  CurationCreatedTxHash = "curation__createdTxHash",
  CurationDescription = "curation__description",
  CurationId = "curation__id",
  CurationName = "curation__name",
  CurationOwner = "curation__owner",
  CurationPaymentAddress = "curation__paymentAddress",
  CurationTokenUri = "curation__tokenURI",
  Curator = "curator",
  Id = "id",
  IsActive = "isActive",
  RemovedAt = "removedAt",
  RemovedTxHash = "removedTxHash",
}

export type DisputeRemoved = {
  __typename?: "DisputeRemoved";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  disputeRemover: Scalars["Bytes"]["output"];
  escrow: OrderEscrow;
  id: Scalars["ID"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type DisputeRemoved_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DisputeRemoved_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  disputeRemover?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeRemover_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeRemover_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeRemover_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeRemover_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  disputeRemover_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeRemover_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeRemover_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeRemover_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeRemover_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  escrow?: InputMaybe<Scalars["String"]["input"]>;
  escrow_?: InputMaybe<OrderEscrow_Filter>;
  escrow_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_lt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_lte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<DisputeRemoved_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum DisputeRemoved_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  DisputeRemover = "disputeRemover",
  Escrow = "escrow",
  EscrowAffiliate = "escrow__affiliate",
  EscrowAffiliateShare = "escrow__affiliateShare",
  EscrowArbiter = "escrow__arbiter",
  EscrowBlockNumber = "escrow__blockNumber",
  EscrowBlockTimestamp = "escrow__blockTimestamp",
  EscrowEscrowAddress = "escrow__escrowAddress",
  EscrowId = "escrow__id",
  EscrowIsDisputed = "escrow__isDisputed",
  EscrowIsRefunded = "escrow__isRefunded",
  EscrowPayee = "escrow__payee",
  EscrowSourceAddress = "escrow__sourceAddress",
  EscrowSourceType = "escrow__sourceType",
  EscrowTransactionHash = "escrow__transactionHash",
  Id = "id",
  TransactionHash = "transactionHash",
}

export type DisputeResolved = {
  __typename?: "DisputeResolved";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  escrow: OrderEscrow;
  id: Scalars["ID"]["output"];
  resolver: Scalars["Bytes"]["output"];
  settled: Scalars["Boolean"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type DisputeResolved_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DisputeResolved_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  escrow?: InputMaybe<Scalars["String"]["input"]>;
  escrow_?: InputMaybe<OrderEscrow_Filter>;
  escrow_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_lt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_lte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<DisputeResolved_Filter>>>;
  resolver?: InputMaybe<Scalars["Bytes"]["input"]>;
  resolver_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  resolver_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  resolver_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  resolver_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  resolver_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  resolver_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  resolver_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  resolver_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  resolver_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  settled?: InputMaybe<Scalars["Boolean"]["input"]>;
  settled_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  settled_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  settled_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum DisputeResolved_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Escrow = "escrow",
  EscrowAffiliate = "escrow__affiliate",
  EscrowAffiliateShare = "escrow__affiliateShare",
  EscrowArbiter = "escrow__arbiter",
  EscrowBlockNumber = "escrow__blockNumber",
  EscrowBlockTimestamp = "escrow__blockTimestamp",
  EscrowEscrowAddress = "escrow__escrowAddress",
  EscrowId = "escrow__id",
  EscrowIsDisputed = "escrow__isDisputed",
  EscrowIsRefunded = "escrow__isRefunded",
  EscrowPayee = "escrow__payee",
  EscrowSourceAddress = "escrow__sourceAddress",
  EscrowSourceType = "escrow__sourceType",
  EscrowTransactionHash = "escrow__transactionHash",
  Id = "id",
  Resolver = "resolver",
  Settled = "settled",
  TransactionHash = "transactionHash",
}

export type Disputed = {
  __typename?: "Disputed";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  disputeInitiator: Scalars["Bytes"]["output"];
  escrow: OrderEscrow;
  id: Scalars["ID"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type Disputed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Disputed_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  disputeInitiator?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeInitiator_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeInitiator_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeInitiator_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeInitiator_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  disputeInitiator_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeInitiator_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeInitiator_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeInitiator_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  disputeInitiator_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  escrow?: InputMaybe<Scalars["String"]["input"]>;
  escrow_?: InputMaybe<OrderEscrow_Filter>;
  escrow_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_lt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_lte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Disputed_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum Disputed_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  DisputeInitiator = "disputeInitiator",
  Escrow = "escrow",
  EscrowAffiliate = "escrow__affiliate",
  EscrowAffiliateShare = "escrow__affiliateShare",
  EscrowArbiter = "escrow__arbiter",
  EscrowBlockNumber = "escrow__blockNumber",
  EscrowBlockTimestamp = "escrow__blockTimestamp",
  EscrowEscrowAddress = "escrow__escrowAddress",
  EscrowId = "escrow__id",
  EscrowIsDisputed = "escrow__isDisputed",
  EscrowIsRefunded = "escrow__isRefunded",
  EscrowPayee = "escrow__payee",
  EscrowSourceAddress = "escrow__sourceAddress",
  EscrowSourceType = "escrow__sourceType",
  EscrowTransactionHash = "escrow__transactionHash",
  Id = "id",
  TransactionHash = "transactionHash",
}

export type Erc1155ContractMetadata = {
  __typename?: "ERC1155ContractMetadata";
  description?: Maybe<Scalars["String"]["output"]>;
  externalLink?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  rawJson: Scalars["String"]["output"];
};

export type Erc1155ContractMetadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc1155ContractMetadata_Filter>>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  description_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_gt?: InputMaybe<Scalars["String"]["input"]>;
  description_gte?: InputMaybe<Scalars["String"]["input"]>;
  description_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_lt?: InputMaybe<Scalars["String"]["input"]>;
  description_lte?: InputMaybe<Scalars["String"]["input"]>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  description_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  description_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  description_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  externalLink?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_contains?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_gt?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_gte?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  externalLink_lt?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_lte?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_not?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  externalLink_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  externalLink_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  image_contains?: InputMaybe<Scalars["String"]["input"]>;
  image_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  image_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_gt?: InputMaybe<Scalars["String"]["input"]>;
  image_gte?: InputMaybe<Scalars["String"]["input"]>;
  image_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  image_lt?: InputMaybe<Scalars["String"]["input"]>;
  image_lte?: InputMaybe<Scalars["String"]["input"]>;
  image_not?: InputMaybe<Scalars["String"]["input"]>;
  image_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  image_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  image_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  image_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  image_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  image_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Erc1155ContractMetadata_Filter>>>;
  rawJson?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_contains?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_gt?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_gte?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rawJson_lt?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_lte?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rawJson_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum Erc1155ContractMetadata_OrderBy {
  Description = "description",
  ExternalLink = "externalLink",
  Id = "id",
  Image = "image",
  Name = "name",
  RawJson = "rawJson",
}

export type Erc1155TokenMetadata = {
  __typename?: "ERC1155TokenMetadata";
  id: Scalars["ID"]["output"];
  rawEncodedJson: Scalars["String"]["output"];
  rawJson: Scalars["String"]["output"];
};

export type Erc1155TokenMetadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc1155TokenMetadata_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Erc1155TokenMetadata_Filter>>>;
  rawEncodedJson?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_contains?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_gt?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_gte?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rawEncodedJson_lt?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_lte?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_not?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rawEncodedJson_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  rawEncodedJson_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rawEncodedJson_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_contains?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_gt?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_gte?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rawJson_lt?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_lte?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rawJson_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rawJson_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum Erc1155TokenMetadata_OrderBy {
  Id = "id",
  RawEncodedJson = "rawEncodedJson",
  RawJson = "rawJson",
}

export type EncryptedMessage = {
  __typename?: "EncryptedMessage";
  auction: Auction;
  bidder: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  encryptedData?: Maybe<Scalars["Bytes"]["output"]>;
  ephemeralPublicKey?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  isFinal: Scalars["Boolean"]["output"];
  iv?: Maybe<Scalars["Bytes"]["output"]>;
  timestamp: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
  verificationHash?: Maybe<Scalars["Bytes"]["output"]>;
};

export type EncryptedMessage_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EncryptedMessage_Filter>>>;
  auction?: InputMaybe<Scalars["String"]["input"]>;
  auction_?: InputMaybe<Auction_Filter>;
  auction_contains?: InputMaybe<Scalars["String"]["input"]>;
  auction_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_gt?: InputMaybe<Scalars["String"]["input"]>;
  auction_gte?: InputMaybe<Scalars["String"]["input"]>;
  auction_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auction_lt?: InputMaybe<Scalars["String"]["input"]>;
  auction_lte?: InputMaybe<Scalars["String"]["input"]>;
  auction_not?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auction_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bidder?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  bidder_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  encryptedData?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  encryptedData_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  ephemeralPublicKey?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  ephemeralPublicKey_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  isFinal?: InputMaybe<Scalars["Boolean"]["input"]>;
  isFinal_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isFinal_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isFinal_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  iv?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  iv_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EncryptedMessage_Filter>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  verificationHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  verificationHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum EncryptedMessage_OrderBy {
  Auction = "auction",
  AuctionAffiliateFee = "auction__affiliateFee",
  AuctionArbiter = "auction__arbiter",
  AuctionAuctionCurrency = "auction__auctionCurrency",
  AuctionAuctionId = "auction__auctionId",
  AuctionAuctionOwner = "auction__auctionOwner",
  AuctionCreatedAt = "auction__createdAt",
  AuctionCreatedAtBlock = "auction__createdAtBlock",
  AuctionCreationTx = "auction__creationTx",
  AuctionCurrentAffiliate = "auction__currentAffiliate",
  AuctionCurrentBidder = "auction__currentBidder",
  AuctionDuration = "auction__duration",
  AuctionEndTime = "auction__endTime",
  AuctionEndedAt = "auction__endedAt",
  AuctionEndedAtBlock = "auction__endedAtBlock",
  AuctionEndedTx = "auction__endedTx",
  AuctionEscrowAddress = "auction__escrowAddress",
  AuctionExtensionCount = "auction__extensionCount",
  AuctionHighestBid = "auction__highestBid",
  AuctionHighestBidAmount = "auction__highestBidAmount",
  AuctionId = "auction__id",
  AuctionIsPremiumAuction = "auction__isPremiumAuction",
  AuctionLastUpdatedAt = "auction__lastUpdatedAt",
  AuctionLastUpdatedTx = "auction__lastUpdatedTx",
  AuctionMinBidIncrementBps = "auction__minBidIncrementBps",
  AuctionPaymentAmount = "auction__paymentAmount",
  AuctionPremiumBps = "auction__premiumBps",
  AuctionReservePrice = "auction__reservePrice",
  AuctionStartTime = "auction__startTime",
  AuctionStatus = "auction__status",
  AuctionTimeExtension = "auction__timeExtension",
  AuctionTokenContract = "auction__tokenContract",
  AuctionTokenId = "auction__tokenId",
  AuctionTotalBidCount = "auction__totalBidCount",
  AuctionTotalPremiumPaid = "auction__totalPremiumPaid",
  AuctionWasExtended = "auction__wasExtended",
  Bidder = "bidder",
  BlockNumber = "blockNumber",
  EncryptedData = "encryptedData",
  EphemeralPublicKey = "ephemeralPublicKey",
  Id = "id",
  IsFinal = "isFinal",
  Iv = "iv",
  Timestamp = "timestamp",
  TransactionHash = "transactionHash",
  VerificationHash = "verificationHash",
}

export type EscapeAddressSet = {
  __typename?: "EscapeAddressSet";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  escapeAddress: Scalars["Bytes"]["output"];
  escrow: OrderEscrow;
  id: Scalars["ID"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type EscapeAddressSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EscapeAddressSet_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  escapeAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  escapeAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  escapeAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  escapeAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  escapeAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  escapeAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  escapeAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  escapeAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  escapeAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  escapeAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  escrow?: InputMaybe<Scalars["String"]["input"]>;
  escrow_?: InputMaybe<OrderEscrow_Filter>;
  escrow_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_lt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_lte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EscapeAddressSet_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum EscapeAddressSet_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  EscapeAddress = "escapeAddress",
  Escrow = "escrow",
  EscrowAffiliate = "escrow__affiliate",
  EscrowAffiliateShare = "escrow__affiliateShare",
  EscrowArbiter = "escrow__arbiter",
  EscrowBlockNumber = "escrow__blockNumber",
  EscrowBlockTimestamp = "escrow__blockTimestamp",
  EscrowEscrowAddress = "escrow__escrowAddress",
  EscrowId = "escrow__id",
  EscrowIsDisputed = "escrow__isDisputed",
  EscrowIsRefunded = "escrow__isRefunded",
  EscrowPayee = "escrow__payee",
  EscrowSourceAddress = "escrow__sourceAddress",
  EscrowSourceType = "escrow__sourceType",
  EscrowTransactionHash = "escrow__transactionHash",
  Id = "id",
  TransactionHash = "transactionHash",
}

export type Escaped = {
  __typename?: "Escaped";
  amount: Scalars["BigInt"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  escrow: OrderEscrow;
  id: Scalars["ID"]["output"];
  to: Scalars["Bytes"]["output"];
  token: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type Escaped_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Escaped_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  escrow?: InputMaybe<Scalars["String"]["input"]>;
  escrow_?: InputMaybe<OrderEscrow_Filter>;
  escrow_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_lt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_lte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Escaped_Filter>>>;
  to?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  token?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  token_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum Escaped_OrderBy {
  Amount = "amount",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Escrow = "escrow",
  EscrowAffiliate = "escrow__affiliate",
  EscrowAffiliateShare = "escrow__affiliateShare",
  EscrowArbiter = "escrow__arbiter",
  EscrowBlockNumber = "escrow__blockNumber",
  EscrowBlockTimestamp = "escrow__blockTimestamp",
  EscrowEscrowAddress = "escrow__escrowAddress",
  EscrowId = "escrow__id",
  EscrowIsDisputed = "escrow__isDisputed",
  EscrowIsRefunded = "escrow__isRefunded",
  EscrowPayee = "escrow__payee",
  EscrowSourceAddress = "escrow__sourceAddress",
  EscrowSourceType = "escrow__sourceType",
  EscrowTransactionHash = "escrow__transactionHash",
  Id = "id",
  To = "to",
  Token = "token",
  TransactionHash = "transactionHash",
}

export enum EscrowSourceType {
  AuctionHouse = "AUCTION_HOUSE",
  Storefront = "STOREFRONT",
}

export type OfferItem = {
  __typename?: "OfferItem";
  amount: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  identifier: Scalars["BigInt"]["output"];
  itemType: Scalars["BigInt"]["output"];
  orderFulfilled: OrderFulfilled;
  token: Scalars["Bytes"]["output"];
};

export type OfferItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<OfferItem_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  identifier?: InputMaybe<Scalars["BigInt"]["input"]>;
  identifier_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  identifier_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  identifier_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  identifier_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  identifier_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  identifier_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  identifier_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  itemType?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemType_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemType_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemType_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  itemType_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemType_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemType_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemType_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<OfferItem_Filter>>>;
  orderFulfilled?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_?: InputMaybe<OrderFulfilled_Filter>;
  orderFulfilled_contains?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_gt?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_gte?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  orderFulfilled_lt?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_lte?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  orderFulfilled_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  orderFulfilled_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  token_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum OfferItem_OrderBy {
  Amount = "amount",
  Id = "id",
  Identifier = "identifier",
  ItemType = "itemType",
  OrderFulfilled = "orderFulfilled",
  OrderFulfilledAffiliate = "orderFulfilled__affiliate",
  OrderFulfilledAffiliateShare = "orderFulfilled__affiliateShare",
  OrderFulfilledBlockNumber = "orderFulfilled__blockNumber",
  OrderFulfilledBlockTimestamp = "orderFulfilled__blockTimestamp",
  OrderFulfilledEncryptedData = "orderFulfilled__encryptedData",
  OrderFulfilledEphemeralPublicKey = "orderFulfilled__ephemeralPublicKey",
  OrderFulfilledErc1155ContractUri = "orderFulfilled__erc1155ContractURI",
  OrderFulfilledErc1155TokenUri = "orderFulfilled__erc1155TokenURI",
  OrderFulfilledId = "orderFulfilled__id",
  OrderFulfilledIv = "orderFulfilled__iv",
  OrderFulfilledOfferer = "orderFulfilled__offerer",
  OrderFulfilledOrderHash = "orderFulfilled__orderHash",
  OrderFulfilledRecipient = "orderFulfilled__recipient",
  OrderFulfilledTransactionHash = "orderFulfilled__transactionHash",
  OrderFulfilledVerificationHash = "orderFulfilled__verificationHash",
  OrderFulfilledZone = "orderFulfilled__zone",
  Token = "token",
}

export type Order = {
  __typename?: "Order";
  affiliate?: Maybe<Scalars["Bytes"]["output"]>;
  affiliateShare?: Maybe<Scalars["BigInt"]["output"]>;
  amount: Scalars["BigInt"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  buyer: Scalars["Bytes"]["output"];
  escrowContract?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["Bytes"]["output"];
  latestAttestationId?: Maybe<Scalars["Bytes"]["output"]>;
  latestAttestationTimestamp?: Maybe<Scalars["BigInt"]["output"]>;
  saleAttestations: Array<SaleAttestation>;
  seller: Scalars["Bytes"]["output"];
  storefront: Storefront;
  timestamp: Scalars["BigInt"]["output"];
  tokenId: Scalars["BigInt"]["output"];
};

export type OrderSaleAttestationsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<SaleAttestation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<SaleAttestation_Filter>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type OrderEscrow = {
  __typename?: "OrderEscrow";
  affiliate?: Maybe<Scalars["Bytes"]["output"]>;
  affiliateShare?: Maybe<Scalars["BigInt"]["output"]>;
  arbiter: Scalars["Bytes"]["output"];
  arbiterChangeEvents: Array<ArbiterChange>;
  attestations: Array<SaleAttestation>;
  auction?: Maybe<Auction>;
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  disputeRemovedEvents: Array<DisputeRemoved>;
  disputeResolvedEvents: Array<DisputeResolved>;
  disputedEvents: Array<Disputed>;
  escapeAddressSetEvents: Array<EscapeAddressSet>;
  escapedEvents: Array<Escaped>;
  escrowAddress: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  isDisputed: Scalars["Boolean"]["output"];
  isRefunded: Scalars["Boolean"]["output"];
  order?: Maybe<Order>;
  payee: Scalars["Bytes"]["output"];
  payments: Array<OrderPayment>;
  refundedEvents: Array<Refunded>;
  settledEvents: Array<Settled>;
  sourceAddress: Scalars["Bytes"]["output"];
  sourceType: EscrowSourceType;
  transactionHash: Scalars["Bytes"]["output"];
};

export type OrderEscrowArbiterChangeEventsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ArbiterChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ArbiterChange_Filter>;
};

export type OrderEscrowAttestationsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<SaleAttestation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<SaleAttestation_Filter>;
};

export type OrderEscrowDisputeRemovedEventsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<DisputeRemoved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<DisputeRemoved_Filter>;
};

export type OrderEscrowDisputeResolvedEventsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<DisputeResolved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<DisputeResolved_Filter>;
};

export type OrderEscrowDisputedEventsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Disputed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Disputed_Filter>;
};

export type OrderEscrowEscapeAddressSetEventsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EscapeAddressSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EscapeAddressSet_Filter>;
};

export type OrderEscrowEscapedEventsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Escaped_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Escaped_Filter>;
};

export type OrderEscrowPaymentsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrderPayment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrderPayment_Filter>;
};

export type OrderEscrowRefundedEventsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Refunded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Refunded_Filter>;
};

export type OrderEscrowSettledEventsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Settled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Settled_Filter>;
};

export type OrderEscrow_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  affiliate?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliateShare?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  affiliateShare_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  affiliate_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  affiliate_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<OrderEscrow_Filter>>>;
  arbiter?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiterChangeEvents_?: InputMaybe<ArbiterChange_Filter>;
  arbiter_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  arbiter_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  attestations_?: InputMaybe<SaleAttestation_Filter>;
  auction?: InputMaybe<Scalars["String"]["input"]>;
  auction_?: InputMaybe<Auction_Filter>;
  auction_contains?: InputMaybe<Scalars["String"]["input"]>;
  auction_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_gt?: InputMaybe<Scalars["String"]["input"]>;
  auction_gte?: InputMaybe<Scalars["String"]["input"]>;
  auction_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auction_lt?: InputMaybe<Scalars["String"]["input"]>;
  auction_lte?: InputMaybe<Scalars["String"]["input"]>;
  auction_not?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auction_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  disputeRemovedEvents_?: InputMaybe<DisputeRemoved_Filter>;
  disputeResolvedEvents_?: InputMaybe<DisputeResolved_Filter>;
  disputedEvents_?: InputMaybe<Disputed_Filter>;
  escapeAddressSetEvents_?: InputMaybe<EscapeAddressSet_Filter>;
  escapedEvents_?: InputMaybe<Escaped_Filter>;
  escrowAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  escrowAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  isDisputed?: InputMaybe<Scalars["Boolean"]["input"]>;
  isDisputed_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isDisputed_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isDisputed_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isRefunded?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRefunded_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isRefunded_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRefunded_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<OrderEscrow_Filter>>>;
  order?: InputMaybe<Scalars["String"]["input"]>;
  order_?: InputMaybe<Order_Filter>;
  order_contains?: InputMaybe<Scalars["String"]["input"]>;
  order_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  order_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  order_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  order_gt?: InputMaybe<Scalars["String"]["input"]>;
  order_gte?: InputMaybe<Scalars["String"]["input"]>;
  order_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  order_lt?: InputMaybe<Scalars["String"]["input"]>;
  order_lte?: InputMaybe<Scalars["String"]["input"]>;
  order_not?: InputMaybe<Scalars["String"]["input"]>;
  order_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  order_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  order_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  order_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  order_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  order_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  order_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  order_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  order_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  payee?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  payee_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  payments_?: InputMaybe<OrderPayment_Filter>;
  refundedEvents_?: InputMaybe<Refunded_Filter>;
  settledEvents_?: InputMaybe<Settled_Filter>;
  sourceAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  sourceAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  sourceType?: InputMaybe<EscrowSourceType>;
  sourceType_in?: InputMaybe<Array<EscrowSourceType>>;
  sourceType_not?: InputMaybe<EscrowSourceType>;
  sourceType_not_in?: InputMaybe<Array<EscrowSourceType>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum OrderEscrow_OrderBy {
  Affiliate = "affiliate",
  AffiliateShare = "affiliateShare",
  Arbiter = "arbiter",
  ArbiterChangeEvents = "arbiterChangeEvents",
  Attestations = "attestations",
  Auction = "auction",
  AuctionAffiliateFee = "auction__affiliateFee",
  AuctionArbiter = "auction__arbiter",
  AuctionAuctionCurrency = "auction__auctionCurrency",
  AuctionAuctionId = "auction__auctionId",
  AuctionAuctionOwner = "auction__auctionOwner",
  AuctionCreatedAt = "auction__createdAt",
  AuctionCreatedAtBlock = "auction__createdAtBlock",
  AuctionCreationTx = "auction__creationTx",
  AuctionCurrentAffiliate = "auction__currentAffiliate",
  AuctionCurrentBidder = "auction__currentBidder",
  AuctionDuration = "auction__duration",
  AuctionEndTime = "auction__endTime",
  AuctionEndedAt = "auction__endedAt",
  AuctionEndedAtBlock = "auction__endedAtBlock",
  AuctionEndedTx = "auction__endedTx",
  AuctionEscrowAddress = "auction__escrowAddress",
  AuctionExtensionCount = "auction__extensionCount",
  AuctionHighestBid = "auction__highestBid",
  AuctionHighestBidAmount = "auction__highestBidAmount",
  AuctionId = "auction__id",
  AuctionIsPremiumAuction = "auction__isPremiumAuction",
  AuctionLastUpdatedAt = "auction__lastUpdatedAt",
  AuctionLastUpdatedTx = "auction__lastUpdatedTx",
  AuctionMinBidIncrementBps = "auction__minBidIncrementBps",
  AuctionPaymentAmount = "auction__paymentAmount",
  AuctionPremiumBps = "auction__premiumBps",
  AuctionReservePrice = "auction__reservePrice",
  AuctionStartTime = "auction__startTime",
  AuctionStatus = "auction__status",
  AuctionTimeExtension = "auction__timeExtension",
  AuctionTokenContract = "auction__tokenContract",
  AuctionTokenId = "auction__tokenId",
  AuctionTotalBidCount = "auction__totalBidCount",
  AuctionTotalPremiumPaid = "auction__totalPremiumPaid",
  AuctionWasExtended = "auction__wasExtended",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  DisputeRemovedEvents = "disputeRemovedEvents",
  DisputeResolvedEvents = "disputeResolvedEvents",
  DisputedEvents = "disputedEvents",
  EscapeAddressSetEvents = "escapeAddressSetEvents",
  EscapedEvents = "escapedEvents",
  EscrowAddress = "escrowAddress",
  Id = "id",
  IsDisputed = "isDisputed",
  IsRefunded = "isRefunded",
  Order = "order",
  OrderAffiliate = "order__affiliate",
  OrderAffiliateShare = "order__affiliateShare",
  OrderAmount = "order__amount",
  OrderBlockNumber = "order__blockNumber",
  OrderBuyer = "order__buyer",
  OrderEscrowContract = "order__escrowContract",
  OrderId = "order__id",
  OrderLatestAttestationId = "order__latestAttestationId",
  OrderLatestAttestationTimestamp = "order__latestAttestationTimestamp",
  OrderSeller = "order__seller",
  OrderTimestamp = "order__timestamp",
  OrderTokenId = "order__tokenId",
  Payee = "payee",
  Payments = "payments",
  RefundedEvents = "refundedEvents",
  SettledEvents = "settledEvents",
  SourceAddress = "sourceAddress",
  SourceType = "sourceType",
  TransactionHash = "transactionHash",
}

export type OrderFulfilled = {
  __typename?: "OrderFulfilled";
  affiliate?: Maybe<Scalars["Bytes"]["output"]>;
  affiliateShare?: Maybe<Scalars["BigInt"]["output"]>;
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  consideration: Array<ConsiderationItem>;
  contractMetadata?: Maybe<Erc1155ContractMetadata>;
  encryptedData?: Maybe<Scalars["Bytes"]["output"]>;
  ephemeralPublicKey?: Maybe<Scalars["Bytes"]["output"]>;
  erc1155ContractURI?: Maybe<Scalars["String"]["output"]>;
  erc1155TokenURI?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  iv?: Maybe<Scalars["Bytes"]["output"]>;
  offer: Array<OfferItem>;
  offerer: Scalars["Bytes"]["output"];
  orderHash: Scalars["Bytes"]["output"];
  payment?: Maybe<OrderPayment>;
  recipient: Scalars["Bytes"]["output"];
  tokenMetadata?: Maybe<Erc1155TokenMetadata>;
  transactionHash: Scalars["Bytes"]["output"];
  verificationHash?: Maybe<Scalars["Bytes"]["output"]>;
  zone: Scalars["Bytes"]["output"];
};

export type OrderFulfilledConsiderationArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ConsiderationItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ConsiderationItem_Filter>;
};

export type OrderFulfilledOfferArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OfferItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OfferItem_Filter>;
};

export type OrderFulfilled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  affiliate?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliateShare?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  affiliateShare_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  affiliate_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  affiliate_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<OrderFulfilled_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  consideration?: InputMaybe<Array<Scalars["String"]["input"]>>;
  consideration_?: InputMaybe<ConsiderationItem_Filter>;
  consideration_contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
  consideration_contains_nocase?: InputMaybe<Array<Scalars["String"]["input"]>>;
  consideration_not?: InputMaybe<Array<Scalars["String"]["input"]>>;
  consideration_not_contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
  consideration_not_contains_nocase?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  contractMetadata?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_?: InputMaybe<Erc1155ContractMetadata_Filter>;
  contractMetadata_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_gt?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_gte?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractMetadata_lt?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_lte?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  contractMetadata_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractMetadata_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  contractMetadata_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  encryptedData?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  encryptedData_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  encryptedData_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  ephemeralPublicKey?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  ephemeralPublicKey_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  ephemeralPublicKey_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  erc1155ContractURI?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  erc1155ContractURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_not?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  erc1155ContractURI_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  erc1155ContractURI_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  erc1155ContractURI_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  erc1155ContractURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  erc1155ContractURI_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  erc1155TokenURI?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  erc1155TokenURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_not?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  erc1155TokenURI_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  erc1155TokenURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  erc1155TokenURI_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  iv?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  iv_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  iv_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  offer?: InputMaybe<Array<Scalars["String"]["input"]>>;
  offer_?: InputMaybe<OfferItem_Filter>;
  offer_contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
  offer_contains_nocase?: InputMaybe<Array<Scalars["String"]["input"]>>;
  offer_not?: InputMaybe<Array<Scalars["String"]["input"]>>;
  offer_not_contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
  offer_not_contains_nocase?: InputMaybe<Array<Scalars["String"]["input"]>>;
  offerer?: InputMaybe<Scalars["Bytes"]["input"]>;
  offerer_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  offerer_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  offerer_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  offerer_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  offerer_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  offerer_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  offerer_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  offerer_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  offerer_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<OrderFulfilled_Filter>>>;
  orderHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  orderHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  orderHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  orderHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  orderHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  orderHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  orderHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  orderHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  orderHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  orderHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  payment?: InputMaybe<Scalars["String"]["input"]>;
  payment_?: InputMaybe<OrderPayment_Filter>;
  payment_contains?: InputMaybe<Scalars["String"]["input"]>;
  payment_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  payment_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  payment_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  payment_gt?: InputMaybe<Scalars["String"]["input"]>;
  payment_gte?: InputMaybe<Scalars["String"]["input"]>;
  payment_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  payment_lt?: InputMaybe<Scalars["String"]["input"]>;
  payment_lte?: InputMaybe<Scalars["String"]["input"]>;
  payment_not?: InputMaybe<Scalars["String"]["input"]>;
  payment_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  payment_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  payment_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  payment_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  payment_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  payment_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  payment_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  payment_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  payment_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  recipient?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  recipient_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  recipient_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenMetadata?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_?: InputMaybe<Erc1155TokenMetadata_Filter>;
  tokenMetadata_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenMetadata_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenMetadata_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  verificationHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  verificationHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  verificationHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  zone?: InputMaybe<Scalars["Bytes"]["input"]>;
  zone_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  zone_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  zone_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  zone_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  zone_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  zone_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  zone_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  zone_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  zone_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum OrderFulfilled_OrderBy {
  Affiliate = "affiliate",
  AffiliateShare = "affiliateShare",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Consideration = "consideration",
  ContractMetadata = "contractMetadata",
  ContractMetadataDescription = "contractMetadata__description",
  ContractMetadataExternalLink = "contractMetadata__externalLink",
  ContractMetadataId = "contractMetadata__id",
  ContractMetadataImage = "contractMetadata__image",
  ContractMetadataName = "contractMetadata__name",
  ContractMetadataRawJson = "contractMetadata__rawJson",
  EncryptedData = "encryptedData",
  EphemeralPublicKey = "ephemeralPublicKey",
  Erc1155ContractUri = "erc1155ContractURI",
  Erc1155TokenUri = "erc1155TokenURI",
  Id = "id",
  Iv = "iv",
  Offer = "offer",
  Offerer = "offerer",
  OrderHash = "orderHash",
  Payment = "payment",
  PaymentBlockNumber = "payment__blockNumber",
  PaymentBlockTimestamp = "payment__blockTimestamp",
  PaymentId = "payment__id",
  PaymentPayer = "payment__payer",
  PaymentSettleDeadline = "payment__settleDeadline",
  PaymentTransactionHash = "payment__transactionHash",
  Recipient = "recipient",
  TokenMetadata = "tokenMetadata",
  TokenMetadataId = "tokenMetadata__id",
  TokenMetadataRawEncodedJson = "tokenMetadata__rawEncodedJson",
  TokenMetadataRawJson = "tokenMetadata__rawJson",
  TransactionHash = "transactionHash",
  VerificationHash = "verificationHash",
  Zone = "zone",
}

export type OrderPayment = {
  __typename?: "OrderPayment";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  escrow: OrderEscrow;
  id: Scalars["ID"]["output"];
  orderFulfilled?: Maybe<OrderFulfilled>;
  payer: Scalars["Bytes"]["output"];
  settleDeadline: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type OrderPayment_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrderPayment_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  escrow?: InputMaybe<Scalars["String"]["input"]>;
  escrow_?: InputMaybe<OrderEscrow_Filter>;
  escrow_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_lt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_lte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<OrderPayment_Filter>>>;
  orderFulfilled?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_?: InputMaybe<OrderFulfilled_Filter>;
  orderFulfilled_contains?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_gt?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_gte?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  orderFulfilled_lt?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_lte?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  orderFulfilled_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  orderFulfilled_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  orderFulfilled_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  payer?: InputMaybe<Scalars["Bytes"]["input"]>;
  payer_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  payer_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  payer_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  payer_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  payer_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  payer_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  payer_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  payer_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  payer_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  settleDeadline?: InputMaybe<Scalars["BigInt"]["input"]>;
  settleDeadline_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  settleDeadline_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  settleDeadline_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  settleDeadline_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  settleDeadline_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  settleDeadline_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  settleDeadline_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum OrderPayment_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Escrow = "escrow",
  EscrowAffiliate = "escrow__affiliate",
  EscrowAffiliateShare = "escrow__affiliateShare",
  EscrowArbiter = "escrow__arbiter",
  EscrowBlockNumber = "escrow__blockNumber",
  EscrowBlockTimestamp = "escrow__blockTimestamp",
  EscrowEscrowAddress = "escrow__escrowAddress",
  EscrowId = "escrow__id",
  EscrowIsDisputed = "escrow__isDisputed",
  EscrowIsRefunded = "escrow__isRefunded",
  EscrowPayee = "escrow__payee",
  EscrowSourceAddress = "escrow__sourceAddress",
  EscrowSourceType = "escrow__sourceType",
  EscrowTransactionHash = "escrow__transactionHash",
  Id = "id",
  OrderFulfilled = "orderFulfilled",
  OrderFulfilledAffiliate = "orderFulfilled__affiliate",
  OrderFulfilledAffiliateShare = "orderFulfilled__affiliateShare",
  OrderFulfilledBlockNumber = "orderFulfilled__blockNumber",
  OrderFulfilledBlockTimestamp = "orderFulfilled__blockTimestamp",
  OrderFulfilledEncryptedData = "orderFulfilled__encryptedData",
  OrderFulfilledEphemeralPublicKey = "orderFulfilled__ephemeralPublicKey",
  OrderFulfilledErc1155ContractUri = "orderFulfilled__erc1155ContractURI",
  OrderFulfilledErc1155TokenUri = "orderFulfilled__erc1155TokenURI",
  OrderFulfilledId = "orderFulfilled__id",
  OrderFulfilledIv = "orderFulfilled__iv",
  OrderFulfilledOfferer = "orderFulfilled__offerer",
  OrderFulfilledOrderHash = "orderFulfilled__orderHash",
  OrderFulfilledRecipient = "orderFulfilled__recipient",
  OrderFulfilledTransactionHash = "orderFulfilled__transactionHash",
  OrderFulfilledVerificationHash = "orderFulfilled__verificationHash",
  OrderFulfilledZone = "orderFulfilled__zone",
  Payer = "payer",
  SettleDeadline = "settleDeadline",
  TransactionHash = "transactionHash",
}

export type Order_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  affiliate?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliateShare?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  affiliateShare_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  affiliateShare_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  affiliate_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  affiliate_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliate_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Order_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  buyer?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  buyer_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  escrowContract?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowContract_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowContract_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowContract_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowContract_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  escrowContract_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowContract_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowContract_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowContract_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowContract_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  latestAttestationId?: InputMaybe<Scalars["Bytes"]["input"]>;
  latestAttestationId_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  latestAttestationId_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  latestAttestationId_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  latestAttestationId_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  latestAttestationId_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  latestAttestationId_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  latestAttestationId_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  latestAttestationId_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  latestAttestationId_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  latestAttestationTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestAttestationTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestAttestationTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestAttestationTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  latestAttestationTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestAttestationTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestAttestationTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestAttestationTimestamp_not_in?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  or?: InputMaybe<Array<InputMaybe<Order_Filter>>>;
  saleAttestations_?: InputMaybe<SaleAttestation_Filter>;
  seller?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  seller_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  storefront?: InputMaybe<Scalars["String"]["input"]>;
  storefront_?: InputMaybe<Storefront_Filter>;
  storefront_contains?: InputMaybe<Scalars["String"]["input"]>;
  storefront_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  storefront_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_gt?: InputMaybe<Scalars["String"]["input"]>;
  storefront_gte?: InputMaybe<Scalars["String"]["input"]>;
  storefront_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  storefront_lt?: InputMaybe<Scalars["String"]["input"]>;
  storefront_lte?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  storefront_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  storefront_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum Order_OrderBy {
  Affiliate = "affiliate",
  AffiliateShare = "affiliateShare",
  Amount = "amount",
  BlockNumber = "blockNumber",
  Buyer = "buyer",
  EscrowContract = "escrowContract",
  Id = "id",
  LatestAttestationId = "latestAttestationId",
  LatestAttestationTimestamp = "latestAttestationTimestamp",
  SaleAttestations = "saleAttestations",
  Seller = "seller",
  Storefront = "storefront",
  StorefrontAffiliateVerifier = "storefront__affiliateVerifier",
  StorefrontArbiter = "storefront__arbiter",
  StorefrontContractUri = "storefront__contractURI",
  StorefrontCreatedAt = "storefront__createdAt",
  StorefrontCreatedAtBlock = "storefront__createdAtBlock",
  StorefrontCreationTx = "storefront__creationTx",
  StorefrontErc1155Token = "storefront__erc1155Token",
  StorefrontEscrowFactory = "storefront__escrowFactory",
  StorefrontId = "storefront__id",
  StorefrontIsAffiliateEnabled = "storefront__isAffiliateEnabled",
  StorefrontMinSettleTime = "storefront__minSettleTime",
  StorefrontOwner = "storefront__owner",
  StorefrontReady = "storefront__ready",
  StorefrontReviewCount = "storefront__reviewCount",
  StorefrontSeaport = "storefront__seaport",
  StorefrontSettleDeadline = "storefront__settleDeadline",
  StorefrontStorefrontAddress = "storefront__storefrontAddress",
  StorefrontTotalRating = "storefront__totalRating",
  Timestamp = "timestamp",
  TokenId = "tokenId",
}

export type PremiumPayment = {
  __typename?: "PremiumPayment";
  auction: Auction;
  blockNumber: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  newBidder: Scalars["Bytes"]["output"];
  originalBid: Scalars["BigInt"]["output"];
  outbidUser: Scalars["Bytes"]["output"];
  premiumAmount: Scalars["BigInt"]["output"];
  timestamp: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type PremiumPayment_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PremiumPayment_Filter>>>;
  auction?: InputMaybe<Scalars["String"]["input"]>;
  auction_?: InputMaybe<Auction_Filter>;
  auction_contains?: InputMaybe<Scalars["String"]["input"]>;
  auction_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_gt?: InputMaybe<Scalars["String"]["input"]>;
  auction_gte?: InputMaybe<Scalars["String"]["input"]>;
  auction_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auction_lt?: InputMaybe<Scalars["String"]["input"]>;
  auction_lte?: InputMaybe<Scalars["String"]["input"]>;
  auction_not?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auction_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  newBidder?: InputMaybe<Scalars["Bytes"]["input"]>;
  newBidder_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  newBidder_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  newBidder_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  newBidder_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newBidder_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  newBidder_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  newBidder_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  newBidder_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  newBidder_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<PremiumPayment_Filter>>>;
  originalBid?: InputMaybe<Scalars["BigInt"]["input"]>;
  originalBid_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  originalBid_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  originalBid_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  originalBid_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  originalBid_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  originalBid_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  originalBid_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  outbidUser?: InputMaybe<Scalars["Bytes"]["input"]>;
  outbidUser_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  outbidUser_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  outbidUser_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  outbidUser_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  outbidUser_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  outbidUser_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  outbidUser_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  outbidUser_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  outbidUser_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  premiumAmount?: InputMaybe<Scalars["BigInt"]["input"]>;
  premiumAmount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  premiumAmount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  premiumAmount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  premiumAmount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  premiumAmount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  premiumAmount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  premiumAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum PremiumPayment_OrderBy {
  Auction = "auction",
  AuctionAffiliateFee = "auction__affiliateFee",
  AuctionArbiter = "auction__arbiter",
  AuctionAuctionCurrency = "auction__auctionCurrency",
  AuctionAuctionId = "auction__auctionId",
  AuctionAuctionOwner = "auction__auctionOwner",
  AuctionCreatedAt = "auction__createdAt",
  AuctionCreatedAtBlock = "auction__createdAtBlock",
  AuctionCreationTx = "auction__creationTx",
  AuctionCurrentAffiliate = "auction__currentAffiliate",
  AuctionCurrentBidder = "auction__currentBidder",
  AuctionDuration = "auction__duration",
  AuctionEndTime = "auction__endTime",
  AuctionEndedAt = "auction__endedAt",
  AuctionEndedAtBlock = "auction__endedAtBlock",
  AuctionEndedTx = "auction__endedTx",
  AuctionEscrowAddress = "auction__escrowAddress",
  AuctionExtensionCount = "auction__extensionCount",
  AuctionHighestBid = "auction__highestBid",
  AuctionHighestBidAmount = "auction__highestBidAmount",
  AuctionId = "auction__id",
  AuctionIsPremiumAuction = "auction__isPremiumAuction",
  AuctionLastUpdatedAt = "auction__lastUpdatedAt",
  AuctionLastUpdatedTx = "auction__lastUpdatedTx",
  AuctionMinBidIncrementBps = "auction__minBidIncrementBps",
  AuctionPaymentAmount = "auction__paymentAmount",
  AuctionPremiumBps = "auction__premiumBps",
  AuctionReservePrice = "auction__reservePrice",
  AuctionStartTime = "auction__startTime",
  AuctionStatus = "auction__status",
  AuctionTimeExtension = "auction__timeExtension",
  AuctionTokenContract = "auction__tokenContract",
  AuctionTokenId = "auction__tokenId",
  AuctionTotalBidCount = "auction__totalBidCount",
  AuctionTotalPremiumPaid = "auction__totalPremiumPaid",
  AuctionWasExtended = "auction__wasExtended",
  BlockNumber = "blockNumber",
  Id = "id",
  NewBidder = "newBidder",
  OriginalBid = "originalBid",
  OutbidUser = "outbidUser",
  PremiumAmount = "premiumAmount",
  Timestamp = "timestamp",
  TransactionHash = "transactionHash",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  arbiterChange?: Maybe<ArbiterChange>;
  arbiterChanges: Array<ArbiterChange>;
  auction?: Maybe<Auction>;
  auctionHouse?: Maybe<AuctionHouse>;
  auctionHouses: Array<AuctionHouse>;
  auctionItemERC721?: Maybe<AuctionItemErc721>;
  auctionItemERC721Metadata?: Maybe<AuctionItemErc721Metadata>;
  auctionItemERC721Metadata_collection: Array<AuctionItemErc721Metadata>;
  auctionItemERC721S: Array<AuctionItemErc721>;
  auctionItemERC721Token?: Maybe<AuctionItemErc721Token>;
  auctionItemERC721Tokens: Array<AuctionItemErc721Token>;
  auctions: Array<Auction>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  considerationItem?: Maybe<ConsiderationItem>;
  considerationItems: Array<ConsiderationItem>;
  curationListing?: Maybe<CurationListing>;
  curationListings: Array<CurationListing>;
  curationStorefront?: Maybe<CurationStorefront>;
  curationStorefronts: Array<CurationStorefront>;
  curator?: Maybe<Curator>;
  curatorAction?: Maybe<CuratorAction>;
  curatorActions: Array<CuratorAction>;
  curators: Array<Curator>;
  disputeRemoved?: Maybe<DisputeRemoved>;
  disputeRemoveds: Array<DisputeRemoved>;
  disputeResolved?: Maybe<DisputeResolved>;
  disputeResolveds: Array<DisputeResolved>;
  disputed?: Maybe<Disputed>;
  disputeds: Array<Disputed>;
  encryptedMessage?: Maybe<EncryptedMessage>;
  encryptedMessages: Array<EncryptedMessage>;
  erc1155ContractMetadata?: Maybe<Erc1155ContractMetadata>;
  erc1155ContractMetadata_collection: Array<Erc1155ContractMetadata>;
  erc1155TokenMetadata?: Maybe<Erc1155TokenMetadata>;
  erc1155TokenMetadata_collection: Array<Erc1155TokenMetadata>;
  escapeAddressSet?: Maybe<EscapeAddressSet>;
  escapeAddressSets: Array<EscapeAddressSet>;
  escaped?: Maybe<Escaped>;
  escapeds: Array<Escaped>;
  offerItem?: Maybe<OfferItem>;
  offerItems: Array<OfferItem>;
  order?: Maybe<Order>;
  orderEscrow?: Maybe<OrderEscrow>;
  orderEscrows: Array<OrderEscrow>;
  orderFulfilled?: Maybe<OrderFulfilled>;
  orderFulfilleds: Array<OrderFulfilled>;
  orderPayment?: Maybe<OrderPayment>;
  orderPayments: Array<OrderPayment>;
  orders: Array<Order>;
  premiumPayment?: Maybe<PremiumPayment>;
  premiumPayments: Array<PremiumPayment>;
  refunded?: Maybe<Refunded>;
  refundeds: Array<Refunded>;
  review?: Maybe<Review>;
  reviewSearch: Array<Review>;
  reviews: Array<Review>;
  saleAttestation?: Maybe<SaleAttestation>;
  saleAttestations: Array<SaleAttestation>;
  settled?: Maybe<Settled>;
  settleds: Array<Settled>;
  storefront?: Maybe<Storefront>;
  storefronts: Array<Storefront>;
  tokenListing?: Maybe<TokenListing>;
  tokenListings: Array<TokenListing>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryArbiterChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryArbiterChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ArbiterChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ArbiterChange_Filter>;
};

export type QueryAuctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAuctionHouseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAuctionHousesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuctionHouse_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionHouse_Filter>;
};

export type QueryAuctionItemErc721Args = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAuctionItemErc721MetadataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAuctionItemErc721Metadata_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuctionItemErc721Metadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionItemErc721Metadata_Filter>;
};

export type QueryAuctionItemErc721SArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuctionItemErc721_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionItemErc721_Filter>;
};

export type QueryAuctionItemErc721TokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAuctionItemErc721TokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuctionItemErc721Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionItemErc721Token_Filter>;
};

export type QueryAuctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Auction_Filter>;
};

export type QueryBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bid_Filter>;
};

export type QueryConsiderationItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryConsiderationItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ConsiderationItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ConsiderationItem_Filter>;
};

export type QueryCurationListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCurationListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CurationListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurationListing_Filter>;
};

export type QueryCurationStorefrontArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCurationStorefrontsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CurationStorefront_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurationStorefront_Filter>;
};

export type QueryCuratorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCuratorActionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCuratorActionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CuratorAction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CuratorAction_Filter>;
};

export type QueryCuratorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Curator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Curator_Filter>;
};

export type QueryDisputeRemovedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDisputeRemovedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<DisputeRemoved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DisputeRemoved_Filter>;
};

export type QueryDisputeResolvedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDisputeResolvedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<DisputeResolved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DisputeResolved_Filter>;
};

export type QueryDisputedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDisputedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Disputed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Disputed_Filter>;
};

export type QueryEncryptedMessageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEncryptedMessagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EncryptedMessage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EncryptedMessage_Filter>;
};

export type QueryErc1155ContractMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc1155ContractMetadata_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Erc1155ContractMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155ContractMetadata_Filter>;
};

export type QueryErc1155TokenMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc1155TokenMetadata_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Erc1155TokenMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155TokenMetadata_Filter>;
};

export type QueryEscapeAddressSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEscapeAddressSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EscapeAddressSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EscapeAddressSet_Filter>;
};

export type QueryEscapedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEscapedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Escaped_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Escaped_Filter>;
};

export type QueryOfferItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOfferItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OfferItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OfferItem_Filter>;
};

export type QueryOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrderEscrowArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrderEscrowsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrderEscrow_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrderEscrow_Filter>;
};

export type QueryOrderFulfilledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrderFulfilledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrderFulfilled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrderFulfilled_Filter>;
};

export type QueryOrderPaymentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrderPaymentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrderPayment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrderPayment_Filter>;
};

export type QueryOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Order_Filter>;
};

export type QueryPremiumPaymentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPremiumPaymentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PremiumPayment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PremiumPayment_Filter>;
};

export type QueryRefundedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRefundedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Refunded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Refunded_Filter>;
};

export type QueryReviewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryReviewSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars["String"]["input"];
  where?: InputMaybe<Review_Filter>;
};

export type QueryReviewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Review_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Review_Filter>;
};

export type QuerySaleAttestationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySaleAttestationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<SaleAttestation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SaleAttestation_Filter>;
};

export type QuerySettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Settled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Settled_Filter>;
};

export type QueryStorefrontArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryStorefrontsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Storefront_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Storefront_Filter>;
};

export type QueryTokenListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenListing_Filter>;
};

export type Refunded = {
  __typename?: "Refunded";
  amount: Scalars["BigInt"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  escrow: OrderEscrow;
  id: Scalars["ID"]["output"];
  to: Scalars["Bytes"]["output"];
  token: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type Refunded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Refunded_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  escrow?: InputMaybe<Scalars["String"]["input"]>;
  escrow_?: InputMaybe<OrderEscrow_Filter>;
  escrow_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_lt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_lte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Refunded_Filter>>>;
  to?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  token?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  token_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum Refunded_OrderBy {
  Amount = "amount",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Escrow = "escrow",
  EscrowAffiliate = "escrow__affiliate",
  EscrowAffiliateShare = "escrow__affiliateShare",
  EscrowArbiter = "escrow__arbiter",
  EscrowBlockNumber = "escrow__blockNumber",
  EscrowBlockTimestamp = "escrow__blockTimestamp",
  EscrowEscrowAddress = "escrow__escrowAddress",
  EscrowId = "escrow__id",
  EscrowIsDisputed = "escrow__isDisputed",
  EscrowIsRefunded = "escrow__isRefunded",
  EscrowPayee = "escrow__payee",
  EscrowSourceAddress = "escrow__sourceAddress",
  EscrowSourceType = "escrow__sourceType",
  EscrowTransactionHash = "escrow__transactionHash",
  Id = "id",
  To = "to",
  Token = "token",
  TransactionHash = "transactionHash",
}

export type Review = {
  __typename?: "Review";
  asDescribed: Scalars["Boolean"]["output"];
  attestationTxHash: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  communicationRating: Scalars["Int"]["output"];
  deliveryRating: Scalars["Int"]["output"];
  id: Scalars["Bytes"]["output"];
  overallRating: Scalars["Int"]["output"];
  packagingRating: Scalars["Int"]["output"];
  qualityRating: Scalars["Int"]["output"];
  reviewText: Scalars["String"]["output"];
  reviewType: Scalars["String"]["output"];
  reviewer: Scalars["Bytes"]["output"];
  saleAttestation: SaleAttestation;
  storefront: Storefront;
  timestamp: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type Review_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Review_Filter>>>;
  asDescribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  asDescribed_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  asDescribed_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  asDescribed_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  attestationTxHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  attestationTxHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  communicationRating?: InputMaybe<Scalars["Int"]["input"]>;
  communicationRating_gt?: InputMaybe<Scalars["Int"]["input"]>;
  communicationRating_gte?: InputMaybe<Scalars["Int"]["input"]>;
  communicationRating_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  communicationRating_lt?: InputMaybe<Scalars["Int"]["input"]>;
  communicationRating_lte?: InputMaybe<Scalars["Int"]["input"]>;
  communicationRating_not?: InputMaybe<Scalars["Int"]["input"]>;
  communicationRating_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  deliveryRating?: InputMaybe<Scalars["Int"]["input"]>;
  deliveryRating_gt?: InputMaybe<Scalars["Int"]["input"]>;
  deliveryRating_gte?: InputMaybe<Scalars["Int"]["input"]>;
  deliveryRating_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  deliveryRating_lt?: InputMaybe<Scalars["Int"]["input"]>;
  deliveryRating_lte?: InputMaybe<Scalars["Int"]["input"]>;
  deliveryRating_not?: InputMaybe<Scalars["Int"]["input"]>;
  deliveryRating_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Review_Filter>>>;
  overallRating?: InputMaybe<Scalars["Int"]["input"]>;
  overallRating_gt?: InputMaybe<Scalars["Int"]["input"]>;
  overallRating_gte?: InputMaybe<Scalars["Int"]["input"]>;
  overallRating_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  overallRating_lt?: InputMaybe<Scalars["Int"]["input"]>;
  overallRating_lte?: InputMaybe<Scalars["Int"]["input"]>;
  overallRating_not?: InputMaybe<Scalars["Int"]["input"]>;
  overallRating_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  packagingRating?: InputMaybe<Scalars["Int"]["input"]>;
  packagingRating_gt?: InputMaybe<Scalars["Int"]["input"]>;
  packagingRating_gte?: InputMaybe<Scalars["Int"]["input"]>;
  packagingRating_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  packagingRating_lt?: InputMaybe<Scalars["Int"]["input"]>;
  packagingRating_lte?: InputMaybe<Scalars["Int"]["input"]>;
  packagingRating_not?: InputMaybe<Scalars["Int"]["input"]>;
  packagingRating_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  qualityRating?: InputMaybe<Scalars["Int"]["input"]>;
  qualityRating_gt?: InputMaybe<Scalars["Int"]["input"]>;
  qualityRating_gte?: InputMaybe<Scalars["Int"]["input"]>;
  qualityRating_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  qualityRating_lt?: InputMaybe<Scalars["Int"]["input"]>;
  qualityRating_lte?: InputMaybe<Scalars["Int"]["input"]>;
  qualityRating_not?: InputMaybe<Scalars["Int"]["input"]>;
  qualityRating_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  reviewText?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_contains?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_gt?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_gte?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  reviewText_lt?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_lte?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_not?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  reviewText_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  reviewText_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reviewType?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_contains?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_gt?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_gte?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  reviewType_lt?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_lte?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_not?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  reviewType_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  reviewType_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reviewer?: InputMaybe<Scalars["Bytes"]["input"]>;
  reviewer_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  reviewer_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  reviewer_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  reviewer_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  reviewer_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  reviewer_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  reviewer_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  reviewer_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  reviewer_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  saleAttestation?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_?: InputMaybe<SaleAttestation_Filter>;
  saleAttestation_contains?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_gt?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_gte?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  saleAttestation_lt?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_lte?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_not?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  saleAttestation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  saleAttestation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  saleAttestation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront?: InputMaybe<Scalars["String"]["input"]>;
  storefront_?: InputMaybe<Storefront_Filter>;
  storefront_contains?: InputMaybe<Scalars["String"]["input"]>;
  storefront_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  storefront_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_gt?: InputMaybe<Scalars["String"]["input"]>;
  storefront_gte?: InputMaybe<Scalars["String"]["input"]>;
  storefront_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  storefront_lt?: InputMaybe<Scalars["String"]["input"]>;
  storefront_lte?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  storefront_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  storefront_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum Review_OrderBy {
  AsDescribed = "asDescribed",
  AttestationTxHash = "attestationTxHash",
  BlockNumber = "blockNumber",
  CommunicationRating = "communicationRating",
  DeliveryRating = "deliveryRating",
  Id = "id",
  OverallRating = "overallRating",
  PackagingRating = "packagingRating",
  QualityRating = "qualityRating",
  ReviewText = "reviewText",
  ReviewType = "reviewType",
  Reviewer = "reviewer",
  SaleAttestation = "saleAttestation",
  SaleAttestationAttestationFee = "saleAttestation__attestationFee",
  SaleAttestationAttestationTxHash = "saleAttestation__attestationTxHash",
  SaleAttestationBlockNumber = "saleAttestation__blockNumber",
  SaleAttestationBuyer = "saleAttestation__buyer",
  SaleAttestationId = "saleAttestation__id",
  SaleAttestationIsLatest = "saleAttestation__isLatest",
  SaleAttestationSeller = "saleAttestation__seller",
  SaleAttestationStorefront = "saleAttestation__storefront",
  SaleAttestationStorefrontContract = "saleAttestation__storefrontContract",
  SaleAttestationTimestamp = "saleAttestation__timestamp",
  SaleAttestationTransactionHash = "saleAttestation__transactionHash",
  Storefront = "storefront",
  StorefrontAffiliateVerifier = "storefront__affiliateVerifier",
  StorefrontArbiter = "storefront__arbiter",
  StorefrontContractUri = "storefront__contractURI",
  StorefrontCreatedAt = "storefront__createdAt",
  StorefrontCreatedAtBlock = "storefront__createdAtBlock",
  StorefrontCreationTx = "storefront__creationTx",
  StorefrontErc1155Token = "storefront__erc1155Token",
  StorefrontEscrowFactory = "storefront__escrowFactory",
  StorefrontId = "storefront__id",
  StorefrontIsAffiliateEnabled = "storefront__isAffiliateEnabled",
  StorefrontMinSettleTime = "storefront__minSettleTime",
  StorefrontOwner = "storefront__owner",
  StorefrontReady = "storefront__ready",
  StorefrontReviewCount = "storefront__reviewCount",
  StorefrontSeaport = "storefront__seaport",
  StorefrontSettleDeadline = "storefront__settleDeadline",
  StorefrontStorefrontAddress = "storefront__storefrontAddress",
  StorefrontTotalRating = "storefront__totalRating",
  Timestamp = "timestamp",
  TransactionHash = "transactionHash",
}

export type SaleAttestation = {
  __typename?: "SaleAttestation";
  attestationFee?: Maybe<Scalars["BigInt"]["output"]>;
  attestationTxHash: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  buyer: Scalars["Bytes"]["output"];
  escrowContract: OrderEscrow;
  id: Scalars["Bytes"]["output"];
  isLatest: Scalars["Boolean"]["output"];
  order: Order;
  reviews: Array<Review>;
  seller: Scalars["Bytes"]["output"];
  storefront: Scalars["Bytes"]["output"];
  storefrontContract: Scalars["Bytes"]["output"];
  timestamp: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type SaleAttestationReviewsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Review_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Review_Filter>;
};

export type SaleAttestation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SaleAttestation_Filter>>>;
  attestationFee?: InputMaybe<Scalars["BigInt"]["input"]>;
  attestationFee_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  attestationFee_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  attestationFee_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  attestationFee_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  attestationFee_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  attestationFee_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  attestationFee_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  attestationTxHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  attestationTxHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  attestationTxHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  buyer?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  buyer_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  escrowContract?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_?: InputMaybe<OrderEscrow_Filter>;
  escrowContract_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_gt?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_gte?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrowContract_lt?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_lte?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_not?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrowContract_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  escrowContract_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrowContract_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  isLatest?: InputMaybe<Scalars["Boolean"]["input"]>;
  isLatest_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isLatest_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isLatest_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<SaleAttestation_Filter>>>;
  order?: InputMaybe<Scalars["String"]["input"]>;
  order_?: InputMaybe<Order_Filter>;
  order_contains?: InputMaybe<Scalars["String"]["input"]>;
  order_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  order_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  order_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  order_gt?: InputMaybe<Scalars["String"]["input"]>;
  order_gte?: InputMaybe<Scalars["String"]["input"]>;
  order_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  order_lt?: InputMaybe<Scalars["String"]["input"]>;
  order_lte?: InputMaybe<Scalars["String"]["input"]>;
  order_not?: InputMaybe<Scalars["String"]["input"]>;
  order_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  order_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  order_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  order_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  order_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  order_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  order_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  order_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  order_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reviews_?: InputMaybe<Review_Filter>;
  seller?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  seller_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  storefront?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontContract?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontContract_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontContract_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontContract_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontContract_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  storefrontContract_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontContract_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontContract_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontContract_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontContract_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  storefront_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  storefront_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefront_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum SaleAttestation_OrderBy {
  AttestationFee = "attestationFee",
  AttestationTxHash = "attestationTxHash",
  BlockNumber = "blockNumber",
  Buyer = "buyer",
  EscrowContract = "escrowContract",
  EscrowContractAffiliate = "escrowContract__affiliate",
  EscrowContractAffiliateShare = "escrowContract__affiliateShare",
  EscrowContractArbiter = "escrowContract__arbiter",
  EscrowContractBlockNumber = "escrowContract__blockNumber",
  EscrowContractBlockTimestamp = "escrowContract__blockTimestamp",
  EscrowContractEscrowAddress = "escrowContract__escrowAddress",
  EscrowContractId = "escrowContract__id",
  EscrowContractIsDisputed = "escrowContract__isDisputed",
  EscrowContractIsRefunded = "escrowContract__isRefunded",
  EscrowContractPayee = "escrowContract__payee",
  EscrowContractSourceAddress = "escrowContract__sourceAddress",
  EscrowContractSourceType = "escrowContract__sourceType",
  EscrowContractTransactionHash = "escrowContract__transactionHash",
  Id = "id",
  IsLatest = "isLatest",
  Order = "order",
  OrderAffiliate = "order__affiliate",
  OrderAffiliateShare = "order__affiliateShare",
  OrderAmount = "order__amount",
  OrderBlockNumber = "order__blockNumber",
  OrderBuyer = "order__buyer",
  OrderEscrowContract = "order__escrowContract",
  OrderId = "order__id",
  OrderLatestAttestationId = "order__latestAttestationId",
  OrderLatestAttestationTimestamp = "order__latestAttestationTimestamp",
  OrderSeller = "order__seller",
  OrderTimestamp = "order__timestamp",
  OrderTokenId = "order__tokenId",
  Reviews = "reviews",
  Seller = "seller",
  Storefront = "storefront",
  StorefrontContract = "storefrontContract",
  Timestamp = "timestamp",
  TransactionHash = "transactionHash",
}

export type Settled = {
  __typename?: "Settled";
  amount: Scalars["BigInt"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  escrow: OrderEscrow;
  id: Scalars["ID"]["output"];
  to: Scalars["Bytes"]["output"];
  token: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type Settled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Settled_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  escrow?: InputMaybe<Scalars["String"]["input"]>;
  escrow_?: InputMaybe<OrderEscrow_Filter>;
  escrow_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_gte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_lt?: InputMaybe<Scalars["String"]["input"]>;
  escrow_lte?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  escrow_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  escrow_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Settled_Filter>>>;
  to?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  token?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  token_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum Settled_OrderBy {
  Amount = "amount",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Escrow = "escrow",
  EscrowAffiliate = "escrow__affiliate",
  EscrowAffiliateShare = "escrow__affiliateShare",
  EscrowArbiter = "escrow__arbiter",
  EscrowBlockNumber = "escrow__blockNumber",
  EscrowBlockTimestamp = "escrow__blockTimestamp",
  EscrowEscrowAddress = "escrow__escrowAddress",
  EscrowId = "escrow__id",
  EscrowIsDisputed = "escrow__isDisputed",
  EscrowIsRefunded = "escrow__isRefunded",
  EscrowPayee = "escrow__payee",
  EscrowSourceAddress = "escrow__sourceAddress",
  EscrowSourceType = "escrow__sourceType",
  EscrowTransactionHash = "escrow__transactionHash",
  Id = "id",
  To = "to",
  Token = "token",
  TransactionHash = "transactionHash",
}

export type Storefront = {
  __typename?: "Storefront";
  affiliateVerifier?: Maybe<Scalars["Bytes"]["output"]>;
  arbiter: Scalars["Bytes"]["output"];
  contractMetadata?: Maybe<Erc1155ContractMetadata>;
  contractURI?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["BigInt"]["output"];
  createdAtBlock: Scalars["BigInt"]["output"];
  creationTx: Scalars["Bytes"]["output"];
  erc1155Token: Scalars["Bytes"]["output"];
  escrowFactory: Scalars["Bytes"]["output"];
  id: Scalars["Bytes"]["output"];
  isAffiliateEnabled: Scalars["Boolean"]["output"];
  listings: Array<TokenListing>;
  minSettleTime: Scalars["BigInt"]["output"];
  orders: Array<Order>;
  owner: Scalars["Bytes"]["output"];
  ready: Scalars["Boolean"]["output"];
  reviewCount: Scalars["BigInt"]["output"];
  reviews: Array<Review>;
  seaport: Scalars["Bytes"]["output"];
  settleDeadline: Scalars["BigInt"]["output"];
  storefrontAddress: Scalars["Bytes"]["output"];
  totalRating: Scalars["BigInt"]["output"];
};

export type StorefrontListingsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TokenListing_Filter>;
};

export type StorefrontOrdersArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Order_Filter>;
};

export type StorefrontReviewsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Review_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Review_Filter>;
};

export type Storefront_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  affiliateVerifier?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliateVerifier_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliateVerifier_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliateVerifier_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliateVerifier_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  affiliateVerifier_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliateVerifier_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliateVerifier_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliateVerifier_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  affiliateVerifier_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Storefront_Filter>>>;
  arbiter?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  arbiter_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  arbiter_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  contractMetadata?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_?: InputMaybe<Erc1155ContractMetadata_Filter>;
  contractMetadata_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_gt?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_gte?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractMetadata_lt?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_lte?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  contractMetadata_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractMetadata_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  contractMetadata_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractURI_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAtBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  creationTx?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  creationTx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  erc1155Token?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  erc1155Token_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  erc1155Token_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  escrowFactory?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowFactory_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowFactory_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowFactory_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowFactory_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  escrowFactory_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowFactory_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowFactory_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowFactory_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  escrowFactory_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  isAffiliateEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  isAffiliateEnabled_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isAffiliateEnabled_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isAffiliateEnabled_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  listings_?: InputMaybe<TokenListing_Filter>;
  minSettleTime?: InputMaybe<Scalars["BigInt"]["input"]>;
  minSettleTime_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  minSettleTime_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  minSettleTime_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  minSettleTime_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  minSettleTime_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  minSettleTime_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  minSettleTime_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Storefront_Filter>>>;
  orders_?: InputMaybe<Order_Filter>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  ready?: InputMaybe<Scalars["Boolean"]["input"]>;
  ready_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  ready_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  ready_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  reviewCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  reviewCount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  reviewCount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  reviewCount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  reviewCount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  reviewCount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  reviewCount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  reviewCount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  reviews_?: InputMaybe<Review_Filter>;
  seaport?: InputMaybe<Scalars["Bytes"]["input"]>;
  seaport_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seaport_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seaport_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seaport_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  seaport_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seaport_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seaport_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  seaport_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seaport_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  settleDeadline?: InputMaybe<Scalars["BigInt"]["input"]>;
  settleDeadline_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  settleDeadline_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  settleDeadline_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  settleDeadline_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  settleDeadline_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  settleDeadline_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  settleDeadline_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  storefrontAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  storefrontAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  storefrontAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  totalRating?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalRating_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalRating_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalRating_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalRating_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalRating_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalRating_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalRating_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum Storefront_OrderBy {
  AffiliateVerifier = "affiliateVerifier",
  Arbiter = "arbiter",
  ContractMetadata = "contractMetadata",
  ContractMetadataDescription = "contractMetadata__description",
  ContractMetadataExternalLink = "contractMetadata__externalLink",
  ContractMetadataId = "contractMetadata__id",
  ContractMetadataImage = "contractMetadata__image",
  ContractMetadataName = "contractMetadata__name",
  ContractMetadataRawJson = "contractMetadata__rawJson",
  ContractUri = "contractURI",
  CreatedAt = "createdAt",
  CreatedAtBlock = "createdAtBlock",
  CreationTx = "creationTx",
  Erc1155Token = "erc1155Token",
  EscrowFactory = "escrowFactory",
  Id = "id",
  IsAffiliateEnabled = "isAffiliateEnabled",
  Listings = "listings",
  MinSettleTime = "minSettleTime",
  Orders = "orders",
  Owner = "owner",
  Ready = "ready",
  ReviewCount = "reviewCount",
  Reviews = "reviews",
  Seaport = "seaport",
  SettleDeadline = "settleDeadline",
  StorefrontAddress = "storefrontAddress",
  TotalRating = "totalRating",
}

export type TokenListing = {
  __typename?: "TokenListing";
  active: Scalars["Boolean"]["output"];
  affiliateFee: Scalars["Int"]["output"];
  contractMetadata?: Maybe<Erc1155ContractMetadata>;
  contractURI?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["BigInt"]["output"];
  createdAtBlock: Scalars["BigInt"]["output"];
  creationTx: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  lastUpdateAt: Scalars["BigInt"]["output"];
  lastUpdateTx: Scalars["Bytes"]["output"];
  listingTime: Scalars["BigInt"]["output"];
  paymentToken: Scalars["Bytes"]["output"];
  price: Scalars["BigInt"]["output"];
  storefront: Storefront;
  tokenId: Scalars["BigInt"]["output"];
  tokenMetadata?: Maybe<Erc1155TokenMetadata>;
  tokenURI?: Maybe<Scalars["String"]["output"]>;
};

export type TokenListing_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  active_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  active_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  active_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  affiliateFee?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_gt?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_gte?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  affiliateFee_lt?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_lte?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_not?: InputMaybe<Scalars["Int"]["input"]>;
  affiliateFee_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<TokenListing_Filter>>>;
  contractMetadata?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_?: InputMaybe<Erc1155ContractMetadata_Filter>;
  contractMetadata_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_gt?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_gte?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractMetadata_lt?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_lte?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  contractMetadata_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractMetadata_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  contractMetadata_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractMetadata_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contractURI_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  contractURI_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAtBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  creationTx?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  creationTx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creationTx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  lastUpdateAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdateAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdateAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdateAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdateAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdateAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdateAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdateAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdateTx?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdateTx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdateTx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdateTx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdateTx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lastUpdateTx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdateTx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdateTx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdateTx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdateTx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  listingTime?: InputMaybe<Scalars["BigInt"]["input"]>;
  listingTime_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  listingTime_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  listingTime_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  listingTime_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  listingTime_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  listingTime_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  listingTime_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TokenListing_Filter>>>;
  paymentToken?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  paymentToken_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  paymentToken_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  price?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  price_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  storefront?: InputMaybe<Scalars["String"]["input"]>;
  storefront_?: InputMaybe<Storefront_Filter>;
  storefront_contains?: InputMaybe<Scalars["String"]["input"]>;
  storefront_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  storefront_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_gt?: InputMaybe<Scalars["String"]["input"]>;
  storefront_gte?: InputMaybe<Scalars["String"]["input"]>;
  storefront_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  storefront_lt?: InputMaybe<Scalars["String"]["input"]>;
  storefront_lte?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  storefront_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  storefront_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  storefront_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  storefront_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenMetadata?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_?: InputMaybe<Erc1155TokenMetadata_Filter>;
  tokenMetadata_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenMetadata_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenMetadata_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenMetadata_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenURI_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum TokenListing_OrderBy {
  Active = "active",
  AffiliateFee = "affiliateFee",
  ContractMetadata = "contractMetadata",
  ContractMetadataDescription = "contractMetadata__description",
  ContractMetadataExternalLink = "contractMetadata__externalLink",
  ContractMetadataId = "contractMetadata__id",
  ContractMetadataImage = "contractMetadata__image",
  ContractMetadataName = "contractMetadata__name",
  ContractMetadataRawJson = "contractMetadata__rawJson",
  ContractUri = "contractURI",
  CreatedAt = "createdAt",
  CreatedAtBlock = "createdAtBlock",
  CreationTx = "creationTx",
  Id = "id",
  LastUpdateAt = "lastUpdateAt",
  LastUpdateTx = "lastUpdateTx",
  ListingTime = "listingTime",
  PaymentToken = "paymentToken",
  Price = "price",
  Storefront = "storefront",
  StorefrontAffiliateVerifier = "storefront__affiliateVerifier",
  StorefrontArbiter = "storefront__arbiter",
  StorefrontContractUri = "storefront__contractURI",
  StorefrontCreatedAt = "storefront__createdAt",
  StorefrontCreatedAtBlock = "storefront__createdAtBlock",
  StorefrontCreationTx = "storefront__creationTx",
  StorefrontErc1155Token = "storefront__erc1155Token",
  StorefrontEscrowFactory = "storefront__escrowFactory",
  StorefrontId = "storefront__id",
  StorefrontIsAffiliateEnabled = "storefront__isAffiliateEnabled",
  StorefrontMinSettleTime = "storefront__minSettleTime",
  StorefrontOwner = "storefront__owner",
  StorefrontReady = "storefront__ready",
  StorefrontReviewCount = "storefront__reviewCount",
  StorefrontSeaport = "storefront__seaport",
  StorefrontSettleDeadline = "storefront__settleDeadline",
  StorefrontStorefrontAddress = "storefront__storefrontAddress",
  StorefrontTotalRating = "storefront__totalRating",
  TokenId = "tokenId",
  TokenMetadata = "tokenMetadata",
  TokenMetadataId = "tokenMetadata__id",
  TokenMetadataRawEncodedJson = "tokenMetadata__rawEncodedJson",
  TokenMetadataRawJson = "tokenMetadata__rawJson",
  TokenUri = "tokenURI",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]["output"]>;
  /** The block number */
  number: Scalars["Int"]["output"];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars["Bytes"]["output"]>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]["output"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"]["output"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"]["output"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type GetActiveAuctionsQueryVariables = Exact<{
  currentTimeEpoch?: InputMaybe<Scalars["BigInt"]["input"]>;
}>;

export type GetActiveAuctionsQuery = {
  __typename?: "Query";
  auctions: Array<{
    __typename?: "Auction";
    id: string;
    auctionId: any;
    tokenId: any;
    tokenContract: any;
    status: AuctionStatus;
    reservePrice: any;
    highestBidAmount: any;
    currentBidder?: any | null;
    endTime: any;
    startTime: any;
    auctionOwner: any;
    isPremiumAuction: boolean;
    premiumBps: number;
    tokenReference?: {
      __typename?: "AuctionItemERC721Token";
      metadata?: {
        __typename?: "AuctionItemERC721Metadata";
        name?: string | null;
        description?: string | null;
        image?: string | null;
      } | null;
    } | null;
    bids: Array<{
      __typename?: "Bid";
      bidder: any;
      amount: any;
      timestamp: any;
    }>;
  }>;
};

export type GetAuctionHousesByOwnerQueryVariables = Exact<{
  ownerAddress: Scalars["Bytes"]["input"];
}>;

export type GetAuctionHousesByOwnerQuery = {
  __typename?: "Query";
  auctionHouses: Array<{
    __typename?: "AuctionHouse";
    name: string;
    auctionHouseAddress: any;
    description: string;
    image: string;
    auctions: Array<{
      __typename?: "Auction";
      id: string;
      auctionId: any;
      tokenId: any;
      tokenContract: any;
      status: AuctionStatus;
      reservePrice: any;
      highestBidAmount: any;
      currentBidder?: any | null;
      endTime: any;
      startTime: any;
      auctionOwner: any;
      isPremiumAuction: boolean;
      premiumBps: number;
      tokenReference?: {
        __typename?: "AuctionItemERC721Token";
        metadata?: {
          __typename?: "AuctionItemERC721Metadata";
          name?: string | null;
          description?: string | null;
          image?: string | null;
        } | null;
      } | null;
      bids: Array<{
        __typename?: "Bid";
        bidder: any;
        amount: any;
        timestamp: any;
      }>;
    }>;
  }>;
};

export type GetAuctionsByAuctionHouseAddressQueryVariables = Exact<{
  auctionHouseAddress: Scalars["ID"]["input"];
}>;

export type GetAuctionsByAuctionHouseAddressQuery = {
  __typename?: "Query";
  auctionHouse?: {
    __typename?: "AuctionHouse";
    name: string;
    auctions: Array<{
      __typename?: "Auction";
      id: string;
      auctionId: any;
      tokenId: any;
      tokenContract: any;
      status: AuctionStatus;
      reservePrice: any;
      highestBidAmount: any;
      currentBidder?: any | null;
      minBidIncrementBps: number;
      endTime: any;
      startTime: any;
      auctionOwner: any;
      isPremiumAuction: boolean;
      premiumBps: number;
      tokenReference?: {
        __typename?: "AuctionItemERC721Token";
        metadata?: {
          __typename?: "AuctionItemERC721Metadata";
          name?: string | null;
          description?: string | null;
          image?: string | null;
        } | null;
      } | null;
      bids: Array<{
        __typename?: "Bid";
        bidder: any;
        amount: any;
        timestamp: any;
      }>;
    }>;
  } | null;
};

export type GetAuctionsByStatusQueryVariables = Exact<{
  status?: InputMaybe<AuctionStatus>;
}>;

export type GetAuctionsByStatusQuery = {
  __typename?: "Query";
  auctions: Array<{
    __typename?: "Auction";
    id: string;
    auctionId: any;
    tokenId: any;
    tokenContract: any;
    status: AuctionStatus;
    reservePrice: any;
    highestBidAmount: any;
    currentBidder?: any | null;
    minBidIncrementBps: number;
    endTime: any;
    startTime: any;
    auctionOwner: any;
    isPremiumAuction: boolean;
    premiumBps: number;
    tokenReference?: {
      __typename?: "AuctionItemERC721Token";
      metadata?: {
        __typename?: "AuctionItemERC721Metadata";
        name?: string | null;
        description?: string | null;
        image?: string | null;
      } | null;
    } | null;
    bids: Array<{
      __typename?: "Bid";
      bidder: any;
      amount: any;
      timestamp: any;
    }>;
  }>;
};

export type GetEndedAuctionsQueryVariables = Exact<{
  currentTimeEpoch: Scalars["BigInt"]["input"];
}>;

export type GetEndedAuctionsQuery = {
  __typename?: "Query";
  auctions: Array<{
    __typename?: "Auction";
    id: string;
    auctionId: any;
    tokenId: any;
    tokenContract: any;
    status: AuctionStatus;
    reservePrice: any;
    highestBidAmount: any;
    currentBidder?: any | null;
    endTime: any;
    startTime: any;
    auctionOwner: any;
    isPremiumAuction: boolean;
    premiumBps: number;
    tokenReference?: {
      __typename?: "AuctionItemERC721Token";
      metadata?: {
        __typename?: "AuctionItemERC721Metadata";
        name?: string | null;
        description?: string | null;
        image?: string | null;
      } | null;
    } | null;
    bids: Array<{
      __typename?: "Bid";
      bidder: any;
      amount: any;
      timestamp: any;
    }>;
  }>;
};

export type GetAuctionByAuctionIdQueryVariables = Exact<{
  auctionID: Scalars["ID"]["input"];
}>;

export type GetAuctionByAuctionIdQuery = {
  __typename?: "Query";
  auction?: {
    __typename?: "Auction";
    id: string;
    auctionId: any;
    tokenId: any;
    tokenContract: any;
    status: AuctionStatus;
    reservePrice: any;
    highestBidAmount: any;
    currentBidder?: any | null;
    minBidIncrementBps: number;
    endTime: any;
    startTime: any;
    auctionOwner: any;
    isPremiumAuction: boolean;
    premiumBps: number;
    auctionHouse: { __typename?: "AuctionHouse"; auctionHouseAddress: any };
    tokenReference?: {
      __typename?: "AuctionItemERC721Token";
      metadata?: {
        __typename?: "AuctionItemERC721Metadata";
        name?: string | null;
        description?: string | null;
        image?: string | null;
      } | null;
    } | null;
    bids: Array<{
      __typename?: "Bid";
      bidder: any;
      amount: any;
      timestamp: any;
    }>;
  } | null;
};
