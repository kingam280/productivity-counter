import React, { useRef, useState } from 'react';
import './Timer.css';
import CountDown from './CountDown'
import { connect } from "react-redux";
import { setIsCounting, setIsDuringCounting, setTimeLeft } from "../../store/actions/actions"
import AddRecordForm from './AddRecordForm/AddRecordForm';
import DropDownListContainer from './DropDownList/DropDownListConatiner';

const Timer = ({ isCounting, setIsCounting, isDuringCounting, setIsDuringCounting, focusTime, setTimeLeft }) => {
    const label = useRef(null)
    const [isAddRecordFormOpen, setIsAddRecordFormOpen] = useState(false)

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
      setTimeLeft(focusTime * 1000 * 60)
    }

    return (
      <>
      <div className="timer-container container">
        <h2>Timer</h2>
        <input 
          id="label-input" 
          ref={label} type="text" 
          placeholder="Add label"></input>
        <DropDownListContainer />
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
        <p className="add-record-form-label">Do you want to add record? Click <strong onClick={() => setIsAddRecordFormOpen(true)}>here</strong></p>
      </div>
      {isAddRecordFormOpen && <AddRecordForm setIsAddRecordFormOpen={setIsAddRecordFormOpen}/>}
      
      </>
    );
  }
  
const mapStateToProps = (state) => {
  return {
    isCounting: state.counter.isCounting,
    isDuringCounting: state.counter.isDuringCounting,
    focusTime: state.settings.focusTime
  }
}

const mapDispatchToProps = dispatch => ({ 
  setIsCounting: state => dispatch(setIsCounting(state)),
  setIsDuringCounting: state => dispatch(setIsDuringCounting(state)),
  setTimeLeft: state => dispatch(setTimeLeft(state))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Timer)
  