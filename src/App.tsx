import React, { useState } from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Clock from './routes/clock';
import Timer from './routes/timer';
import NavBar from './components/navbar';
import * as H from './styled-components/styledClock';

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

function App() {

  return (
    <H.Wrapper>
      <NavBar/>
      <RouterProvider router={router} />
    </H.Wrapper>
  );
}

export default App;
