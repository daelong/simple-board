import React from 'react';
import styled from 'styled-components';

const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;

const AuthFormInput = styled.input`
  width: 100%;
`;

const AuthForm = () => {
  return (
    <AuthFormBlock>
      <AuthFormInput placeholder="아이디" />
      <AuthFormInput placeholder="비밀번호" />
    </AuthFormBlock>
  );
};

export default AuthForm;
