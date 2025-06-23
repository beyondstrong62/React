// src/utils/api.js
import axios from 'axios';
import { saveToCache, loadFromCache } from './cache';

const COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3';

// Create an Axios instance (optional but good for global configs like interceptors)
const api = axios.create({
  baseURL: COINGECKO_API_BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Accept': 'application/json',
  },
});

// Example of an Axios Interceptor (for logging, auth, etc.)
api.interceptors.request.use(config => {
  console.log('API Request:', config.url);
  // Add auth token if needed: config.headers.Authorization = `Bearer ${token}`;
  return config;
}, error => {
  return Promise.reject(error);
});

export const fetchCryptoPrices = async () => {
  // Check cache first if offline or for quick initial load
  const cachedData = loadFromCache();

  // If offline and we have cached data, return it immediately
  if (!navigator.onLine && cachedData) {
    console.log('Offline mode: Serving data from cache.');
    return cachedData;
  }

  // If online or no fresh cache, try to fetch from network
  try {
    // Fetch top 10 coins by market cap
    const response = await api.get('/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 20, // Fetch more to allow for filtering
        page: 1,
        sparkline: false,
      },
    });
    saveToCache(response.data); // Cache successful response
    return response.data;
  } catch (error) {
    console.error('Network fetch failed:', error);
    // If network fetch fails, and we have cached data, serve that.
    // This is a graceful fallback for temporary network issues.
    if (cachedData) {
      console.log('Network fetch failed, serving data from cache as fallback.');
      return cachedData;
    }
    // If no cache and network fails, re-throw the error
    throw error;
  }
};