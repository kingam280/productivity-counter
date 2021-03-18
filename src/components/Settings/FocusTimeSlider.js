import React, {useRef} from 'react'
import { connect } from "react-redux";
import { changeFocusTime, changeAlarmSound } from "../../store/actions/actions"
import { store } from '../../store/store';

const FocusTimeSlider = ({changeFocusTime, focusTime}) => {
    const focus = useRef(focusTime)
    return (
        <>
        <h3>Focus time</h3>
        <div className="slider-container">
          <input
            className="slider-input" 
            type="range" 
            id="focus" 
            min="5" 
            max="60" 
            step="5"
            ref={focus}
            value={focusTime}
            onChange={() => store.dispatch(changeFocusTime(focus.current.value))}
          />
          <p className="slider-label">5min</p>
          <p className="slider-label">60min</p>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
  return {
    focusTime: state.focusTime,
  }
}

const mapDispatchToProps = { changeFocusTime };

export default connect(mapStateToProps, mapDispatchToProps)(FocusTimeSlider)

