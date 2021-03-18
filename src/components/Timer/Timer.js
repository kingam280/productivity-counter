import React, { useRef } from 'react';
import './Timer.css';
import CountDown from './CountDown'
import { connect } from "react-redux";
import { setIsCounting } from "../../store/actions/actions"
import { store } from '../../store/store';

const Timer = ({isCounting}) => {

    const label = useRef(null)

    const handleCountingClick = () => {
      store.dispatch(setIsCounting(!isCounting))
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
          label={label} 
          />
        <i 
          onClick={handleCountingClick} 
          className={isCounting ? "timer-start far fa-pause-circle" : "timer-start far fa-play-circle"}></i>
      </div>
    );
  }
  
  const mapStateToProps = (state) => {
    return {
      isCounting: state.isCounting
    }
  }
  
  const mapDispatchToProps = { setIsCounting }; 

  export default connect(mapStateToProps, mapDispatchToProps)(Timer)
  