import React from 'react';
import styled from 'styled-components';

const PostListTemplateBlock = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const PostListTemplate = ({ children }) => {
  return <PostListTemplateBlock>{children}</PostListTemplateBlock>;
};

export default PostListTemplate;
