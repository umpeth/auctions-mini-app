import { Redis } from "@upstash/redis";

// Get environment variables with explicit error messages
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || process.env.REDIS_URL;
const REDIS_TOKEN =
  process.env.UPSTASH_REDIS_REST_TOKEN || process.env.REDIS_TOKEN;

if (!REDIS_URL || !REDIS_TOKEN) {
  console.warn(
    "Redis configuration missing. Please set either:\n" +
      "- UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN\n" +
      "- or REDIS_URL and REDIS_TOKEN\n" +
      "Rate limiting and caching features will be disabled.",
  );
}

let redisClient: Redis | null = null;

try {
  if (REDIS_URL && REDIS_TOKEN) {
    redisClient = new Redis({
      url: REDIS_URL,
      token: REDIS_TOKEN,
    });
  }
} catch (error) {
  console.error("Failed to initialize Redis client:", error);
  redisClient = null;
}

export const redis = redisClient;
