import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { useCreateAuctionWithNewNFT } from "@/hooks/useCreateAuctionWithNewNFT";
import TransactionButton from "@/components/Transaction";
import { useTrimOnBlur } from "@/hooks/useTrimOnBlur";
import { ImageUpload } from "@/components/ImageUpload";
import * as isIPFS from "is-ipfs";
import { Checkbox } from "@/components/ui/checkbox";
import { RequiredIndicator } from "@/components/ui/requiredIndicator";
import { isAddress } from "viem";
import { SupplementalImagesInput } from "@/components/SupplementalImagesInput";

interface CreateAuctionProps {
  auctionHouseAddress: string;
}

export function CreateAuction({ auctionHouseAddress }: CreateAuctionProps) {
  // Form state
  const [auctionHouse, setAuctionHouse] = useState(auctionHouseAddress);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [termsOfService, setTermsOfService] = useState("");
  const [supplementalImagesCIDs, setSupplementalImagesCIDs] = useState<
    string[]
  >([]);
  const [reservePrice, setReservePrice] = useState("");
  const [paymentToken, setPaymentToken] = useState("ETH");
  const [startTime, setStartTime] = useState("");
  const [durationHours, setDurationHours] = useState("");
  const [affiliateFeePct, setAffiliateFeePct] = useState("");
  const [arbiterAddress, setArbiterAddress] = useState("");
  const [timeExtensionMinutes, setTimeExtensionMinutes] = useState("");
  const [isPremium, setIsPremium] = useState(true);
  const [minBidIncrementPct, setMinBidIncrementPct] = useState("");
  const [premiumRatePct, setPremiumRatePct] = useState("");
  const [error, setError] = useState("");
  const [contractImageCID, setContractImageCID] = useState("");
  const [cidError, setCidError] = useState<string | null>(null);
  const [useImageUpload, setUseImageUpload] = useState(false);
  const [startTimeError, setStartTimeError] = useState<string | null>(null);

  const handleBlurImageCID = useTrimOnBlur((value) => {
    if (isIPFS.cid(value)) {
      setContractImageCID(value);
      setCidError(null);
    } else {
      setCidError("Invalid IPFS CID");
    }
  });

  const handleBlurAuctionHouse = useTrimOnBlur((value) => {
    if (isAddress(value)) {
      setAuctionHouse(value);
    } else {
      setError("Invalid auction house address");
    }
  });

  const handleBlurName = useTrimOnBlur(setName);
  const handleBlurDescription = useTrimOnBlur(setDescription);
  const handleBlurTermsOfService = useTrimOnBlur(setTermsOfService);
  const handleBlurReservePrice = useTrimOnBlur(setReservePrice);
  const handleBlurDurationHours = useTrimOnBlur(setDurationHours);
  const handleBlurAffiliateFeePct = useTrimOnBlur(setAffiliateFeePct);
  const handleBlurArbiterAddress = useTrimOnBlur(setArbiterAddress);
  const handleBlurTimeExtension = useTrimOnBlur(setTimeExtensionMinutes);
  const handleBlurMinBidIncrementPct = useTrimOnBlur(setMinBidIncrementPct);
  const handleBlurPremiumRatePct = useTrimOnBlur(setPremiumRatePct);

  const validateStartTime = (value: string) => {
    if (!value) return null;
    const selectedDate = new Date(value);
    const now = new Date();
    return selectedDate < now ? "Start time cannot be in the past" : null;
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStartTime(value);
    setStartTimeError(validateStartTime(value));
  };

  const handleStartTimeBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStartTimeError(validateStartTime(value));
  };

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
  // const auctionHouseAddress = auctionHouse;

  // Handle form submit
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setResult(null);
    setError("");

    // Validate start time before submitting
    const startTimeValidationError = validateStartTime(startTime);
    if (startTimeValidationError) {
      setError(startTimeValidationError);
      return;
    }

    try {
      await createAuctionWithNewNFT({
        auctionHouseAddress: auctionHouseAddress as `0x${string}`,
        metadata: {
          name,
          description,
          image: contractImageCID ? `ipfs://${contractImageCID}` : "",
          termsOfService,
          supplementalImages: supplementalImagesCIDs,
        },
        startTime: startTime
          ? BigInt(new Date(startTime).getTime() / 1000)
          : BigInt(Math.floor(Date.now() / 1000)),
        reservePrice: BigInt(
          Math.round(
            Number(reservePrice) * 10 ** paymentTokenDecimals(paymentToken),
          ),
        ),
        durationSeconds: BigInt(Number(durationHours) * 3600),
        affiliateFeeBps: Number(affiliateFeePct) * 100,
        arbiterAddress: arbiterAddress as `0x${string}`,
        paymentToken: paymentTokenAddress(paymentToken) as `0x${string}`,
        isPremium,
        premiumRateBps: Number(premiumRatePct) * 100,
        minBidIncrementBps: Math.round(Number(minBidIncrementPct) * 100),
        timeExtensionSeconds: Number(timeExtensionMinutes) * 60,
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
                onBlur={handleBlurAuctionHouse}
              />
            </div>
            <div className="border-b pb-4 mb-4">
              <div className="font-bold mb-4">Step 2: NFT Details</div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="item-name">
                    Item Name
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="item-name"
                    type="text"
                    placeholder="Rare Collectible #42"
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
                  <Textarea
                    id="description"
                    placeholder="Description of the item being auctioned..."
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

                <div>
                  <Label htmlFor="terms-of-service">Terms of Service</Label>
                  <Input
                    id="terms-of-service"
                    type="text"
                    placeholder="Item terms & conditions"
                    value={termsOfService}
                    onChange={(e) => setTermsOfService(e.target.value)}
                    onBlur={handleBlurTermsOfService}
                  />
                </div>
                <SupplementalImagesInput
                  supplementalImagesCIDs={supplementalImagesCIDs}
                  onSupplementalImagesCIDsChange={(value) =>
                    setSupplementalImagesCIDs(value)
                  }
                  label="Supplemental Images"
                  // description="Additional images that provide more context or detail about the item you are selling."
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="font-bold mb-4">Step 3: Auction Settings</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="reserve-price">
                    Reserve Price
                    <RequiredIndicator />
                  </Label>
                  <div className="flex">
                    <Input
                      id="reserve-price"
                      type="number"
                      placeholder="0.5"
                      className="rounded-l"
                      value={reservePrice}
                      onChange={(e) => setReservePrice(e.target.value)}
                      onBlur={handleBlurReservePrice}
                      required
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
                  <Label htmlFor="start-time">
                    Start Time
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="start-time"
                    type="datetime-local"
                    value={startTime}
                    onChange={handleStartTimeChange}
                    onBlur={handleStartTimeBlur}
                    required
                    className={startTimeError ? "border-red-500" : ""}
                  />
                  {startTimeError && (
                    <div className="text-xs text-red-600 mt-1">
                      {startTimeError}
                    </div>
                  )}
                </div>
                <div>
                  <Label htmlFor="duration">
                    Duration (hours)
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="duration"
                    type="number"
                    placeholder="48"
                    value={durationHours}
                    onChange={(e) => setDurationHours(e.target.value)}
                    onBlur={handleBlurDurationHours}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="affiliate-fee">Affiliate Fee (%)</Label>
                  <Input
                    id="affiliate-fee"
                    type="number"
                    placeholder="5"
                    value={affiliateFeePct}
                    onChange={(e) => setAffiliateFeePct(e.target.value)}
                    onBlur={handleBlurAffiliateFeePct}
                  />
                </div>
                <div>
                  <Label htmlFor="arbiter-address">
                    Arbiter Address
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="arbiter-address"
                    type="text"
                    placeholder="0x..."
                    value={arbiterAddress}
                    onChange={(e) => setArbiterAddress(e.target.value)}
                    onBlur={handleBlurArbiterAddress}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="time-extension">
                    Time Extension (minutes)
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="time-extension"
                    type="number"
                    placeholder="5"
                    value={timeExtensionMinutes}
                    onChange={(e) => setTimeExtensionMinutes(e.target.value)}
                    onBlur={handleBlurTimeExtension}
                    required
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    Extends auction if bid placed in final minutes
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center">
                  <Checkbox
                    id="premium"
                    className="mr-2"
                    checked={isPremium}
                    onCheckedChange={(checked) =>
                      setIsPremium(checked === true)
                    }
                  />
                  <Label htmlFor="premium">Enable Premium Auction</Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="min-bid-increment">
                      Min Bid Increment (%)
                      <RequiredIndicator />
                    </Label>
                    <Input
                      id="min-bid-increment"
                      type="number"
                      placeholder="0.5"
                      value={minBidIncrementPct}
                      onChange={(e) => setMinBidIncrementPct(e.target.value)}
                      onBlur={handleBlurMinBidIncrementPct}
                      required
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      Minimum % increase for new bids
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="premium-rate">
                      Premium Rate (%)
                      <RequiredIndicator />
                    </Label>
                    <Input
                      id="premium-rate"
                      type="number"
                      placeholder="99"
                      value={premiumRatePct}
                      onChange={(e) => setPremiumRatePct(e.target.value)}
                      onBlur={handleBlurPremiumRatePct}
                      required
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
