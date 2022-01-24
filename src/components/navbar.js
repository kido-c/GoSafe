import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {

  const NavContainer = styled.div`
    margin: 30px 20px 20px 35px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    line-height: 50px;
    border: 2px solid black;
    width: 95%;
    height: 50px;
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
    background-color: white;
  `;

  const NavLogo = styled.div`
  `;

  const NavTitle = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
      color: white;
      transition: color 0.1s ease-in-out;
    }
  `;
  
  const NavList = styled.div`

  `;

  const NavEmpty = styled.div`

    `;
  
  const ListLink = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    color: black;
    &:hover {
      color: purple;
      transition: color 0.1s ease-in-out;
    }
  `;
  



    return (
      <NavContainer>
        <NavEmpty/>
        <NavLogo>
          <NavTitle to="/">GoSafe</NavTitle>
        </NavLogo>
        <NavList>
          <ListLink to="/statistics" >통계</ListLink>
        </NavList>
      </NavContainer>
    );
}

export default Navbar;
