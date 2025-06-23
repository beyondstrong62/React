// AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
// import { jwtDecode } from 'jwt-decode'; // Uncomment if using the library

const AuthContext = createContext(null);

// Helper function to decode token (simplified for this example)
// In a real app, you'd use 'jwt-decode' library: jwtDecode(token)
const decodeToken = (token) => {
  try {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    return {
      id: decodedPayload.userId,
      name: decodedPayload.username,
      email: decodedPayload.email,
    };
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
      const decodedUser = decodeToken(storedToken);
      if (decodedUser) {
        setUser(decodedUser);
      } else {
        localStorage.removeItem('authToken');
      }
    }
  }, []);

  const login = (newToken) => {
    localStorage.setItem('authToken', newToken);
    setToken(newToken);
    const decodedUser = decodeToken(newToken);
    if (decodedUser) {
      setUser(decodedUser);
    } else {
      localStorage.removeItem('authToken');
      setUser(null);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);