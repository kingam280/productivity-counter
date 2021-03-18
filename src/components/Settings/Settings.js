import React from 'react';
import FocusTimeSlider from './FocusTimeSlider';
import SoundInput from './SoundInput'
import './Settings.css';

export default function Settings() {

    return (
      <div className="settings container">
        <h2>Settings</h2>
        <FocusTimeSlider />
        <SoundInput />
      </div>
    );
  }