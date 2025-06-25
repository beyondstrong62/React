// **2. `src/features/counter/counterSlice.js`**
// (This file defines your counter's state, actions, and reducer using `createSlice`.)

// ```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', // A name for your slice (used in Redux DevTools and for action types)
  initialState: { value: 0 }, // The initial state for this specific slice
  reducers: {
    // Reducer functions go here. Redux Toolkit uses Immer internally,
    // so you can "mutate" state directly, and Immer will handle creating new immutable state.
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Example of a reducer that accepts a payload
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  }
});

// createSlice automatically generates action creators from your reducer functions.
// We destructure and export them for use in your components.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// We also export the reducer function itself, which will be combined in the store.
export default counterSlice.reducer;