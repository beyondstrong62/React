// src/components/ProductCard.jsx
import React from 'react';

/**
 * ProductCard Component
 * Renders a single product item with dynamic styling.
 */
function ProductCard({ product }) {
  // Dynamic styling based on product price
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.2s ease-in-out',
  };

  // Example of dynamic styling: highlight expensive items
  if (product.price > 500) {
    cardStyle.border = '2px solid #dc3545'; // Red border for expensive
    cardStyle.backgroundColor = '#fff0f0';
  } else if (product.price < 50) {
    cardStyle.border = '2px solid #28a745'; // Green border for cheaper
    cardStyle.backgroundColor = '#f0fff0';
  }

  return (
    <div style={cardStyle}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '10px' }}
      />
      <h3 style={{ fontSize: '1.2em', margin: '0 0 5px 0', color: '#333' }}>{product.title}</h3>
      <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '5px' }}>Category: {product.category}</p>
      <p style={{ fontSize: '1.4em', fontWeight: 'bold', color: '#007bff' }}>${product.price.toFixed(2)}</p>
      <p style={{ fontSize: '0.8em', color: '#999' }}>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  );
}

export default ProductCard;