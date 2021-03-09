import React from 'react';
import FocusTimeSlider from './FocusTimeSlider';
import SoundInput from './SoundInput'
import './Settings.css';

export default function Settings({handleFocusTimeChange, focus, setAlarmSound, alarmSound}) {

    return (
      <div className="settings container">
        <h2>Settings</h2>
        <FocusTimeSlider 
          handleFocusTimeChange={handleFocusTimeChange} 
          focus={focus}/>
        <SoundInput 
          setAlarmSound={setAlarmSound} 
          alarmSound={alarmSound} />
      </div>
    );
  }