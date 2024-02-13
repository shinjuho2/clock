import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const TimerContainer = styled.div`
  text-align: center;
`;

const TimerInput = styled.input`
  margin: 0 5px;
  width: 50px;
`;

const TimerButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function Timer(){
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (timerOn) {
      intervalId = setInterval(() => {
        if (seconds === 0 && minutes === 0 && hours === 0) {
          clearInterval(intervalId);
          setTimerOn(false);
          alert('타이머가 종료되었습니다.');
        } else if (seconds === 0 && minutes === 0) {
          setHours((prevHours) => prevHours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timerOn, seconds, minutes, hours]);

  const handleStart = () => {
    setTimerOn(true);
  };

  const handleStop = () => {
    setTimerOn(false);
  };

  const handleReset = () => {
    setTimerOn(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <TimerContainer>
      <div>
        <label>
          Hours:
          <TimerInput type="number" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} />
        </label>
        <label>
          Minutes:
          <TimerInput type="number" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))} />
        </label>
        <label>
          Seconds:
          <TimerInput type="number" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <TimerButton onClick={handleStart}>Start</TimerButton>
        <TimerButton onClick={handleStop}>Stop</TimerButton>
        <TimerButton onClick={handleReset}>Reset</TimerButton>
      </div>
    </TimerContainer>
  );
};