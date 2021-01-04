import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const LoginPage = ({ visible, onLogin, onCancel }) => {
  return (
    <AuthTemplate visible={visible} onLogin={onLogin} onCancel={onCancel}>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
