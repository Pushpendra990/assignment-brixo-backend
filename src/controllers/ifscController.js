import { getFromCache, setInCache } from '../helper/cache.js';
import { getFromDb, upsertInDb } from '../helper/database.js';
import { fetchFromApi } from '../helper/external.js';
import { isFresh } from '../utilis/freshness.js';

export const getIfsc = async (req, res) => {
  const { ifsc } = req.params;

  if (!ifsc) {
    return res.status(400).json({ error: 'IFSC code is required' });
  }

  const upperIfsc = ifsc.toUpperCase();

  try {
    // Step 1: Try Redis cache
    const cached = await getFromCache(upperIfsc);
    if (cached) {
      if (cached?.error === 'Invalid IFSC code') {
        return res.status(404).json({ error: 'Invalid IFSC code' });
      }

      const dbCheck = await getFromDb(upperIfsc);
      if (!dbCheck) {
        await upsertInDb(upperIfsc, cached);
        console.log(`DB repopulated for ${upperIfsc} from cache.`);
      }

      return res.status(200).json(cached);
    }

    // Step 2: Try MongoDB
    const dbData = await getFromDb(upperIfsc);
    if (dbData && isFresh(dbData.updatedAt)) {
      await setInCache(upperIfsc, dbData.toObject());
      return res.status(200).json(dbData.toObject());
    }

    // Step 3: External API
    const apiData = await fetchFromApi(upperIfsc);

    if (apiData?.error === 'Invalid IFSC code') {
      await setInCache(upperIfsc, apiData);
      return res.status(404).json({ error: 'Invalid IFSC code' });
    }

    const updated = await upsertInDb(upperIfsc, apiData);
    await setInCache(upperIfsc, updated.toObject());

    return res.status(200).json(updated.toObject());

  } catch (error) {
    console.error('getIfsc error:', error.message);
    return res.status(500).json({ error: 'Failed to fetch IFSC details' });
  }
};