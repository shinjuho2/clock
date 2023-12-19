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
  return (
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
