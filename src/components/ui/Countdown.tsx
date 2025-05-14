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
      const difference = deadline - now;

      if (difference <= 0) {
        onComplete?.();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (24 * 60 * 60));
      const hours = Math.floor((difference % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((difference % (60 * 60)) / 60);
      const seconds = Math.floor(difference % 60);
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

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };
  // Display format based on time remaining
  if (timeLeft.days > 0) {
    return (
      <span>
        {timeLeft.days}d {formatNumber(timeLeft.hours)}:
        {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
      </span>
    );
  }
  return (
    <span>
      {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:
      {formatNumber(timeLeft.seconds)}
    </span>
  );
}
