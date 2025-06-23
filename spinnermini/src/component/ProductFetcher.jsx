// src/components/ProductFetcher.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component

/**
 * ProductFetcher Component
 * Fetches a list of products, manages loading/error states,
 * and renders them using the ProductCard component.
 */
function ProductFetcher() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect: ProductFetcher mounted. Initiating product fetch...");
    setLoading(true);
    setError(null);

    const fetchProducts = async () => {
      try {
        // Fetch products from Fake Store API
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
        console.log("Products fetched successfully!");
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
        console.log("Product fetch operation completed.");
      }
    };

    fetchProducts();

    // Cleanup function (optional for simple fetches)
    return () => {
      console.log("Cleanup: ProductFetcher component unmounting.");
    };

  }, []); // Empty dependency array: runs only once on mount

  // --- Conditional Rendering for Loading, Error, and Data ---
  if (loading) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <p>Loading products... Please wait.</p>
        <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '20px', height: '20px', animation: 'spin 1s linear infinite', display: 'inline-block' }}></div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '20px', border: '1px solid #dc3545', margin: '10px', color: '#dc3545', borderRadius: '8px', backgroundColor: '#f8d7da' }}>
        <h2>Error Loading Products!</h2>
        <p>Failed to fetch products: {error}</p>
        <p>Please check your network connection or try again later.</p>
      </div>
    );
  }

  // If no loading and no error, display the fetched products.
  return (
    <div style={{ padding: '20px', border: '1px solid #007bff', margin: '10px', borderRadius: '8px', backgroundColor: '#e0f7fa' }}>
      <h2 style={{ textAlign: 'center', color: '#0056b3' }}>Product List</h2>
      <p style={{ textAlign: 'center', color: '#555' }}>
        Fetched from <a href="https://fakestoreapi.com/" target="_blank" rel="noopener noreferrer">fakestoreapi.com</a>.
        <br/>Items dynamically styled based on price (red for expensive, green for cheap).
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {products.length === 0 ? (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', fontStyle: 'italic', color: '#888' }}>No products found.</p>
        ) : (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductFetcher;