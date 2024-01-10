import React, { useState } from 'react';
import { Time, Wrapper } from '../styled-components/styledClock';

export default function Clock() {

  const [clock, setClock] = useState('');

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <Wrapper>
      <Time>{`${year}-${month}-${day}`}</Time>
      <Time>{`${hours}:${minutes}:${seconds}`}</Time>
    </Wrapper>
  )
}