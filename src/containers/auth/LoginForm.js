import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = ({
  type,
  onTypeLogin,
  onTypeRegister,
  onLogin,
  onCancel,
}) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    //modules/auth의 auth랑 연결(조회)
    form: auth.login,
  }));
  //인풋 변경
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm
      type={type}
      form={form}
      onLogin={onLogin}
      onCancel={onCancel}
      onTypeLogin={onTypeLogin}
      onTypeRegister={onTypeRegister}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
