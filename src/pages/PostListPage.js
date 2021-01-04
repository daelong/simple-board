import React from 'react';
import Navigation from '../components/common/Navigation';
import PostList from '../components/post/PostList';
import PostListTemplate from '../components/post/PostListTemplate';

const PostListPage = () => {
  return (
    <PostListTemplate>
      <Navigation />
      <PostList />
    </PostListTemplate>
  );
};

export default PostListPage;
