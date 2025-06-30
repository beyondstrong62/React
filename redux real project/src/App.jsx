import React from 'react';
import PostList from './features/posts/components/postsLists';
import PostForm from './features/posts/components/PostForm';
import ApiSlicePlaceholder from './app/api/apiSlice';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Redux Toolkit Demo</h1>
      <ApiSlicePlaceholder />
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;