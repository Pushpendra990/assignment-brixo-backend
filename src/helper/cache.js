import redis from 'redis';
import config from '../config/config.js';

const redisClient = redis.createClient({ url: config.redisUrl });
redisClient.on('error', (err) => console.error('Redis Client Error', err));
await redisClient.connect();

export const getFromCache = async (ifsc) => {
  try {
    const cached = await redisClient.get(`ifsc:${ifsc}`);
    return cached ? JSON.parse(cached) : null;
  } catch (err) {
    console.error('Redis GET error:', err.message);
    return null;
  }
};

export const setInCache = async (ifsc, data) => {
  try {
    await redisClient.setEx(`ifsc:${ifsc}`, config.cacheTTL, JSON.stringify(data));
  } catch (err) {
    console.error('Redis SET error:', err.message);
  }
};
