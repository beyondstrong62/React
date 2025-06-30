import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (userId, thunkAPI) => {
    try {
      const url = userId 
        ? `https://jsonplaceholder.typicode.com/users/${userId}/posts`
        : 'https://jsonplaceholder.typicode.com/posts';
      
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);