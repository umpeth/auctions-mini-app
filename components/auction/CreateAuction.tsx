import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { useCreateAuctionWithNewNFT } from "@/hooks/useCreateAuctionWithNewNFT";
import TransactionButton from "@/components/Transaction";

export function CreateAuction() {
  // Form state
  const [auctionHouse, setAuctionHouse] = useState("0xa753377e...");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(""); // For now, just a URL or base64 string
  const [termsOfService, setTermsOfService] = useState("");
  const [supplementalImages, setSupplementalImages] = useState<string[]>([]);
  const [reservePrice, setReservePrice] = useState("");
  const [paymentToken, setPaymentToken] = useState("ETH");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");
  const [affiliateFee, setAffiliateFee] = useState("");
  const [arbiterAddress, setArbiterAddress] = useState("");
  const [timeExtension, setTimeExtension] = useState("");
  const [premium, setPremium] = useState(true);
  const [minBidIncrement, setMinBidIncrement] = useState("");
  const [premiumRate, setPremiumRate] = useState("");
  const [error, setError] = useState("");

  // Result state
  const [result, setResult] = useState<{
    hash: string;
    auctionId: string;
    tokenId: string;
  } | null>(null);

  // Hook
  const {
    createAuctionWithNewNFT,
    hash,
    isError,
    error: createAuctionWithNewNFTError,
    isLoading,
  } = useCreateAuctionWithNewNFT({
    onSuccess: (auctionId, tokenId) => {
      setResult({
        hash: hash || "",
        auctionId: auctionId?.toString() || "",
        tokenId: tokenId?.toString() || "",
      });
    },
  });

  useEffect(() => {
    if (isError) {
      console.error(createAuctionWithNewNFTError);
      setError(createAuctionWithNewNFTError?.message || "An error occurred");
    }
  }, [isError, createAuctionWithNewNFTError]);

  // Helper: map paymentToken label to address
  const paymentTokenAddress = (label: string) => {
    if (label === "ETH") return "0x0000000000000000000000000000000000000000";
    if (label === "USDC") return "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    if (label === "DAI") return "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    return "0x0000000000000000000000000000000000000000";
  };

  // Helper: get decimals for payment token
  const paymentTokenDecimals = (label: string) => {
    if (label === "USDC") return 6;
    return 18; // ETH and DAI
  };

  // Use the entered auctionHouse as the address directly
  const auctionHouseAddress = auctionHouse;

  // Handle form submit
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setResult(null);
    setError("");
    try {
      await createAuctionWithNewNFT({
        auctionHouseAddress: auctionHouseAddress as `0x${string}`,
        metadata: {
          name,
          description,
          image,
          termsOfService,
          supplementalImages,
        },
        startTime: startTime
          ? BigInt(new Date(startTime).getTime() / 1000)
          : BigInt(Math.floor(Date.now() / 1000)),
        reservePrice: BigInt(
          Math.round(
            Number(reservePrice) * 10 ** paymentTokenDecimals(paymentToken),
          ),
        ),
        duration: BigInt(Number(duration) * 3600),
        affiliateFee: Number(affiliateFee),
        arbiterAddress: arbiterAddress as `0x${string}`,
        paymentToken: paymentTokenAddress(paymentToken) as `0x${string}`,
        premium,
        premiumRate: Number(premiumRate),
        minBidIncrement: Math.round(Number(minBidIncrement) * 100),
        timeExtension: Number(timeExtension) * 60,
      });
    } catch {
      // error handled by hook
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create New Auction</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div className="border-b pb-4 mb-4">
              <div className="font-bold mb-2">
                Step 1: Auction House Address
              </div>
              <Input
                type="text"
                placeholder="0x..."
                value={auctionHouse}
                onChange={(e) => setAuctionHouse(e.target.value)}
              />
            </div>
            <div className="border-b pb-4 mb-4">
              <div className="font-bold mb-4">Step 2: NFT Details</div>
              <div className="space-y-4">
                <div>
                  <Label>Item Name</Label>
                  <Input
                    type="text"
                    placeholder="Rare Collectible #42"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    placeholder="Description of the item being auctioned..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Item Image</Label>
                  <div className="border-2 border-dashed border-gray-300 p-8 text-center rounded">
                    <div className="text-gray-500">
                      Upload image or drop file here
                    </div>
                    <Input
                      type="text"
                      placeholder="Image URL"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      className="mt-2"
                    />
                    <Button className="mt-2" variant="secondary" type="button">
                      Browse Files
                    </Button>
                  </div>
                </div>
                <div>
                  <Label>Terms of Service</Label>
                  <Input
                    type="text"
                    placeholder="Item terms & conditions"
                    value={termsOfService}
                    onChange={(e) => setTermsOfService(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Supplemental Images (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded">
                    <div className="text-gray-500 text-sm">
                      Upload additional images (max 5)
                    </div>
                    <Input
                      type="text"
                      placeholder="Comma separated image URLs"
                      value={supplementalImages.join(",")}
                      onChange={(e) =>
                        setSupplementalImages(
                          e.target.value
                            .split(",")
                            .map((s) => s.trim())
                            .filter(Boolean),
                        )
                      }
                      className="mt-2"
                    />
                    <Button className="mt-2" variant="secondary" type="button">
                      Add Images
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="font-bold mb-4">Step 3: Auction Settings</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Reserve Price</Label>
                  <div className="flex">
                    <Input
                      type="number"
                      placeholder="0.5"
                      className="rounded-l"
                      value={reservePrice}
                      onChange={(e) => setReservePrice(e.target.value)}
                    />
                    <select
                      className="p-2 border-t border-r border-b rounded-r bg-gray-50 w-24"
                      value={paymentToken}
                      onChange={(e) => setPaymentToken(e.target.value)}
                    >
                      <option>ETH</option>
                      <option>USDC</option>
                      <option>DAI</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label>Start Time</Label>
                  <Input
                    type="datetime-local"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Duration (hours)</Label>
                  <Input
                    type="number"
                    placeholder="48"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Affiliate Fee (%)</Label>
                  <Input
                    type="number"
                    placeholder="5"
                    value={affiliateFee}
                    onChange={(e) => setAffiliateFee(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Arbiter Address</Label>
                  <Input
                    type="text"
                    placeholder="0x..."
                    value={arbiterAddress}
                    onChange={(e) => setArbiterAddress(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Time Extension (minutes)</Label>
                  <Input
                    type="number"
                    placeholder="5"
                    value={timeExtension}
                    onChange={(e) => setTimeExtension(e.target.value)}
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    Extends auction if bid placed in final minutes
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center">
                  <Input
                    type="checkbox"
                    id="premium"
                    className="mr-2"
                    checked={premium}
                    onChange={(e) => setPremium(e.target.checked)}
                  />
                  <Label htmlFor="premium">Enable Premium Auction</Label>
                </div>
                <div className="ml-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Min Bid Increment (%)</Label>
                    <Input
                      type="number"
                      placeholder="0.5"
                      value={minBidIncrement}
                      onChange={(e) => setMinBidIncrement(e.target.value)}
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      Minimum % increase for new bids
                    </div>
                  </div>
                  <div>
                    <Label>Premium Rate (%)</Label>
                    <Input
                      type="number"
                      placeholder="100"
                      value={premiumRate}
                      onChange={(e) => setPremiumRate(e.target.value)}
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      % of bid increment paid to outbid user
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4">
                <TransactionButton
                  onClick={handleSubmit}
                  isLoading={isLoading}
                  disabled={isLoading}
                  hash={hash}
                >
                  {isLoading ? "Creating..." : "Create Auction"}
                </TransactionButton>
              </div>
              {error && <div className="text-red-600 mt-2">{error}</div>}
            </div>
          </div>
          {result && (
            <div className="bg-muted p-4 rounded border mt-4">
              <div className="font-bold mb-2">Result:</div>
              <div className="flex items-center text-green-600">
                <span className="material-icons mr-2">check_circle</span>
                Auction Created Successfully!
              </div>
              <div className="mt-2 text-sm">
                <div>
                  <span className="font-medium">Transaction Hash:</span>{" "}
                  {result.hash}
                </div>
                <div>
                  <span className="font-medium">Auction ID:</span>{" "}
                  {result.auctionId}
                </div>
                <div>
                  <span className="font-medium">Token ID:</span>{" "}
                  {result.tokenId}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
