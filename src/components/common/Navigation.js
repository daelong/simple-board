import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AuthTemplate from '../auth/AuthTemplate';
import AuthForm from '../auth/AuthForm';

const NavigationTeplate = styled.div`
  margin: 0;
  padding-left: 15px;
  padding-right: 15px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  font-size: 25px;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;

const Navigation = () => {
  const [modal, setModal] = useState(false);
  const onLoginClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onLogin = () => {
    setModal(false);
  };
  return (
    <NavigationTeplate>
      <LogoBox>
        <Link to="/">daelong</Link>
      </LogoBox>
      <Menu>
        <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faSearch} />
        <div
          onClick={onLoginClick}
          style={{ cursor: 'pointer', paddingLeft: '15px' }}
        >
          로그인
        </div>
        <AuthTemplate visible={modal}>
          <AuthForm onLogin={onLogin} onCancel={onCancel} type="login" />
        </AuthTemplate>
      </Menu>
    </NavigationTeplate>
  );
};

export default Navigation;
