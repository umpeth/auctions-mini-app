import { useState, useEffect } from "react";

/**
 * A hook that checks if the user's device has a touch screen.
 *
 * This hook uses the `window.matchMedia` API to detect if the device
 * has a "coarse" pointer (like a finger on a touchscreen) instead of
 * a "fine" pointer (like a mouse).
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isTouch = useIsTouch();
 *
 *   return (
 *     <div>
 *       {isTouch ? 'Touch device' : 'Non-touch device'}
 *     </div>
 *   );
 * }
 * ```
 *
 * @returns {boolean | undefined} Returns true for touch devices, false for non-touch devices,
 *                               or undefined before the check is complete
 */
export function useIsTouch() {
  const [isTouch, setTouch] = useState<boolean>();
  useEffect(() => {
    setTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);
  return isTouch;
}
