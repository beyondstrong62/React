// src/context/CounterContext.jsx
// This file sets up our global state using createContext and useReducer.
import React, { createContext, useReducer, useContext } from 'react';

// 1. Define the initial state for our counter
const initialState = 0;

// 2. Define the reducer function
// This function determines how the state changes in response to actions.
// It takes the current state and an action, and returns the new state.
// This is a "pure" function – given the same inputs, it always produces
// the same output and has no side effects.
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0; // Added a reset action for demonstration
    default:
      // If an unknown action is dispatched, return the current state unchanged.
      return state;
  }
};

// 3. Create the Contexts
// We create two separate contexts for performance optimization:
// - CounterStateContext: To provide the current state value.
// - CounterDispatchContext: To provide the dispatch function (which is stable across renders).
// This prevents components that only need to dispatch actions from re-rendering
// when the state itself changes.
export const CounterStateContext = createContext(initialState); // Default value for context
export const CounterDispatchContext = createContext(() => {}); // Default no-op function for dispatch

// 4. Create the CounterProvider component
// This component will wrap your application (or a part of it)
// to make the state and dispatch function available to its children.
export const CounterProvider = ({ children }) => {
  // useReducer hook to manage the state with our defined reducer and initial state
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
};

// 5. Create custom hooks for easier consumption
// These hooks simplify how components access the state and dispatch function,
// making the component code cleaner and preventing accidental misuse
// (e.g., using the context outside of its Provider).

// Hook to access the current counter state
export const useCounterState = () => {
  const context = useContext(CounterStateContext);
  if (context === undefined) {
    throw new Error('useCounterState must be used within a CounterProvider');
  }
  return context;
};

// Hook to access the dispatch function to send actions
export const useCounterDispatch = () => {
  const context = useContext(CounterDispatchContext);
  if (context === undefined) {
    throw new Error('useCounterDispatch must be used within a CounterProvider');
  }
  return context;
};