import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { useCreateAuctionHouse } from "@/hooks/useCreateAuctionHouse";
import { useAccount } from "wagmi";
import TransactionButton from "@/components/Transaction";
import {
  affiliateEscrowFactoryAddress,
  auctionItemERC721FactoryAddress,
} from "@/lib/consts";
import { RequiredIndicator } from "@/components/ui/requiredIndicator";

export function CreateAuctionHouse() {
  // Form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [customDeadline, setCustomDeadline] = useState("");
  const [auctionHouseAddress, setAuctionHouseAddress] = useState("");
  const [error, setError] = useState("");

  const { address, isConnected } = useAccount();

  const {
    createAuctionHouse,
    isPending,
    isError,
    error: createAuctionHouseError,
    hash,
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
      !customDeadline
    ) {
      setError("All fields are required.");
      return;
    }
    setError("");
    await createAuctionHouse({
      name,
      image: "", // Add image field if needed
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
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>
                    Auction House Name <RequiredIndicator />
                  </Label>
                  <Input
                    type="text"
                    placeholder="My Auction House"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label>
                    Description <RequiredIndicator />
                  </Label>
                  <Input
                    type="text"
                    placeholder="Description of your auction house"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>
                    ERC721 Token Name <RequiredIndicator />
                  </Label>
                  <Input
                    type="text"
                    placeholder="Auction Items"
                    value={tokenName}
                    onChange={(e) => setTokenName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label>
                    ERC721 Token Symbol <RequiredIndicator />
                  </Label>
                  <Input
                    type="text"
                    placeholder="AUCT"
                    value={tokenSymbol}
                    onChange={(e) => setTokenSymbol(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <Label>
                  Settlement Deadline (days) <RequiredIndicator />
                </Label>
                <Input
                  type="number"
                  placeholder="21"
                  min={0}
                  value={customDeadline}
                  onChange={(e) => setCustomDeadline(e.target.value)}
                  required
                />
                <div className="text-xs text-muted-foreground mt-1">
                  Time allowed for dispute resolution after auction ends
                </div>
              </div>
              <div className="pt-4">
                <TransactionButton
                  onClick={handleSubmit}
                  isLoading={isPending}
                  disabled={isPending}
                  hash={hash}
                >
                  Create Auction House
                </TransactionButton>
                {error && <div className="text-red-500 mt-2">{error}</div>}
              </div>
            </form>
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
