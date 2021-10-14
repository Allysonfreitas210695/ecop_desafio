import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants";

const HeaderContainer = styled.header`
  background-color: ${colors.black};
  width: 100%;
  height: 65px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;

  .link_login{
    font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.white};
  cursor: pointer;

  &:hover { 
    padding: 8px;
    border-radius: 8px;
    background: ${colors.blue};
  }
  }
`;

export const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <Link to="/" className="link_login">AllysonFlix</Link>
        <Link to="/Login" className="link_login">Login</Link >
      </HeaderContainer>
    </div>
  );
}