import React, { useState } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  background-color: #333;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavItems = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  
`

function NavBar() {

    const [darkMode, setDarkMode] = useState(false);
    const darkModeHandler = () => {
        setDarkMode(!darkMode)
    };

  return (
    <NavBarContainer>
      <Logo>My Website</Logo>
      <NavItems>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <Button onClick={darkModeHandler}>DarkMode🔄️</Button>
      </NavItems>
    </NavBarContainer>
  );
};

export default NavBar;