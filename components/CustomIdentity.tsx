import { getName } from "@coinbase/onchainkit/identity";
import { useEffect, useState } from "react";
import { base } from "wagmi/chains";
import { Button } from "@/components/ui/button";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";

export const CustomIdentity = ({ address }: { address: `0x${string}` }) => {
  const [name, setName] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    getName({ address, chain: base }).then((name) => {
      setName(name);
    });
  }, [address]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast.success("Address copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error(
        `Failed to copy address: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="flex items-center gap-2">
      <span className="font-medium">{name || formatAddress(address)}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 hover:bg-gray-100"
        onClick={handleCopy}
        title="Copy address"
      >
        {copied ? (
          <CheckIcon className="h-4 w-4 text-green-500" />
        ) : (
          <ClipboardIcon className="h-4 w-4 text-gray-500" />
        )}
      </Button>
    </div>
  );
};
