import { redis } from "@/lib/redis";
import { sendFrameNotification } from "@/lib/notification-client";
import { rateLimit } from "@/lib/rate-limit";

const BATCH_SIZE = 10;
const PROCESSING_INTERVAL_MS = 30000; // Process every 30 seconds
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000; // Start with 1 second delay
const NOTIFICATION_RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 60 * 1000, // 1 minute
};

interface FailedNotification {
  fid: number;
  title: string;
  body: string;
  targetUrl?: string;
  retryCount: number;
  nextRetryTime: number;
}

async function storeFailedNotification(notification: FailedNotification) {
  if (!redis) return;

  const key = `failed_notifications:${notification.fid}`;
  const notificationString = JSON.stringify(notification);

  // Validate that we can parse it back before storing
  try {
    JSON.parse(notificationString);
  } catch (error) {
    console.error("Failed to validate notification JSON:", error);
    return;
  }

  await redis.zadd(key, {
    score: notification.nextRetryTime,
    member: notificationString,
  });
  // Set expiry to 24 hours to prevent stale notifications
  await redis.expire(key, 24 * 60 * 60);
}

export async function sendNotificationWithRetry(
  fid: number,
  title: string,
  body: string,
  targetUrl?: string,
  retryCount = 0,
): Promise<boolean> {
  // Check rate limit first
  const rateLimitResult = await rateLimit(
    `notification:${fid}`,
    NOTIFICATION_RATE_LIMIT,
  );

  if (!rateLimitResult.success) {
    const nextRetryTime = rateLimitResult.reset;
    await storeFailedNotification({
      fid,
      title,
      body,
      targetUrl,
      retryCount,
      nextRetryTime,
    });
    return false;
  }

  const result = await sendFrameNotification({
    fid,
    title,
    body,
    targetUrl,
  });

  if (result.state === "rate_limit") {
    if (retryCount < MAX_RETRIES) {
      const nextRetryTime =
        Date.now() + RETRY_DELAY_MS * Math.pow(2, retryCount);
      await storeFailedNotification({
        fid,
        title,
        body,
        targetUrl,
        retryCount: retryCount + 1,
        nextRetryTime,
      });
    }
    return false;
  }

  return result.state === "success";
}

async function processFailedNotifications() {
  if (!redis) return;

  const now = Date.now();
  const pattern = "failed_notifications:*";

  // Get all failed notification keys
  const keys = await redis.keys(pattern);

  for (const key of keys) {
    // Get notifications that are ready to be retried
    const notifications = (await redis.zrange(key, 0, now, {
      byScore: true,
      offset: 0,
      count: BATCH_SIZE,
    })) as (string | FailedNotification)[];

    if (!notifications?.length) continue;

    for (const notificationData of notifications) {
      try {
        let notification: FailedNotification;

        if (typeof notificationData === "string") {
          try {
            notification = JSON.parse(notificationData);
          } catch (error) {
            console.error(
              "Failed to parse notification JSON:",
              error,
              "Raw data:",
              notificationData,
            );
            await redis.zrem(key, notificationData);
            continue;
          }
        } else {
          notification = notificationData as FailedNotification;
        }

        // Validate the notification has required fields
        if (!notification.fid || !notification.title || !notification.body) {
          console.error("Invalid notification structure:", notification);
          await redis.zrem(
            key,
            typeof notificationData === "string"
              ? notificationData
              : JSON.stringify(notificationData),
          );
          continue;
        }

        const success = await sendNotificationWithRetry(
          notification.fid,
          notification.title,
          notification.body,
          notification.targetUrl,
          notification.retryCount,
        );

        if (success) {
          // Remove the successful notification
          await redis.zrem(
            key,
            typeof notificationData === "string"
              ? notificationData
              : JSON.stringify(notificationData),
          );
        }
      } catch (error) {
        console.error(
          "Error processing failed notification:",
          error,
          "Raw data:",
          notificationData,
        );
        // Remove invalid data to prevent repeated errors
        await redis.zrem(
          key,
          typeof notificationData === "string"
            ? notificationData
            : JSON.stringify(notificationData),
        );
      }
    }
  }
}

export function startNotificationWorker() {
  // Process immediately on start
  processFailedNotifications().catch(console.error);

  // Then process periodically
  const intervalId = setInterval(() => {
    processFailedNotifications().catch(console.error);
  }, PROCESSING_INTERVAL_MS);

  return () => clearInterval(intervalId);
}
