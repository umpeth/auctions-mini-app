import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { parse } from "graphql";
import { gql } from "graphql-request";
import {
  GetAuctionsByAuctionHouseAddressQuery,
  GetAuctionsByAuctionHouseAddressQueryVariables,
  GetAuctionsByStatusQuery,
  GetAuctionsByStatusQueryVariables,
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
        bids(orderBy: timestamp, orderDirection: desc, first: 1) {
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
      bids(orderBy: timestamp, orderDirection: desc, first: 1) {
        bidder
        amount
        timestamp
      }
    }
  }
`);
