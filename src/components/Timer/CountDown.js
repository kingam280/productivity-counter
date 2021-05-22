import React, { useEffect, useState, useContext} from 'react';
import setSound from '../../utils/setSound';
import { AuthContext } from '../../contexts/Auth'
import { connect } from "react-redux";
import { setIsCounting, setIsDuringCounting, setTimeLeft, saveRecord, setCurrentLabel } from "../../store/actions/actions"

const CountDown = ({ isCounting, setIsCounting, focusTime, currentLabel, setCurrentLabel, alarmSound, setIsDuringCounting,  timeLeft, setTimeLeft, saveRecord }) => {
    const [focusTimeMinutes, setFocusTimeMinutes] = useState(Math.floor(timeLeft / 1000 / 60));
    const [focusTimeSeconds, setFocusTimeSeconds] = useState(Math.floor((timeLeft / 1000) % 60));
    const [startDate, setStartDate] = useState(Date.now())

    const { user } = useContext(AuthContext)

    useEffect(() => {
        let timer = null
        
        if (isCounting && timeLeft >= 1000) {
          timer = setTimeout(() => {
            setTimeLeft(timeLeft - (Date.now() - startDate))
            setStartDate(Date.now())
          }, 100);

        } else if (!isCounting) {
          timer = setTimeout(() => {
            setStartDate(Date.now())
          }, 500)
          
        } else if (isCounting && timeLeft < 1000) {
          timer = setTimeout(() => {
            setIsCounting(false)
            setIsDuringCounting(false)
            setTimeLeft(focusTime * 1000 * 60)
            saveRecord({userId: user, focusTime, label: currentLabel})
            setCurrentLabel(null)
            const sound = new Audio(setSound(alarmSound))
            sound.play()
          }, 100)  
        }
  
        setFocusTimeMinutes(timeLeft === 3600000 ? 60 : Math.floor((timeLeft / 1000 / 60) % 60))
        setFocusTimeSeconds(Math.floor((timeLeft / 1000) % 60))
  
        return () => clearInterval(timer)
      }, [isCounting, alarmSound, focusTime, currentLabel, setCurrentLabel, setIsCounting, setIsDuringCounting, user, setFocusTimeMinutes, setFocusTimeSeconds, timeLeft, startDate, setTimeLeft, setStartDate, saveRecord])
      
    return (
        <div className="timer" style={isCounting ? {animationPlayState: "running"} : {animationPlayState: "paused"}}>
          <p className="timer-time">{focusTimeMinutes}:{focusTimeSeconds > 9 ? focusTimeSeconds : '0' + focusTimeSeconds}</p>
          <p className="timer-type">FOCUS</p>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    focusTime: state.settings.focusTime,
    alarmSound: state.settings.alarmSound,
    isCounting: state.counter.isCounting,
    timeLeft: state.counter.timeLeft,
    currentLabel: state.counter.currentLabel
  }
}

const mapDispatchToProps = dispatch => ({ 
  setIsCounting: state => dispatch(setIsCounting(state)),
  setIsDuringCounting: state => dispatch(setIsDuringCounting(state)),
  setTimeLeft: state => dispatch(setTimeLeft(state)),
  saveRecord: state => dispatch(saveRecord(state)),
  setCurrentLabel: state => dispatch(setCurrentLabel(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(CountDown)