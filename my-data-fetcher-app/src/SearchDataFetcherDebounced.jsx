// src/components/SearchDataFetcherDebounced.jsx
import React, { useState, useEffect, useCallback } from 'react';

/**
 * SearchDataFetcherDebounced Component
 * Demonstrates debounced data fetching: delays API calls until user
 * stops typing for a specified duration, preventing API spam.
 */
function SearchDataFetcherDebounced() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTyping, setIsTyping] = useState(false); // New state to indicate user is typing

  // The debounced fetch logic (similar to previous, but now called conditionally)
  const fetchData = useCallback(async (query) => {
    // Only fetch if there's an actual query to send
    if (query.trim() === "") {
      setResults([]);
      setLoading(false); // Ensure loading is off if query is empty
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log(`Fetching data for: "${query}"...`); // Log when actual fetch starts
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResults(data);
      console.log(`Fetched ${data.length} results for: "${query}" successfully.`);
    } catch (err) {
      // Check if the error is an AbortError (if you were using AbortController)
      // This example doesn't use AbortController explicitly, but good practice
      if (err.name === 'AbortError') {
        console.log('Fetch aborted due to new input.');
        // Don't set error for intentional cancellations during debounce
      } else {
        console.error("Error fetching search results:", err);
        setError(err.message);
      }
    } finally {
      setLoading(false);
      setIsTyping(false); // User has stopped typing for the debounce period
    }
  }, []);

  // --- THE DEBOUNCING LOGIC IN useEffect ---
  useEffect(() => {
    // Set isTyping to true immediately when searchTerm changes
    // This allows us to show "Typing..." feedback to the user.
    if (searchTerm.trim() !== "") { // Only set typing if there's actual input
        setIsTyping(true);
    }

    console.log(`useEffect: searchTerm changed to "${searchTerm}". Setting debounce timer.`);

    // Set a timer. If searchTerm changes again before 500ms, this timer will be cleared.
    const timer = setTimeout(() => {
      fetchData(searchTerm); // Only call fetchData after the delay
    }, 500); // 500ms debounce delay

    // Cleanup function: This runs if searchTerm changes again before the timer fires,
    // or when the component unmounts.
    return () => {
      console.log(`Cleanup: Clearing previous timer for "${searchTerm}".`);
      clearTimeout(timer); // Cancel the pending fetch for the previous searchTerm
    };

  }, [searchTerm, fetchData]); // Dependencies: re-run effect when searchTerm or fetchData changes.
                               // fetchData is memoized by useCallback, so only searchTerm typically triggers re-runs here.

  return (
    <div style={{ padding: '20px', border: '1px solid #ffc107', margin: '10px', borderRadius: '8px', backgroundColor: '#fffbe5' }}>
      <h2>Search Debouncing (Advanced)</h2>
      <p>Type something to search posts by title (e.g., "sunt", "quia", "eius").
         <br/>Notice the API calls are delayed until you stop typing for 0.5 seconds.
      </p>

      <input
        type="text"
        placeholder="Enter search term..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: 'calc(100% - 22px)',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ffc107',
          borderRadius: '5px',
          fontSize: '1em'
        }}
      />

      {isTyping && searchTerm.trim() !== "" && (
        <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#856404' }}>Typing... waiting to search</p>
      )}
      {loading && !isTyping && ( // Show loading only when not typing AND an actual fetch is in progress
        <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#007bff' }}>Searching...</p>
      )}
      {error && <p style={{ color: '#dc3545', textAlign: 'center' }}>Error: {error}</p>}

      {!loading && !error && !isTyping && (
        <>
          <h3>Results for "{searchTerm || '...'}" ({results.length} found):</h3>
          {results.length === 0 && searchTerm.trim() !== "" ? (
            <p>No results found for "{searchTerm}".</p>
          ) : results.length === 0 && searchTerm.trim() === "" ? (
            <p>Type something in the search bar to see results.</p>
          ) : (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {results.map(post => (
                <li key={post.id} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#ffffff', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  <strong>{post.title}</strong>
                  <p style={{ fontSize: '0.9em', color: '#6c757d', marginTop: '5px' }}>{post.body.substring(0, 100)}...</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default SearchDataFetcherDebounced;