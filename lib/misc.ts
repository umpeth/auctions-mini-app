import * as isIPFS from "is-ipfs";

export const dedicatedPinataGateway =
  process.env.NEXT_PUBLIC_GATEWAY_URL || "https://gateway.pinata.cloud";

export const transformIPFSUrl = (url: string): string => {
  // Handle ipfs:// protocol
  if (url.startsWith("ipfs://")) {
    const cid = url.replace("ipfs://", "");
    if (isIPFS.cid(cid)) {
      return `${dedicatedPinataGateway}/ipfs/${cid}`;
    }
  }

  // Handle IPFS gateway URLs
  const ipfsGatewayPattern = /^https:\/\/[^/]+\/ipfs\/([a-zA-Z0-9]+)/;
  const match = url.match(ipfsGatewayPattern);
  if (match && isIPFS.cid(match[1])) {
    return `${dedicatedPinataGateway}/ipfs/${match[1]}`;
  }
  // TODO: need to properly transform supplemental image CID before writing to the contract
  if (isIPFS.cid(url)) {
    return `${dedicatedPinataGateway}/ipfs/${url}`;
  }

  return url;
};
