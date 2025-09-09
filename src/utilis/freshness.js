import config from '../config/config.js';

const isFresh = (updatedAt) => {
  const threshold = Date.now() - config.freshnessDays * 24 * 60 * 60 * 1000;
  return new Date(updatedAt).getTime() > threshold;
};

export { isFresh };
