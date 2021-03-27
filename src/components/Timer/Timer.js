import React, { useRef } from 'react';
import './Timer.css';
import CountDown from './CountDown'
import { connect } from "react-redux";
import { setIsCounting, setIsDuringCounting } from "../../store/actions/actions"

const Timer = ({ isCounting, setIsCounting, isDuringCounting, setIsDuringCounting }) => {
    const label = useRef(null)

    const handleStartCountingClick = () => {
      if (!label.current.value || !isDuringCounting) label.current.focus() 
      setIsCounting(!isCounting)
      if (!isDuringCounting) setIsDuringCounting(true)
    }

    const handleResetCountingClick = () => {
      if (!isDuringCounting) return 
      setIsCounting(false)
      setIsDuringCounting(false)
      label.current.value = ""
    }

    return (
      <div className="timer-container container">
        <h2>Timer</h2>
        <input 
          id="label-input" 
          ref={label} type="text" 
          placeholder="Add label"></input>
        <CountDown 
          label={label}
        />
        <div className="timer-buttons">
          <i 
            onClick={handleResetCountingClick}
            className="timer-reset fas fa-undo"></i>  
          <i 
            onClick={handleStartCountingClick} 
            className={isCounting ? "timer-start far fa-pause-circle" : "timer-start far fa-play-circle"}></i>
        </div>
        
      </div>
    );
  }
  
const mapStateToProps = (state) => {
  return {
    isCounting: state.counter.isCounting,
    isDuringCounting: state.counter.isDuringCounting
  }
}

const mapDispatchToProps = dispatch => ({ 
  setIsCounting: state => dispatch(setIsCounting(state)),
  setIsDuringCounting: state => dispatch(setIsDuringCounting(state))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Timer)
  