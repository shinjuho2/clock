import React, { useState } from 'react';
import * as N from '../styled-components/styledNavbar';
import { ThemeProvider } from 'styled-components';

function NavBar() {

  const [darkMode, setDarkMode] = useState(false);
  const darkModeHandler = () => {
    setDarkMode(!darkMode)
  };
  

  return (
    <ThemeProvider theme={darkMode ? N.darkTheme : N.lightTheme}>
      <N.NavBarContainer>
        <N.Logo>My Website</N.Logo>
        <N.NavItems>
          <a href="/">Home</a>
          <a href="/">Clock</a>
          <a href="/timer">Timer</a>
        </N.NavItems>
        <N.DarkModeToggle onClick={darkModeHandler} >
          {darkMode ? 'Light Mode🔄️' : 'Dark Mode🔄️'}
        </N.DarkModeToggle>
      </N.NavBarContainer>
    </ThemeProvider>
  );
};

export default NavBar;