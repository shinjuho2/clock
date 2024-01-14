import { useState } from "react"
import * as H from '../styled-components/styledClock';
import { TimerContainer } from './../styled-components/styledClock';

export default function Timer() {
    const [sec, setSec] = useState(0);
    
    return(
        <H.TimerContainer>
          <H.TimerText></H.TimerText>
        </H.TimerContainer>
    )
}