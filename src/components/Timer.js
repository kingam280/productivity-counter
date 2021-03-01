import React, { useEffect, useState, useRef } from 'react';
import '../styles/Timer.css';
import addRecordToDatabase from '../data/addRecordToDatabes'

export default function Timer({startTime}) {

    const [isCounting, setIsCounting] = useState(false);
    const [focusTimeMinutes, setFoucsTimeMinutes] = useState(startTime);
    const [focusTimeSeconds, setFoucsTimeSeconds] = useState(0);
    
    const label = useRef(null)

    const handleCountingClick = () => {
      setIsCounting(prevState => !prevState)
      label.current.focus()
    }
    
    

    useEffect(() => {
      let intervalSec = null
      if (isCounting && focusTimeSeconds === 0 && focusTimeMinutes !==0) {
        setTimeout( () => {
          setFoucsTimeSeconds(10)
          setFoucsTimeMinutes(prev => prev - 1)
        }, 1000)
      } else if (isCounting && focusTimeSeconds !== 0) {
        intervalSec = setInterval( () => setFoucsTimeSeconds( prev => prev - 1), 1000)
      } else if (isCounting && focusTimeMinutes === 0 && focusTimeSeconds === 0) {
        setIsCounting(prev => !prev)
        setFoucsTimeMinutes(startTime)
        addRecordToDatabase(startTime, label.current.value)
        label.current.value = null
      } else {
        clearInterval(intervalSec)
      }

      return () => {
        clearInterval(intervalSec)
      }
    }, [isCounting, focusTimeSeconds, focusTimeMinutes, startTime])   

    return (
      <div className="timer-container">
        <input ref={label} type="text" placeholder="Add label"></input>
        <div className="timer">
          {focusTimeMinutes}:{focusTimeSeconds > 9 ? focusTimeSeconds : '0' + focusTimeSeconds}
        </div>
        <button onClick={handleCountingClick}>{isCounting ? "Pause" : "Start"}</button>
      </div>
    );
  }
  