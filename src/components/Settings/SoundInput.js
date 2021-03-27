import React from 'react'
import setSound from '../../utils/setSound'
import { connect } from "react-redux";
import { changeAlarmSound } from "../../store/actions/actions"

const SoundInput = ({changeAlarmSound, alarmSound}) => {

    const handleChange = (e) => {
        let alarmSound = e.target.value
        const soundPath = setSound(alarmSound)
        const sound = new Audio(soundPath)
        changeAlarmSound(alarmSound)
        sound.play()
    }
    return (
        <>
        <h3>Alarm sound</h3>
        <select name="sound" id="sound" onChange={handleChange} value={alarmSound}>
            <option value="alarm-sound">Alarm</option>
            <option value="birds-sound">Birds</option>
            <option value="click-sound">Click</option>
            <option value="tink-sound">Tink</option>
        </select>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      alarmSound: state.settings.alarmSound,
    }
  }
  
const mapDispatchToProps = dispatch => ({ 
    changeAlarmSound: sound => dispatch(changeAlarmSound(sound))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(SoundInput)
