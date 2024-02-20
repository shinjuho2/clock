import { useEffect, useState } from "react"
import * as H from '../styled-components/styledClock';

export default function Stopwatch() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [lapTimes, setLapTimes] = useState<number[]>([]);

    useEffect(() => {
      
      let intervalId: NodeJS.Timeout;
  
      if (isRunning) {
        intervalId = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
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
  
    const formattedTime = (time: number = 0) => {
      const minutes = Math.floor(time / (60 * 100));
      const seconds = Math.floor((time % (60 * 100)) / 100);
      const milliseconds = time % 100;
      return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds < 10 ? '0' : ''}${milliseconds}`;
    };
    
    return (
      <H.StopwatchContainer>
      <H.StopwatchText>{`Time: ${formattedTime(time)}`}</H.StopwatchText>
      <H.StopwatchButton onClick={handleToggle}>{isRunning ? 'Pause' : 'Start'}</H.StopwatchButton>
      <H.StopwatchButton onClick={handleLap} disabled={!isRunning}>
        Lap
      </H.StopwatchButton>
      <H.StopwatchButton onClick={handleReset}>Reset</H.StopwatchButton>
      <ul>
        {lapTimes.map((lapTime, index) => (
          <li key={index}>{`Lap ${index + 1}: ${formattedTime(lapTime)}`}</li>
        ))}
      </ul>
    </H.StopwatchContainer>
    );
}