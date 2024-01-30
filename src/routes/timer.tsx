import { useState } from "react";

export default function Timer() {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [timerOn, setTimerOn] = useState<boolean>(false);
    
    return <h1>timer</h1>    
}