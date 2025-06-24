// src/context/AuthContext.jsx
// This file manages our global authentication state.
import React, { createContext, useReducer, useContext, useEffect } from 'react';

// 1. Define the initial state for authentication
// - isAuthenticated: true if a user is logged in, false otherwise.
// - user: Stores user data (e.g., { username: '...' }) or null.
// - loading: True during initial check (e.g., checking local storage/session) or API calls.
const initialAuthState = {
  isAuthenticated: false,
  user: null,
  loading: true, // Start as true, assuming an initial check is needed
};

// 2. Define the authentication reducer function
// This function determines how the auth state changes based on dispatched actions.
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      // When a user logs in, set isAuthenticated to true and store user data.
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case 'LOGOUT':
      // When a user logs out, reset authentication status and user data.
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case 'SET_LOADING':
      // To control the loading state, useful for initial checks or API calls.
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

// 3. Create the Contexts
// Separating state and dispatch contexts for optimized re-renders.
export const AuthStateContext = createContext(initialAuthState);
export const AuthDispatchContext = createContext(() => {}); // Default no-op dispatch

// 4. Create the AuthProvider component
// This component will provide the authentication state and dispatch function
// to all components wrapped by it.
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  // useEffect to simulate an initial authentication check (e.g., from local storage or an API)
  useEffect(() => {
    const checkAuthStatus = async () => {
      // Simulate an asynchronous check (e.g., fetching user session from backend)
      // In a real app, you'd make an API call here.
      dispatch({ type: 'SET_LOADING', payload: true }); // Ensure loading is true while checking

      try {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
          // Simulate a small delay for a network request
          await new Promise(resolve => setTimeout(resolve, 500));
          dispatch({ type: 'LOGIN', payload: JSON.parse(storedUser) });
        } else {
          dispatch({ type: 'LOGOUT' }); // No user found, so not authenticated
        }
      } catch (error) {
        console.error("Failed to read user from local storage:", error);
        dispatch({ type: 'LOGOUT' }); // Handle error by logging out
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false }); // Auth check complete
      }
    };

    checkAuthStatus();
  }, []); // Run only once on component mount

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

// 5. Create custom hooks for easier consumption
// These hooks make it straightforward for any component to get the auth state or dispatch actions.

// Hook to access the current authentication state (isAuthenticated, user, loading)
export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within an AuthProvider');
  }
  return context;
};

// Hook to access the dispatch function to trigger authentication actions
export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within an AuthProvider');
  }
  return context;
};