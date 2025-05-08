import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { parse } from "graphql";
import { gql } from "graphql-request";
import {
  GetAuctionsByAuctionHouseAddressQuery,
  GetAuctionsByAuctionHouseAddressQueryVariables,
  GetAuctionsByStatusQuery,
  GetAuctionsByStatusQueryVariables,
  GetAuctionByAuctionIdQuery,
  GetAuctionByAuctionIdQueryVariables,
  GetActiveAuctionsQueryVariables,
  GetActiveAuctionsQuery,
} from "./generated";

export const GetAuctionsByAuctionHouseAddressDocument: TypedDocumentNode<
  GetAuctionsByAuctionHouseAddressQuery,
  GetAuctionsByAuctionHouseAddressQueryVariables
> = parse(gql`
  query GetAuctionsByAuctionHouseAddress($auctionHouseAddress: ID!) {
    auctionHouse(id: $auctionHouseAddress) {
      name
      auctions {
        id
        auctionId
        tokenId
        tokenContract
        status
        reservePrice
        highestBidAmount
        currentBidder
        minBidIncrementBps
        endTime
        startTime
        auctionOwner
        isPremiumAuction
        premiumBps
        tokenReference {
          metadata {
            name
            description
            image
          }
        }
        bids(orderBy: timestamp, orderDirection: desc) {
          bidder
          amount
          timestamp
        }
      }
    }
  }
`);

export const GetAuctionsByStatusDocument: TypedDocumentNode<
  GetAuctionsByStatusQuery,
  GetAuctionsByStatusQueryVariables
> = parse(gql`
  query getAuctionsByStatus($status: AuctionStatus) {
    auctions(where: { status: $status }) {
      id
      auctionId
      tokenId
      tokenContract
      status
      reservePrice
      minBidIncrementBps
      highestBidAmount
      currentBidder
      endTime
      startTime
      auctionOwner
      isPremiumAuction
      premiumBps
      tokenReference {
        metadata {
          name
          description
          image
        }
      }
      bids(orderBy: timestamp, orderDirection: desc) {
        bidder
        amount
        timestamp
      }
    }
  }
`);

export const GetAuctionByAuctionIdDocument: TypedDocumentNode<
  GetAuctionByAuctionIdQuery,
  GetAuctionByAuctionIdQueryVariables
> = parse(gql`
  query getAuctionByAuctionID($auctionID: ID!) {
    auction(id: $auctionID) {
      id
      auctionId
      tokenId
      tokenContract
      status
      reservePrice
      highestBidAmount
      currentBidder
      minBidIncrementBps
      endTime
      startTime
      auctionOwner
      isPremiumAuction
      premiumBps
      auctionHouse {
        auctionHouseAddress
      }
      tokenReference {
        metadata {
          name
          description
          image
        }
      }
      bids(orderBy: timestamp, orderDirection: desc) {
        bidder
        amount
        timestamp
      }
    }
  }
`);

export const GetActiveAuctionsDocument: TypedDocumentNode<
  GetActiveAuctionsQuery,
  GetActiveAuctionsQueryVariables
> = parse(gql`
  query getActiveAuctions($status: AuctionStatus, $currentTimeEpoch: BigInt) {
    auctions(where: { status: $status, endTime_gt: $currentTimeEpoch }) {
      id
      auctionId
      tokenId
      tokenContract
      status
      reservePrice
      highestBidAmount
      currentBidder
      minBidIncrementBps
      endTime
      startTime
      auctionOwner
      isPremiumAuction
      premiumBps
      tokenReference {
        metadata {
          name
          description
          image
        }
      }
      bids(orderBy: timestamp, orderDirection: desc) {
        bidder
        amount
        timestamp
      }
    }
  }
`);
