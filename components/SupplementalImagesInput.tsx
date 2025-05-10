import React, { useState } from "react";
import * as isIPFS from "is-ipfs";
import { ImageUpload } from "@/components/ImageUpload";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
// import { InfoPopover } from "@repo/ui/components/InfoPopover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTrimOnBlur } from "@/hooks/useTrimOnBlur";

/**
 * Props for the SupplementalImagesInput component
 * @interface SupplementalImagesInputProps
 */
interface SupplementalImagesInputProps {
  /** Array of IPFS CIDs for supplemental images */
  supplementalImagesCIDs: string[];
  /** Callback when supplemental images change */
  onSupplementalImagesCIDsChange: (value: string[]) => void;
  /** Optional label for the input field group. */
  label?: string;
  /** Optional description for the InfoPopover */
  // description?: string;
}

/**
 * A reusable component for handling multiple supplemental images with IPFS CID validation.
 * This component provides two modes of operation:
 * 1. Manual CID input - Users can directly enter IPFS CIDs
 * 2. Image upload - Users can upload images which will be converted to IPFS CIDs
 *
 * Features:
 * - IPFS CID validation for each image
 * - Ability to add/remove multiple images
 * - Toggle between manual CID input and image upload
 * - Error handling and display for invalid CIDs
 * - Trim on blur functionality for CID inputs
 *
 * @example
 * ```tsx
 * // Basic usage
 * <SupplementalImagesInput
 *   supplementalImagesCIDs={images}
 *   onSupplementalImagesCIDsChange={setImages}
 * />
 *
 * // With custom label and description
 * <SupplementalImagesInput
 *   supplementalImagesCIDs={images}
 *   onSupplementalImagesCIDsChange={setImages}
 *   label="Additional Photos"
 *   description="Upload or enter CIDs for additional product photos"
 * />
 * ```
 *
 * @param {SupplementalImagesInputProps} props - The component props
 * @returns {JSX.Element} The rendered component
 */
