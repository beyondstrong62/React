// src/components/CryptoDashboard.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { fetchCryptoPrices } from '../utils/api';
import useDebounce from '../hooks/useDebounce';
import LoadingSpinner from './LoadingSpinner';
import CoinCard from './CoinCard';

function CryptoDashboard() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms debounce
  const [retryCount, setRetryCount] = useState(0); // For retry logic

  // --- Fetching Function (wrapped in useCallback for polling) ---
  const getPrices = useCallback(async () => {
    setLoading(true);
    setError(null); // Clear error on new attempt

    try {
      const data = await fetchCryptoPrices(); // This handles cache/online status
      setCoins(data);
      // Immediately filter when new data arrives
      filterCoins(data, debouncedSearchTerm);
    } catch (err) {
      console.error("Failed to fetch crypto prices:", err);
      setError("Failed to load prices. Check network or try again.");
    } finally {
      setLoading(false);
    }
  }, [debouncedSearchTerm]); // Re-run if debouncedSearchTerm changes (so initial data is filtered)

  // --- Polling Effect ---
  useEffect(() => {
    // Initial fetch on mount
    getPrices();

    // Set up polling interval (every 10 seconds)
    const intervalId = setInterval(() => {
      console.log('Polling for new crypto prices...');
      getPrices();
    }, 10000); // 10 seconds

    // Cleanup function: Clear interval on unmount
    return () => {
      console.log('Cleaning up polling interval.');
      clearInterval(intervalId);
    };
  }, [getPrices, retryCount]); // getPrices dependency for fresh data, retryCount to trigger re-fetch

  // --- Search Filtering Effect ---
  // This effect runs whenever debouncedSearchTerm or coins (raw data) changes
  const filterCoins = useCallback((allCoins, term) => {
    if (!allCoins || allCoins.length === 0) {
      setFilteredCoins([]);
      return;
    }
    if (term.trim() === '') {
      setFilteredCoins(allCoins);
    } else {
      const lowerCaseTerm = term.toLowerCase();
      const filtered = allCoins.filter(coin =>
        coin.name.toLowerCase().includes(lowerCaseTerm) ||
        coin.symbol.toLowerCase().includes(lowerCaseTerm)
      );
      setFilteredCoins(filtered);
    }
  }, []); // filterCoins itself has no external dependencies

  useEffect(() => {
    filterCoins(coins, debouncedSearchTerm);
  }, [coins, debouncedSearchTerm, filterCoins]);


  // --- Retry Logic ---
  const handleRetry = () => {
    console.log('Retrying fetch...');
    setError(null); // Clear error
    setLoading(true); // Show loading
    setRetryCount(prev => prev + 1); // Increment retryCount to trigger useEffect
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Crypto Price Dashboard</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search coin (e.g., Bitcoin, BTC)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: 'calc(100% - 22px)',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          fontSize: '1em'
        }}
      />

      {/* Network Status Indicator */}
      {!navigator.onLine && (
        <p style={{
          backgroundColor: '#ffc107',
          color: '#333',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '15px'
        }}>
          You are currently offline. Displaying cached data.
        </p>
      )}

      {/* Loading State */}
      {loading && <LoadingSpinner message="Fetching live prices..." />}

      {/* Error State */}
      {!loading && error && (
        <div style={{
          border: '2px solid #dc3545',
          padding: '20px',
          margin: '20px 0',
          borderRadius: '8px',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          textAlign: 'center'
        }}>
          <h2>Error!</h2>
          <p>{error}</p>
          <button
            onClick={handleRetry}
            style={{
              padding: '10px 20px',
              marginTop: '15px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Retry Fetch
          </button>
        </div>
      )}

      {/* No Results / No Coins Found */}
      {!loading && !error && filteredCoins.length === 0 && (
        <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#888' }}>
          {searchTerm.trim() === '' ? 'No cryptocurrencies loaded.' : `No results found for "${searchTerm}".`}
        </p>
      )}

      {/* Display Coins */}
      {!loading && !error && filteredCoins.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filteredCoins.map(coin => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CryptoDashboard;