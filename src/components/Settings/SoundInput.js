import React from 'react'
import setSound from '../../utils/setSound'

const SoundInput = ({setAlarmSound, alarmSound}) => {

    const handleChange = (e) => {
        let alarmSound = e.target.value
        const soundPath = setSound(alarmSound)
        const sound = new Audio(soundPath)
        setAlarmSound(alarmSound)
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

export default SoundInput