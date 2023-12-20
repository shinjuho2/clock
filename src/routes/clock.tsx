import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Time = styled.div`
  
`;

export default function Clock() {

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours() - 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <Wrapper>
      <Time>{`${year}-${month}-${day}`}</Time>
      <Time>{`${hours}:${minutes}:${seconds}`}</Time>
    </Wrapper>
  )
}