import React, {useRef} from 'react'

const FocusTimeSlider = ({handleFocusTimeChange, focus}) => {
    const focusTime = useRef(focus)
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
            ref={focusTime}
            value={focus}
            onChange={() => handleFocusTimeChange(focusTime.current.value)}
          />
          <p className="slider-label">5min</p>
          <p className="slider-label">60min</p>
        </div>
        </>
    )
}

export default FocusTimeSlider

