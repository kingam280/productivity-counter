import React, { useRef } from 'react';
import FocusTimeSlider from './FocusTimeSlider';
import './Settings.css';

export default function Settings({handleFocusTimeChange, focus}) {

    return (
      <div className="App">
        <h2>Settings</h2>
        <FocusTimeSlider handleFocusTimeChange={handleFocusTimeChange} focus={focus}/>
      </div>
    );
  }