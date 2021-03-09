import React, { useRef, useState } from 'react';
import './Timer.css';
import CountDown from './CountDown'

export default function Timer({startTime, alarmSound}) {

    const [isCounting, setIsCounting] = useState(false);
    const label = useRef(null)

    const handleCountingClick = () => {
      setIsCounting(prevState => !prevState)
      label.current.focus() 
    }

    return (
      <div className="timer-container container">
        <h2>Timer</h2>
        <input 
          id="label-input" 
          ref={label} type="text" 
          placeholder="Add label"></input>
        <CountDown 
          isCounting={isCounting} 
          setIsCounting={setIsCounting} 
          startTime={startTime} 
          label={label} 
          alarmSound={alarmSound}/>
        <i 
          onClick={handleCountingClick} 
          className={isCounting ? "timer-start far fa-pause-circle" : "timer-start far fa-play-circle"}></i>
      </div>
    );
  }
  