import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AuthFormBlock = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background: white;
`;

const AuthFormInput = styled.input`
  width: 100%;
`;

const Button = styled.button`
  width: 25%;
  color: white;
  background: black;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #2f3632;
  }
`;

const Footer = styled.div`
  font-size: 12px;
  margin-top: 10px;
  text-align: end;
  cursor: pointer;
  &:hover {
    color: #353b48;
  }
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, onLogin, onCancel }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <div>{text}</div>
      <AuthFormInput name="username" placeholder="아이디" />
      <AuthFormInput name="password" type="password" placeholder="비밀번호" />
      {type === 'register' && (
        <AuthFormInput
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호확인"
        />
      )}
      <Button onClick={onLogin}>{text}</Button>
      <Button onClick={onCancel}>닫기</Button>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
