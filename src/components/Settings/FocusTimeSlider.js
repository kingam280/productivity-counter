import React, {useRef} from 'react'
import { connect } from "react-redux";
import { changeFocusTime } from "../../store/actions/actions"

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
            onChange={() => changeFocusTime(focus.current.value)}
          />
          <label className="slider-label-top" style={{left: `${1 + (focusTime/5 - 1) * (98/11)}%`}}><p>{focusTime}</p></label>
          <p className="slider-label">5min</p>
          <p className="slider-label">60min</p>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
  return {
    focusTime: state.settings.focusTime,
  }
}

const mapDispatchToProps = dispatch => ({ 
  changeFocusTime: time => dispatch(changeFocusTime(time)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(FocusTimeSlider)

