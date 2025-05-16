import { redis } from "./redis";

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

interface RedisZRangeResult {
  score: number;
  member: string;
}

export async function rateLimit(
  identifier: string,
  config: RateLimitConfig,
): Promise<RateLimitResult> {
  if (!redis) {
    // If Redis is not configured, allow all requests
    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests,
      reset: Date.now() + config.windowMs,
    };
  }

  const key = `ratelimit:${identifier}`;
  const now = Date.now();
  const windowStart = now - config.windowMs;

  // Get current requests in window
  await redis.zremrangebyscore(key, 0, windowStart);
  const requests = await redis.zcard(key);

  // Check if limit is exceeded
  if (requests >= config.maxRequests) {
    const oldestRequest = await redis.zrange<RedisZRangeResult[]>(key, 0, 0, {
      withScores: true,
    });
    const resetTime = oldestRequest?.[0]?.score || now + config.windowMs;

    return {
      success: false,
      limit: config.maxRequests,
      remaining: 0,
      reset: resetTime,
    };
  }

  // Add current request
  await redis.zadd(key, { score: now, member: now.toString() });
  // Set expiry to clean up old data
  await redis.expire(key, Math.ceil(config.windowMs / 1000));

  return {
    success: true,
    limit: config.maxRequests,
    remaining: config.maxRequests - (requests + 1),
    reset: now + config.windowMs,
  };
}
