import React, { useEffect, useState } from 'react';
import '../styles/Timer.css';

export default function Timer({startTime}) {

    const [isCounting, setIsCounting] = useState(false);
    const [focusTimeMinutes, setFoucsTimeMinutes] = useState(startTime);
    const [focusTimeSeconds, setFoucsTimeSeconds] = useState(0);

    const handleCountingClick = () => {
      setIsCounting(prevState => !prevState)
    }

    useEffect(() => {
      let intervalSec = null
      if (isCounting && focusTimeSeconds === 0 && focusTimeMinutes !==0) {
        setTimeout( () => {
          setFoucsTimeSeconds(59)
          setFoucsTimeMinutes(prev => prev - 1)
        }, 1000)
      } else if (isCounting && focusTimeSeconds !== 0) {
        intervalSec = setInterval( () => setFoucsTimeSeconds( prev => prev - 1), 1000)
      } else if (isCounting && focusTimeMinutes === 0 && focusTimeSeconds === 0) {
        setIsCounting(prev => !prev)
        setFoucsTimeMinutes(startTime)
      } else {
        clearInterval(intervalSec)
      }

      return () => {
        clearInterval(intervalSec)
      }
    }, [isCounting, focusTimeSeconds, focusTimeMinutes])   

    return (
      <div className="timer-container">
        Hello, I'm Timer!
        <div className="timer">
          {focusTimeMinutes}:{focusTimeSeconds > 9 ? focusTimeSeconds : '0' + focusTimeSeconds}
        </div>
        <button onClick={handleCountingClick}>{isCounting ? "Pause" : "Start"}</button>
      </div>
    );
  }
  