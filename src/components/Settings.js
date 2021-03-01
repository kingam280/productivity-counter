import React, { useRef } from 'react';
import '../styles/Settings.css';

export default function Settings({handleFocusTimeChange, focus}) {
    const focusTime = useRef(focus)

    return (
      <div className="App">
        <h2>Settings</h2>
        <p>Focus time</p>
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
        
      </div>
    );
  }