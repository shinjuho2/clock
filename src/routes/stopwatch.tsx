import { useEffect, useState } from "react"
import * as H from '../styled-components/styledClock';

export default function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [lapTimes, setLapTimes] = useState<number[]>([]);

    useEffect(() => {
      let intervalId: NodeJS.Timeout;
  
      if (isRunning) {
        intervalId = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
      }
  
      return () => clearInterval(intervalId);
    }, [isRunning]);
  
    const handleToggle = () => {
      setIsRunning((prevState) => !prevState);
    };
  
    const handleLap = () => {
      setLapTimes((prevLapTimes) => [...prevLapTimes, time]);
    };
  
    const handleReset = () => {
      setTime(0);
      setLapTimes([]);
    };
  
    const formattedTime = new Date(time * 1000).toISOString().substring(11, 8);
  
    return (
      <H.StopwatchContainer>
        <H.StopwatchText>{`Time: ${formattedTime}`}</H.StopwatchText>
        <H.StopwatchButton onClick={handleToggle}>{isRunning ? 'Pause' : 'Start'}</H.StopwatchButton>
        <H.StopwatchButton onClick={handleLap} disabled={!isRunning}>
          Lap
        </H.StopwatchButton>
        <H.StopwatchButton onClick={handleReset}>Reset</H.StopwatchButton>
        <ul>
          {lapTimes.map((lapTime, index) => (
            <li key={index}>{`Lap ${index + 1}: ${new Date(lapTime * 1000).toISOString().substring(11, 8)}`}</li>
          ))}
        </ul>
      </H.StopwatchContainer>
    );
}