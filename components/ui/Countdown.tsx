"use client";

import { useEffect, useState } from "react";

/**
 * Props for the Countdown component
 * @interface CountdownProps
 * @property {number} deadline - Unix timestamp in seconds representing when the countdown should end
 * @property {() => void} [onComplete] - Optional callback function that gets called when the countdown reaches zero
 */
interface CountdownProps {
  deadline: number; // Unix timestamp in seconds
  onComplete?: () => void;
}

/**
 * A countdown timer component that shows the time remaining until a specified deadline
 *
 * @component
 * @example
 * ```tsx
 * // Countdown to 24 hours from now
 * const deadline = Math.floor(Date.now() / 1000) + (24 * 60 * 60);
 *
 * <Countdown
 *   deadline={deadline}
 *   onComplete={() => console.log('Countdown finished!')}
 * />
 * ```
 *
 * @param {CountdownProps} props - The component props
 * @param {number} props.deadline - Unix timestamp in seconds for when the countdown should end
 * @param {() => void} [props.onComplete] - Optional callback that fires when countdown reaches zero
 *
 * @returns {JSX.Element} A countdown display showing days, hours, minutes, and seconds remaining
 */
export function Countdown({ deadline, onComplete }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Math.floor(Date.now() / 1000); // Current time in seconds
      const total = deadline - now;

      if (total <= 0) {
        onComplete?.();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(total / (24 * 60 * 60));
      const hours = Math.floor((total % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((total % (60 * 60)) / 60);
      const seconds = Math.floor(total % 60);
      return { days, hours, minutes, seconds };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (Object.values(newTimeLeft).every((v) => v === 0)) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline, onComplete]);

  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="text-center">
        <span className="font-mono text-lg">{timeLeft.days}</span>
        <span className="text-sm text-gray-500 block">days</span>
      </div>

      <div className="text-center">
        <span className="font-mono text-lg">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-sm text-gray-500 block">hours</span>
      </div>
      <div className="text-center">
        <span className="font-mono text-lg">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-sm text-gray-500 block">min</span>
      </div>
      <div className="text-center">
        <span className="font-mono text-lg">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-sm text-gray-500 block">sec</span>
      </div>
    </div>
  );
}
