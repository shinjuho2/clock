import React, { useEffect, useState } from 'react';
import * as H from '../styled-components/styledClock';

export default function Clock() {
  const [clock, setClock] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const year = clock.getFullYear();
  const month = String(clock.getMonth() + 1).padStart(2, '0');
  const day = String(clock.getDate()).padStart(2, '0');
  const hours = String(clock.getHours()).padStart(2, '0');
  const minutes = String(clock.getMinutes()).padStart(2, '0');
  const seconds = String(clock.getSeconds()).padStart(2, '0');

  return (
    <H.ClockContainer>
      <H.Time>{`${year}-${month}-${day}`}</H.Time>
      <H.Time>{`${hours}:${minutes}:${seconds}`}</H.Time>
    </H.ClockContainer>
  )
}