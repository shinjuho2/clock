import React, { useState } from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Clock from './routes/clock';
import Timer from './routes/timer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Clock/>,
  },
  {
    path: "/timer",
    element: <Timer/>,
  }
])

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Button = styled.label`
  padding: 10px 0px;
  color: #1d9bf0;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #1d9bf0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #000000;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => {setDarkMode(true)}}>DarkMode🔄️</Button>
      { darkMode ? <GlobalStyles /> : null }
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
