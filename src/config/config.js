import dotenv from "dotenv";
dotenv.config();

const config = {
  redisUrl: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
  freshnessDays: parseInt(process.env.FRESHNESS_DAYS || '7', 10),
  cacheTTL: parseInt(process.env.CACHE_TTL || '300', 10), // seconds
};

export default config;
