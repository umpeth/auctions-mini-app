"use client";

import React, { useState, useId } from "react";
import {
  TrashIcon,
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/20/solid";
import { dedicatedPinataGateway } from "@/lib/misc";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface ImageUploadProps {
  onUploadComplete: (hashes: string[]) => void;
  multiple?: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onUploadComplete,
  multiple = false,
}) => {
  const uniqueId = useId();
  const dropzoneId = `dropzone-${uniqueId}`;
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<
    { name: string; hash: string }[]
  >([]);
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>("");

  const maxFileSize = 4 * 1024 * 1024;
  const maxTotalSize = 4.5 * 1024 * 1024;

  const remove = (index: number) => {
    if (loading || uploaded) return;
    setFiles(files.filter((_, i) => i !== index));
  };

  const loadFile = (file: File) => {
    return URL.createObjectURL(file);
  };

  const validateFile = (file: File): string | null => {
    if (file.size > maxFileSize) {
      return `File ${file.name} is too large (max ${maxFileSize / 1024 / 1024}MB)`;
    }
    return null;
  };

  const addFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (loading || uploaded) return;
    if (!e.target.files) return;
    const filesToAdd = Array.from(e.target.files);

    // Filter out any undefined or null files
    const validFiles = filesToAdd.filter(
      (file) => file !== undefined && file !== null,
    );

    // If no valid files, just return early
    if (validFiles.length === 0) return;

    // Validate individual files
    for (const file of validFiles) {
      const error = validateFile(file);
      if (error) {
        setError(error);
        return;
      }
    }

    // Calculate new files array
    const newFiles = multiple ? [...files, ...validFiles] : [validFiles[0]];

    setFiles(newFiles);
    setError(null);
  };

  const uploadFile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUploadProgress("");

    if (files.length === 0) {
      setError("No files selected");
      setLoading(false);
      return;
    }

    try {
      const totalSize = files.reduce((sum, file) => sum + file.size, 0);

      // Try batch upload if total size is within limit
      if (totalSize <= maxTotalSize) {
        setUploadProgress("Uploading ...");
        const formData = new FormData();
        files.forEach((file, index) => {
          formData.append(`file${index}`, file);
        });

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        if (response.ok) {
          setUploadedFiles(data.ipfsHashes);
          setUploaded(true);
          onUploadComplete(
            data.ipfsHashes.map((file: { hash: string }) => file.hash),
          );
          setUploadProgress("");
          return;
        }
      }

      // Fall back to individual uploads
      const uploadedResults: { name: string; hash: string }[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setUploadProgress(`Uploading ${i + 1}/${files.length}`);

        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || `Failed to upload ${file.name}`);
        }

        uploadedResults.push(data.ipfsHashes[0]);
      }

      setUploadedFiles(uploadedResults);
      setUploaded(true);
      onUploadComplete(uploadedResults.map((file) => file.hash));
    } catch (err) {
      console.error("Error uploading files: ", err);
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again.",
      );
    } finally {
      setLoading(false);
      setUploadProgress("");
    }
  };

  const copyToClipboard = (hash: string) => {
    navigator.clipboard.writeText(hash).then(() => {
      setCopiedHash(hash);
      setTimeout(() => setCopiedHash(null), 2000);
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (loading || uploaded) return;

    const droppedFiles = Array.from(e.dataTransfer.files);
    for (const file of droppedFiles) {
      const error = validateFile(file);
      if (error) {
        setError(error);
        return;
      }
    }

    const newFiles = multiple ? [...files, ...droppedFiles] : [droppedFiles[0]];

    setFiles(newFiles);
    setError(null);
  };

  return (
    /* file dropzone */
    <div className="mx-auto w-full rounded bg-white p-7">
      <div className="relative flex flex-col rounded border border-gray-200 p-4 text-gray-400">
        <form onSubmit={uploadFile}>
          <div className="flex w-full items-center justify-center">
            <label
              htmlFor={dropzoneId}
              className={`flex h-64 w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-dashed ${
                isDragging
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 bg-gray-50 hover:bg-gray-100"
              } ${(loading || uploaded) && "pointer-events-none opacity-50"}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                <svg
                  className={`mb-4 size-8 ${
                    isDragging ? "text-blue-500" : "text-gray-500"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p
                  className={`mb-2 text-sm ${
                    isDragging ? "text-blue-500" : "text-gray-500"
                  }`}
                >
                  <span className="font-semibold">
                    {isDragging ? "Drop files here" : "Click to upload"}
                  </span>
                  {!isDragging && " or drag and drop"}
                </p>
              </div>

              <input
                id={dropzoneId}
                type="file"
                className="hidden"
                onChange={addFiles}
                accept="image/*"
                multiple={multiple}
                disabled={loading || uploaded}
              />
            </label>
          </div>
          {error && (
            <div className="mt-4 w-full rounded-lg bg-red-100 px-4 py-3 text-red-700">
              <p>{error}</p>
            </div>
          )}
          {/* Image preview */}
          {files.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="relative flex cursor-move flex-col items-center overflow-hidden rounded border bg-gray-100 text-center select-none"
                  style={{ paddingTop: "100%" }}
                  data-index={index}
                >
                  <Button
                    className={`absolute top-0 right-0 z-50 bg-white ${
                      loading || uploaded ? "cursor-not-allowed" : ""
                    }`}
                    title="Remove"
                    variant="ghost"
                    size="icon"
                    onClick={() => remove(index)}
                    disabled={loading || uploaded}
                    style={{
                      pointerEvents: "auto",
                    }}
                  >
                    <TrashIcon
                      className={`size-3 sm:h-4 sm:w-4 ${loading || uploaded ? "text-gray-400" : "text-gray-700"}`}
                    />
                  </Button>
                  {file.type.includes("image/") && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="preview absolute inset-0 z-0 h-full w-full border-2 border-white object-cover sm:border-4"
                      src={loadFile(file)}
                      alt="preview"
                    />
                  )}
                  <div className="absolute right-0 bottom-0 left-0 flex flex-col bg-white/50 p-1 text-[10px] sm:text-xs">
                    <span className="w-full truncate font-bold text-gray-900">
                      {file.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {files.length > 0 && (
            /* Uploaded files table with file name, ipfs hash and copy button */
            <div className="mt-4">
              {uploaded ? (
                <>
                  <div className="mb-4 flex items-center justify-center rounded-lg bg-green-100 px-4 py-3">
                    <svg
                      className="mr-2 size-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="font-medium text-green-700">
                      Files Uploaded Successfully
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                            File Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                            IPFS Hash
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {uploadedFiles.map((file, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {file.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <a
                                href={`${dedicatedPinataGateway}/ipfs/${file.hash}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:text-blue-900"
                              >
                                {file.hash}
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Button
                                onClick={() => copyToClipboard(file.hash)}
                                variant="ghost"
                                size="icon"
                                title="Copy IPFS hash"
                                className="[&_svg]:size-5"
                              >
                                {copiedHash === file.hash ? (
                                  <ClipboardDocumentCheckIcon className="size-5 text-green-500" />
                                ) : (
                                  <ClipboardIcon className="size-5" />
                                )}
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                /* Upload button and file count */
                <div className="mt-4 flex flex-col items-center">
                  <Button type="submit" disabled={loading || uploaded}>
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="mr-2 size-4 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        {uploadProgress || "Uploading..."}
                      </span>
                    ) : (
                      "Upload Files"
                    )}
                  </Button>
                  <p className="text-sm text-gray-600">
                    {files.length} file{files.length !== 1 && "s"} selected
                  </p>
                </div>
              )}
            </div>
          )}
          {files.length > 0 && !uploaded && (
            <div className="flex items-center justify-center">
              <Alert variant="warning">
                <ExclamationTriangleIcon className="size-4" />
                <AlertTitle>
                  Don&apos;t forget to click &apos;Upload Files&apos; to start
                  uploading.
                </AlertTitle>
              </Alert>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
