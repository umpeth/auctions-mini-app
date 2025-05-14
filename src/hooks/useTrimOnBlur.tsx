import { useCallback } from "react";

/**
 * Custom hook to trim input values on blur
 *
 * This hook is used to trim the value of an input or textarea when it loses focus.
 * This is useful for ensuring that trailing whitespace, tabs, and newlines are removed from the value.
 *
 * @param setter - The setter function to update the input value
 * @returns A callback function to be used as onBlur handler
 */
export const useTrimOnBlur = (setter: (v: string) => void) =>
  useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value.trim());
    },
    [setter],
  );
