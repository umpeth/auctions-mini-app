import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import NFTImage from "@/components/NFTImage";
import SocialShare from "@/components/SocialShare";

interface BidSuccessModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  itemName?: string;
  itemId: string;
  imageUrl?: string;
  shareUrl: string;
  onWarpcastShare?: (
    text: string,
    url?: string,
    image?: string,
  ) => Promise<boolean>;
}

export default function BidSuccessModal({
  isOpen,
  onOpenChange,
  itemName,
  itemId,
  imageUrl,
  shareUrl,
  onWarpcastShare,
}: BidSuccessModalProps) {
  const displayName = itemName || `Token #${itemId}`;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-xl border-0 p-0">
        <DialogTitle className="sr-only">Bid Confirmation</DialogTitle>
        <div className="relative overflow-hidden rounded-xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] shadow-2xl">
          <div className="relative rounded-xl bg-white p-8">
            <div className="absolute inset-0 bg-linear-to-r from-indigo-100/50 to-purple-100/50 opacity-50" />
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-linear-to-r from-indigo-500 to-purple-500">
                  <span className="animate-bounce text-3xl">🎉</span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  Bid Successful!
                </h3>
                <div className="mt-6 w-full rounded-lg bg-linear-to-r from-indigo-50 to-purple-50 p-4">
                  <div className="flex items-center justify-center">
                    <div className="size-20 overflow-hidden rounded-lg">
                      <NFTImage src={imageUrl || ""} alt={displayName} />
                    </div>
                    <div className="ml-4 text-left">
                      <p className="font-medium text-gray-900">{displayName}</p>
                      <p className="text-sm text-gray-500">Successfully bid!</p>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-4">
                  <p className="mt-1 text-sm text-gray-500">
                    You can track your order status in your{" "}
                    <Link
                      href="/orders"
                      className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
                    >
                      order history
                    </Link>
                    .
                  </p>
                </div> */}
                <div className="mt-6">
                  <p className="mb-4 text-sm font-medium text-gray-700">
                    Share your bid with friends:
                  </p>
                  <SocialShare
                    text={`Just bid ${displayName} on UMP.eth! 🎉`}
                    url={shareUrl}
                    image={imageUrl}
                    variant="gradient"
                    onWarpcastShare={onWarpcastShare}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
