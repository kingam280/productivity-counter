import React, { useEffect, useState, useContext} from 'react';
import saveData from '../../utils/saveData'
import setSound from '../../utils/setSound';
import { AuthContext } from '../../contexts/Auth'
import { connect } from "react-redux";
import { setIsCounting, setIsDuringCounting, setTimeLeft } from "../../store/actions/actions"

const CountDown = ({ isCounting, setIsCounting, focusTime, label, alarmSound, setIsDuringCounting,  timeLeft, setTimeLeft }) => {
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
            saveData(user, focusTime, label.current.value)
            label.current.value = null
            const sound = new Audio(setSound(alarmSound))
            sound.play()
          }, 100)  
        }
  
        setFocusTimeMinutes(timeLeft === 3600000 ? 60 : Math.floor((timeLeft / 1000 / 60) % 60))
        setFocusTimeSeconds(Math.floor((timeLeft / 1000) % 60))
  
        return () => clearInterval(timer)
      }, [isCounting, alarmSound, focusTime, label, setIsCounting, setIsDuringCounting, user, setFocusTimeMinutes, setFocusTimeSeconds, timeLeft, startDate, setTimeLeft, setStartDate])
      
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
    timeLeft: state.counter.timeLeft
  }
}

const mapDispatchToProps = dispatch => ({ 
  setIsCounting: state => dispatch(setIsCounting(state)),
  setIsDuringCounting: state => dispatch(setIsDuringCounting(state)),
  setTimeLeft: state => dispatch(setTimeLeft(state)),

});

export default connect(mapStateToProps, mapDispatchToProps)(CountDown)