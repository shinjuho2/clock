import { useEffect, useState } from "react"
import * as H from '../styled-components/styledClock';
import { TimerContainer } from './../styled-components/styledClock';

export default function Timer() {
    const [sec, setSec] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setSec((prevSec) => prevSec + 1);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const Timer = new Date(sec * 1000).toISOString().substring(11, 8);
    

    return(
        <H.TimerContainer>
          <H.TimerText>{`Timer: ${sec} seconds`}</H.TimerText>
        </H.TimerContainer>
    )
}