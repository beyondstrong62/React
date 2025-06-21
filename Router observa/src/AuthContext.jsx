// AuthContext.jsx (simplified)
import React, { createContext, useContext, useState, useEffect } from 'react';



const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Will store the logged-in user object { id, name, ... }

  // In a real app, you'd check for a token in localStorage on mount
  // and validate it with your backend to re-establish session
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData)); // Store user data
    // In a real app, you'd store a token here
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    // Clear token, etc.
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);