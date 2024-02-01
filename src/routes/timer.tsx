import { useEffect, useState } from "react";

export default function Timer() {
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
        <div>
        </div>
    );
}