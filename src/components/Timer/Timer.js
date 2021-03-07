import React, { useEffect, useState, useRef } from 'react';
import './Timer.css';
import addRecordToDatabase from '../../utils/addRecordToDatabes'
import setSound from '../../utils/setSound'

export default function Timer({startTime, alarmSound}) {

    const [isCounting, setIsCounting] = useState(false);
    const [focusTimeMinutes, setFoucsTimeMinutes] = useState(startTime);
    const [focusTimeSeconds, setFoucsTimeSeconds] = useState(0);
    const [timerInfo, setTimerInfo] = useState({
      time: startTime * 1000 * 60,
      timeLeft: startTime * 1000 * 60,
      startDate: Date.now()
    })
    const label = useRef(null)

    const handleCountingClick = () => {
      setIsCounting(prevState => !prevState)
      label.current.focus() 
    }

    useEffect(() => {
      let timer = null

      if (isCounting && timerInfo.timeLeft >= 1000) {
        timer = setTimeout(() => {
          setTimerInfo(prev => ({
            ...prev,
            timeLeft: prev.timeLeft - (Date.now() - prev.startDate),
            startDate: Date.now() 
          }))
        }, 100);
      } else if (!isCounting) {
        timer = setTimeout(() => {
          setTimerInfo(prev => ({
            ...prev,
            startDate: Date.now() 
          }))
        }, 1000)
        
      } else if (isCounting && timerInfo.timeLeft < 1000) {
        timer = setTimeout(() => {
          setIsCounting(prev => !prev)
          setTimerInfo(prev => ({
            ...prev,
            timeLeft: startTime * 1000 * 60,
          }))
          addRecordToDatabase(startTime, label.current.value)
          label.current.value = null
          const sound = new Audio(setSound(alarmSound))
          sound.play()
        }, 100)  
      }

      setFoucsTimeMinutes(Math.floor((timerInfo.timeLeft / 1000 / 60) % 60))
      setFoucsTimeSeconds(Math.floor((timerInfo.timeLeft / 1000) % 60))

      return () => clearInterval(timer)
    }, [isCounting, timerInfo, alarmSound, startTime])
    
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
  