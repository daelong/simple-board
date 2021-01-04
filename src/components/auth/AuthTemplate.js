import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
  background: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthTemplateBox = styled.div`
  .logo {
    left: 0;
    color: black;
    display: block;
    font-weight: bold;
    letter-spacing: 2px;
    &:hover {
      cursor: pointer;
    }
  }
  padding: 20px;
  width: 320px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const AuthTemplate = ({ children, visible }) => {
  if (!visible) return null;
  return (
    <AuthTemplateBlock>
      <AuthTemplateBox>
        <div className="logo">
          {/* <Link to="/"></Link> */}
          Home
        </div>
        {children}
      </AuthTemplateBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
