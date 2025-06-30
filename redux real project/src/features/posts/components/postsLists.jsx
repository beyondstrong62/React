import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../postsSlice';
import { fetchPosts } from '../postsAPI';
import Spinner from '../../../components/shared/Spinner';
import Alert from '../../../components/shared/Alert';

function PostItem({ post }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '5px' }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

const PostList = () => {
  const dispatch = useDispatch();
  const { data: posts, status, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts(1));
  }, [dispatch]);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'failed') {
    return <Alert message={error || "Failed to load posts."} />;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button
        onClick={() => dispatch(addPost({ 
          id: Date.now(), 
          title: 'Manually Added Post', 
          body: 'This is a new post added by button.' 
        }))}
        style={{ padding: '10px 15px', margin: '10px 0', cursor: 'pointer' }}
      >
        Add New Post (Local)
      </button>

      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;