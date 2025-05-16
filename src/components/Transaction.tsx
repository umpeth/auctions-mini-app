import { useEffect, useState } from "react";
import { useWaitForTransactionReceipt } from "wagmi";
import { Spinner } from "@/components/ui/spinner";
import {
  CheckCircleIcon,
  XMarkIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

export interface TransactionButtonProps {
  /**
   * Function to execute when the button is clicked.
   */
  onClick: () => Promise<void> | void;

  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Transaction hash used to track the transaction status.
   */
  hash?: `0x${string}` | null;

  /**
   * Whether the button is in a loading state.
   * @default false
   */
  isLoading?: boolean;

  /**
   * Text to display alongside the spinner when the button is in a loading state.
   * @default "Processing..."
   */
  loadingText?: string;

  /**
   * The content to be rendered inside the button.
   */
  children: React.ReactNode;

  /**
   * Whether to show a link to the transaction after success.
   * @default true
   */
  showTransactionLink?: boolean;
}

/**
 * A button component for handling blockchain transactions with loading, success, and error states.
 *
 * This component is designed to handle blockchain transactions with visual feedback for different states:
 * - **Loading**: Displays a spinner and loading text.
 * - **Success**: Displays a confirmation message and optionally a link to the transaction.
 * - **Error**: Displays an error message with an option to clear it.
 *
 * @component
 * @param {TransactionButtonProps} props - Props for the TransactionButton component.
 *
 * @returns {JSX.Element} A button component with transaction status handling.
 *
 * @example <caption>Basic usage</caption>
 *
 * ```tsx
 * <TransactionButton
 *   onClick={handleTransaction}
 *   hash="0x123..."
 *   isLoading={isPending}
 * >
 *   Send Transaction
 * </TransactionButton>
 * ```
 *
 * @example <caption>With transaction tracking</caption>
 *
 * ```tsx
 * <TransactionButton
 *   onClick={handleTransaction}
 *   hash="0x123..."
 *   isLoading={isPending}
 *   showTransactionLink={true}
 * >
 *   Send Transaction
 * </TransactionButton>
 * ```
 */
export default function TransactionButton({
  onClick,
  disabled = false,
  hash = null,
  isLoading = false,
  loadingText = "Processing...",
  children,
  showTransactionLink = true,
}: TransactionButtonProps) {
  const [error, setError] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const { isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: hash as `0x${string}`,
    query: { enabled: Boolean(hash) },
  });

  useEffect(() => {
    if (isConfirmed) {
      setShowConfirmation(true);
    }
  }, [isConfirmed]);

  const handleClick = async () => {
    try {
      setError(null);
      await onClick();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Transaction failed");
    }
  };

  const baseClassName =
    "w-full rounded-md border px-4 sm:px-8 sm:py-3 text-base font-medium shadow-xs focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  const defaultClassName = `${baseClassName} border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 btn-gradient`;
  const successClassName = `${baseClassName} border-green-500 bg-green-50 text-white hover:bg-green-100 focus:ring-green-500`;
  const errorClassName = `${baseClassName} border-red-500 bg-red-50 text-red-700 hover:bg-red-100 focus:ring-red-500`;

  return (
    <div className="space-y-2">
      <div
        className={
          error
            ? errorClassName
            : showConfirmation
              ? successClassName
              : defaultClassName
        }
      >
        <div
          className={`flex items-center justify-center ${isLoading ? "hover:cursor-wait hover:bg-transparent" : ""}`}
        >
          {isLoading && !showConfirmation ? (
            <Button
              variant="ghost"
              className="hover:text-accent-background text-base hover:bg-transparent [&_svg]:size-5"
              disabled={disabled || isLoading}
            >
              <Spinner className="size-5" />
              <span>{loadingText}</span>
            </Button>
          ) : showConfirmation ? (
            <div className="flex items-center space-x-4">
              <CheckCircleIcon className="size-6 text-green-500" />
              <span className="text-sm sm:text-base text-green-700">
                Success
              </span>

              {showTransactionLink && hash && (
                <a
                  href={`https://basescan.org/tx/${hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-bold text-green-700 hover:text-green-600"
                >
                  View transaction
                </a>
              )}
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowConfirmation(false);
                }}
                variant="ghost"
                className="rounded-full text-gray-400 hover:bg-transparent hover:text-gray-500 [&_svg]:size-6"
              >
                <XMarkIcon className="size-6" />
              </Button>
            </div>
          ) : error ? (
            <div className="flex items-center space-x-4">
              <ExclamationCircleIcon className="size-6 text-red-500" />
              <span className="text-red-700">Error: {error}</span>
              <Button
                onClick={() => setError(null)}
                variant="ghost"
                className="rounded-full text-gray-400 hover:bg-transparent hover:text-gray-500 [&_svg]:size-6"
              >
                <XMarkIcon className="size-6" />
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleClick}
              disabled={disabled || isLoading}
              className="hover:text-unset w-full text-base hover:bg-transparent"
              variant="ghost"
            >
              {children}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
