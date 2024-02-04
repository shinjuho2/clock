import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Clock from './routes/clock';
import Timer from './routes/stopwatch';
import NavBar from './components/navbar';
import * as H from './styled-components/styledClock';
import Stopwatch from './routes/stopwatch';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Clock/>,
  },
  {
    path: "/timer",
    element: <Timer/>,
  },
  {
    path: "/stopwatch",
    element: <Stopwatch/>,
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
