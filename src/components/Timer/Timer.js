import React, { useEffect, useState, useRef } from 'react';
import './Timer.css';
import addRecordToDatabase from '../../helpers/addRecordToDatabes'
import setSound from '../../helpers/setSound'


export default function Timer({startTime, alarmSound}) {

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
          setFoucsTimeSeconds(59)
          setFoucsTimeMinutes(prev => prev - 1)
        }, 1000)
      } else if (isCounting && focusTimeSeconds !== 0) {
        intervalSec = setInterval( () => setFoucsTimeSeconds( prev => prev - 1), 1000)
      } else if (isCounting && focusTimeMinutes === 0 && focusTimeSeconds === 0) {
        setIsCounting(prev => !prev)
        setFoucsTimeMinutes(startTime)
        addRecordToDatabase(startTime, label.current.value)
        label.current.value = null
        const sound = new Audio(setSound(alarmSound))
        sound.play()
      } else {
        clearInterval(intervalSec)
      }

      return () => {
        clearInterval(intervalSec)
      }
    }, [isCounting, focusTimeSeconds, focusTimeMinutes, startTime, alarmSound])   

    return (
      <div className="timer-container container">
        <h2>Timer</h2>
        <input id="label-input" ref={label} type="text" placeholder="Add label"></input>
        <div className="timer" style={isCounting ? {animationPlayState: "running"} : {animationPlayState: "paused"}}>
          <p className="timer-time">{focusTimeMinutes}:{focusTimeSeconds > 9 ? focusTimeSeconds : '0' + focusTimeSeconds}</p>
          <p className="timer-type">FOCUS</p>
        </div>
        <i onClick={handleCountingClick} className={isCounting ? "timer-start far fa-pause-circle" : "timer-start far fa-play-circle"}></i>
      </div>
    );
  }
  