export function SupplementalImagesInput({
  supplementalImagesCIDs,
  onSupplementalImagesCIDsChange,
  label = "Supplemental Images",
  // description = "Additional images that provide more context or detail.",
}: SupplementalImagesInputProps) {
  // Track validation errors for each supplemental image
  const [supplementalImageErrors, setSupplementalImageErrors] = useState<
    (string | null)[]
  >([]);

  // Toggle between manual CID input and image upload modes
  const [useSupplementalImageUpload, setUseSupplementalImageUpload] =
    useState(false);

  /**
   * Adds a new empty supplemental image field to the list.
   * Initializes with an empty string and null error state.
   *
   * @example
   * ```tsx
   * handleAddSupplementalImage(); // Adds a new empty field
   * ```
   */
  const handleAddSupplementalImage = () => {
    onSupplementalImagesCIDsChange([...supplementalImagesCIDs, ""]);
    setSupplementalImageErrors([...supplementalImageErrors, null]);
  };

  /**
   * Removes a supplemental image and its associated error state at the specified index.
   *
   * @param {number} index - The index of the image to remove
   *
   * @example
   * ```tsx
   * handleRemoveSupplementalImage(2); // Removes the third image
   * ```
   */
  const handleRemoveSupplementalImage = (index: number) => {
    const newImages = supplementalImagesCIDs.filter((_, i) => i !== index);
    onSupplementalImagesCIDsChange(newImages);
    const newErrors = supplementalImageErrors.filter((_, i) => i !== index);
    setSupplementalImageErrors(newErrors);
  };

  /**
   * Updates a supplemental image CID at the specified index without validation.
   * Validation occurs on blur.
   *
   * @param {number} index - The index of the image to update
   * @param {string} value - The new CID value
   *
   * @example
   * ```tsx
   * handleSupplementalImageChange(0, "Qm..."); // Updates first image CID
   * ```
   */
  const handleSupplementalImageChange = (index: number, value: string) => {
    const newImages = [...supplementalImagesCIDs];
    newImages[index] = value;
    onSupplementalImagesCIDsChange(newImages);
  };

  /**
   * Validates a supplemental image CID on blur event.
   * Sets error state if the CID is invalid.
   *
   * @param {number} index - The index of the image to validate
   * @param {string} value - The CID value to validate
   *
   * @example
   * ```tsx
   * handleBlurSupplementalImage(0, "Qm..."); // Validates first image CID
   * ```
   */
  const handleBlurSupplementalImage = (index: number, value: string) => {
    const newErrors = [...supplementalImageErrors];
    if (isIPFS.cid(value)) {
      newErrors[index] = null;
    } else {
      newErrors[index] = "Invalid IPFS CID";
    }
    setSupplementalImageErrors(newErrors);
  };

  /**
   * Handles successful upload of supplemental images from the ImageUpload component.
   * Validates each uploaded CID and updates both images and error states.
   *
   * @param {string[]} hashes - Array of IPFS CIDs from the uploaded images
   *
   * @example
   * ```tsx
   * handleSupplementalImageUpload(["Qm...", "Qm..."]); // Adds two new images
   * ```
   */
  const handleSupplementalImageUpload = (hashes: string[]) => {
    const newImages = [...supplementalImagesCIDs, ...hashes];
    onSupplementalImagesCIDsChange(newImages);

    // Validate the uploaded CIDs
    const newErrors = [...supplementalImageErrors];
    hashes.forEach((hash) => {
      if (isIPFS.cid(hash)) {
        newErrors.push(null);
      } else {
        newErrors.push("Invalid IPFS CID");
      }
    });
    setSupplementalImageErrors(newErrors);
  };

  /**
   * Creates a blur event handler for a specific supplemental image index.
   * Uses the useTrimOnBlur hook to trim whitespace and validate the CID.
   *
   * @param {number} index - The index to create the handler for
   * @returns {(value: string) => void} A blur event handler for the specified index
   *
   * @example
   * ```tsx
   * const blurHandler = createSupplementalImageBlurHandler(0);
   * ```
   */
  const createSupplementalImageBlurHandler = (index: number) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTrimOnBlur((value: string) => {
      handleBlurSupplementalImage(index, value);
    });
  };

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="supplementalImages">
        {label}
        {/* <InfoPopover title={label} description={description} /> */}
      </Label>
      <div className="mt-1 flex items-center gap-2">
        <Checkbox
          id="useSupplementalImageUpload"
          checked={useSupplementalImageUpload}
          onCheckedChange={(checked) =>
            setUseSupplementalImageUpload(checked === true)
          }
        />
        <Label htmlFor="useSupplementalImageUpload">Use image upload</Label>
      </div>
      {useSupplementalImageUpload ? (
        <ImageUpload
          onUploadComplete={handleSupplementalImageUpload}
          multiple={true}
        />
      ) : (
        <>
          {supplementalImagesCIDs.map((image, index) => (
            <div key={index} className="mt-2 flex items-center">
              <Input
                type="text"
                value={image}
                onChange={(e) =>
                  handleSupplementalImageChange(index, e.target.value)
                }
                onBlur={createSupplementalImageBlurHandler(index)}
                className={`grow ${
                  supplementalImageErrors[index] ? "border-red-500" : ""
                }`}
                placeholder="Enter IPFS CID for supplemental image"
              />
              <Button
                onClick={() => handleRemoveSupplementalImage(index)}
                variant="destructive"
                size="icon"
                className="rounded-full [&_svg]:size-5"
              >
                <MinusIcon className="size-5" />
              </Button>
              {supplementalImageErrors[index] && (
                <p className="ml-2 text-sm text-red-600">
                  {supplementalImageErrors[index]}
                </p>
              )}
            </div>
          ))}
          <Button
            onClick={handleAddSupplementalImage}
            disabled={supplementalImageErrors.some((error) => error !== null)}
            variant="secondary"
            className={`mt-2 flex [&_svg]:size-5 ${
              supplementalImageErrors.some((error) => error !== null)
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
          >
            <PlusIcon className="size-5" />
            Add Supplemental Image
          </Button>
        </>
      )}
    </div>
  );
}
