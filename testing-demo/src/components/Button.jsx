import { useState } from 'react';

export default function Button({ onClick, children }) {
  const [loading, setLoading] = useState(false);
  
  const handleClick = async () => {
    setLoading(true);
    await onClick?.();
    setLoading(false);
  };

  return (
    <button 
      onClick={handleClick}
      className={loading ? 'loading' : ''}
      disabled={loading}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}