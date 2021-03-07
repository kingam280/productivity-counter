import React, { useEffect, useState} from 'react';
import addRecordToDatabase from '../../utils/addRecordToDatabes';
import setSound from '../../utils/setSound';

const CountDown = ({isCounting, setIsCounting, startTime, label, alarmSound}) => {
    const [focusTimeMinutes, setFoucsTimeMinutes] = useState(startTime);
    const [focusTimeSeconds, setFoucsTimeSeconds] = useState(0);
    const [timerInfo, setTimerInfo] = useState({
      time: startTime * 1000 * 60,
      timeLeft: startTime * 1000 * 60,
      startDate: Date.now()
    })

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
  
        setFoucsTimeMinutes(timerInfo.timeLeft === 3600000 ? 60 : Math.floor((timerInfo.timeLeft / 1000 / 60) % 60))
        setFoucsTimeSeconds(Math.floor((timerInfo.timeLeft / 1000) % 60))
  
        return () => clearInterval(timer)
      }, [isCounting, timerInfo, alarmSound, startTime, label, setIsCounting])
      
    return (
        <div className="timer" style={isCounting ? {animationPlayState: "running"} : {animationPlayState: "paused"}}>
          <p className="timer-time">{focusTimeMinutes}:{focusTimeSeconds > 9 ? focusTimeSeconds : '0' + focusTimeSeconds}</p>
          <p className="timer-type">FOCUS</p>
        </div>
    )
}

export default CountDown