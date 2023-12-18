import React, { useState } from 'react';
import { styled } from 'styled-components';

interface clock {
  hours:number;
  minutes:number;
  seconds:number;
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Day = styled.div`
  
`;

const Time = styled.div`
  
`;

function App() {

  const [time, setTime] = useState<clock[]>([]);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  console.log(date)
  
  return (
    <Wrapper>
      <Day>{`${year}-${month}-${day}`}</Day>
      <Time>{`${hours - 12}:${minutes}:${seconds}`}</Time>
    </Wrapper>
  );
}

export default App;
