// src/utils/cache.js

const CACHE_KEY = 'cryptoPricesCache';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes Time To Live for cache

export const saveToCache = (data) => {
  try {
    const cacheEntry = {
      timestamp: Date.now(),
      data: data,
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheEntry));
    console.log('Data saved to cache.');
  } catch (e) {
    console.error('Error saving to localStorage:', e);
  }
};

export const loadFromCache = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const cacheEntry = JSON.parse(cached);
      // Check if cache is still valid (not expired)
      if (Date.now() - cacheEntry.timestamp < CACHE_TTL_MS) {
        console.log('Data loaded from fresh cache.');
        return cacheEntry.data;
      } else {
        console.log('Cache expired.');
        localStorage.removeItem(CACHE_KEY); // Clear expired cache
      }
    }
  } catch (e) {
    console.error('Error loading from localStorage or parsing cache:', e);
  }
  return null;
};