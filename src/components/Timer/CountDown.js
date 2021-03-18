import React, { useEffect, useState, useContext} from 'react';
import addRecordToDatabase from '../../utils/addRecordToDatabes';
import setSound from '../../utils/setSound';
import { AuthContext } from '../../contexts/Auth'
import { connect } from "react-redux";
import { setIsCounting } from "../../store/actions/actions"
import { store } from '../../store/store';

const CountDown = ({ isCounting, setIsCounting, focusTime, label, alarmSound }) => {
    const [focusTimeMinutes, setFoucsTimeMinutes] = useState(focusTime);
    const [focusTimeSeconds, setFoucsTimeSeconds] = useState(0);
    const [timerInfo, setTimerInfo] = useState({
      time: focusTime * 1000 * 60,
      timeLeft: focusTime * 1000 * 60,
      startDate: Date.now()
    })
    const { user } = useContext(AuthContext)

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
            store.dispatch(setIsCounting(false))
            setTimerInfo(prev => ({
              ...prev,
              timeLeft: focusTime * 1000 * 60,
            }))
            const id = user
            addRecordToDatabase(focusTime, label.current.value, id)
            label.current.value = null
            const sound = new Audio(setSound(alarmSound))
            sound.play()
          }, 100)  
        }
  
        setFoucsTimeMinutes(timerInfo.timeLeft === 3600000 ? 60 : Math.floor((timerInfo.timeLeft / 1000 / 60) % 60))
        setFoucsTimeSeconds(Math.floor((timerInfo.timeLeft / 1000) % 60))
  
        return () => clearInterval(timer)
      }, [isCounting, timerInfo, alarmSound, focusTime, label, setIsCounting, user])
      
    return (
        <div className="timer" style={isCounting ? {animationPlayState: "running"} : {animationPlayState: "paused"}}>
          <p className="timer-time">{focusTimeMinutes}:{focusTimeSeconds > 9 ? focusTimeSeconds : '0' + focusTimeSeconds}</p>
          <p className="timer-type">FOCUS</p>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    focusTime: state.focusTime,
    alarmSound: state.alarmSound,
    isCounting: state.isCounting
  }
}

const mapDispatchToProps = { setIsCounting }; // (2)

export default connect(mapStateToProps, mapDispatchToProps)(CountDown)