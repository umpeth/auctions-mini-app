import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useEffect, useState } from "react";
import { useCreateAuctionHouse } from "@/hooks/useCreateAuctionHouse";
import { useAccount } from "wagmi";
import TransactionButton from "@/components/Transaction";
import {
  affiliateEscrowFactoryAddress,
  auctionItemERC721FactoryAddress,
} from "@/lib/consts";
import { RequiredIndicator } from "@/components/ui/requiredIndicator";
import { ImageUpload } from "@/components/ImageUpload";
import * as isIPFS from "is-ipfs";
import { useTrimOnBlur } from "@/hooks/useTrimOnBlur";

export function CreateAuctionHouse() {
  // Form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [customDeadline, setCustomDeadline] = useState("");
  const [auctionHouseAddress, setAuctionHouseAddress] = useState("");
  const [error, setError] = useState("");
  const [contractImageCID, setContractImageCID] = useState("");
  const [cidError, setCidError] = useState<string | null>(null);
  const [useImageUpload, setUseImageUpload] = useState(false);

  const { address, isConnected } = useAccount();

  const handleBlurImageCID = useTrimOnBlur((value) => {
    if (isIPFS.cid(value)) {
      setContractImageCID(value);
      setCidError(null);
    } else {
      setCidError("Invalid IPFS CID");
    }
  });
  const handleBlurName = useTrimOnBlur(setName);
  const handleBlurDescription = useTrimOnBlur(setDescription);
  const handleBlurTokenName = useTrimOnBlur(setTokenName);
  const handleBlurTokenSymbol = useTrimOnBlur(setTokenSymbol);
  const handleBlurCustomDeadline = useTrimOnBlur(setCustomDeadline);

  const {
    createAuctionHouse,
    isError,
    error: createAuctionHouseError,
    hash,
    isLoading,
  } = useCreateAuctionHouse({
    onSuccess: (address) => {
      setAuctionHouseAddress(address);
    },
  });

  useEffect(() => {
    if (isError) {
      console.error(createAuctionHouseError);
      setError(createAuctionHouseError?.message || "An error occurred");
    }
  }, [isError, createAuctionHouseError]);

  // Form submit handler
  const handleSubmit = async () => {
    // Check for required fields
    if (
      !name ||
      !description ||
      !tokenName ||
      !tokenSymbol ||
      !customDeadline ||
      !contractImageCID
    ) {
      setError("All fields are required.");
      return;
    }
    setError("");
    await createAuctionHouse({
      name,
      image: contractImageCID ? `ipfs://${contractImageCID}` : "",
      description,
      symbol: tokenSymbol,
      customDeadline: Number(customDeadline),
      auctionItemFactoryAddress: auctionItemERC721FactoryAddress,
      escrowFactoryAddress: affiliateEscrowFactoryAddress,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create Auction House</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-b pb-4 mb-4">
            <div className="font-bold mb-2">Step 1: Connect Wallet</div>
            <Button variant="default" disabled={isConnected}>
              {isConnected ? "Wallet Connected" : "Connect Wallet"}
            </Button>
            {isConnected && address && (
              <div className="text-green-600 mt-2 break-all">
                Connected: {address}
              </div>
            )}
          </div>
          <div className="mb-6">
            <div className="font-bold mb-4">
              Step 2: Configure Auction House
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">
                    Auction House Name <RequiredIndicator />
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="My Auction House"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={handleBlurName}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">
                    Description <RequiredIndicator />
                  </Label>
                  <Input
                    id="description"
                    type="text"
                    placeholder="Description of your auction house"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onBlur={handleBlurDescription}
                    required
                  />
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <Checkbox
                    id="useImageUpload"
                    checked={useImageUpload}
                    onCheckedChange={(checked) => {
                      setUseImageUpload(checked === true);
                      setCidError(null);
                    }}
                  />
                  <Label htmlFor="useImageUpload">Use image upload</Label>
                </div>

                <div>
                  <Label htmlFor="contractImageCID">Image CID</Label>
                  {useImageUpload ? (
                    <ImageUpload
                      onUploadComplete={(hashes) => {
                        setContractImageCID(hashes[0]);
                        if (isIPFS.cid(hashes[0])) {
                          setCidError(null);
                        } else {
                          setCidError("Invalid IPFS CID");
                        }
                      }}
                      multiple={false}
                    />
                  ) : (
                    <Input
                      type="text"
                      id="contractImageCID"
                      value={contractImageCID}
                      onChange={(e) => setContractImageCID(e.target.value)}
                      onBlur={handleBlurImageCID}
                      placeholder="e.g., QmX...abc"
                      className={cidError ? "border-red-500" : ""}
                    />
                  )}
                  {cidError && (
                    <p className="mt-2 text-sm text-red-600">{cidError}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tokenName">
                    ERC721 Token Name <RequiredIndicator />
                  </Label>
                  <Input
                    type="text"
                    placeholder="Auction Items"
                    value={tokenName}
                    onChange={(e) => setTokenName(e.target.value)}
                    onBlur={handleBlurTokenName}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="tokenSymbol">
                    ERC721 Token Symbol <RequiredIndicator />
                  </Label>
                  <Input
                    id="tokenSymbol"
                    type="text"
                    placeholder="AUCT"
                    value={tokenSymbol}
                    onChange={(e) => setTokenSymbol(e.target.value)}
                    onBlur={handleBlurTokenSymbol}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="customDeadline">
                  Settlement Deadline (days) <RequiredIndicator />
                </Label>
                <Input
                  id="customDeadline"
                  type="number"
                  placeholder="21"
                  min={0}
                  value={customDeadline}
                  onChange={(e) => setCustomDeadline(e.target.value)}
                  onBlur={handleBlurCustomDeadline}
                  required
                />
                <div className="text-xs text-muted-foreground mt-1">
                  Time allowed for dispute resolution after auction ends
                </div>
              </div>
              <div className="pt-4">
                <TransactionButton
                  onClick={handleSubmit}
                  isLoading={isLoading}
                  disabled={isLoading}
                  hash={hash}
                >
                  Create Auction House
                </TransactionButton>
                {error && <div className="text-red-500 mt-2">{error}</div>}
              </div>
            </div>
            {auctionHouseAddress && (
              <div className="text-green-600 mt-2 break-all">
                Auction House Address: {auctionHouseAddress}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
