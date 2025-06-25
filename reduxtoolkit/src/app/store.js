// **1. `src/app/store.js`**
// (This file sets up your main Redux store.)

// ```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; // Import your counter reducer

// configureStore sets up the Redux store with sensible defaults.
// It automatically includes Redux DevTools Extension and Redux Thunk middleware.
const store = configureStore({
  reducer: {
    // Define your reducers here. Each key will be a slice of your state.
    counter: counterReducer, // The counter slice will be managed by counterReducer
    // Add other reducers here for different parts of your application state
    // users: usersReducer,
    // products: productsReducer,
  },
});

export default store;