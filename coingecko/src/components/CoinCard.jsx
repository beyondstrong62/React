// src/components/CoinCard.jsx
import React from 'react';

function CoinCard({ coin }) {
  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    }
  };

  const priceChangeStyle = {
    color: coin.price_change_percentage_24h >= 0 ? '#28a745' : '#dc3545',
    fontWeight: 'bold',
  };

  return (
    <div style={cardStyle}>
      <img src={coin.image} alt={coin.name} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
      <div style={{ flexGrow: 1 }}>
        <h3 style={{ margin: 0, fontSize: '1.2em' }}>
          {coin.name} <span style={{ color: '#6c757d', fontSize: '0.8em' }}>({coin.symbol.toUpperCase()})</span>
        </h3>
        <p style={{ margin: '5px 0 0 0', fontSize: '1.1em', fontWeight: 'bold' }}>
          ${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <p style={{ margin: 0, fontSize: '0.9em' }}>24h Change:</p>
        <p style={priceChangeStyle}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

export default CoinCard;