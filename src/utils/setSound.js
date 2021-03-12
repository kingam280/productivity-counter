import alarm from '../assets/alarm-sound.wav'
import tink from '../assets/tink-sound.wav'
import click from '../assets/click-sound.wav'
import bird from '../assets/bird-sound.wav'

const setSound = (alarmSound) => {
    let soundPath
    if (alarmSound === "click-sound") {
        soundPath = click
    } else if (alarmSound === "tink-sound") {
        soundPath = tink
    } else if (alarmSound === "birds-sound") {
        soundPath = bird
    } else if (alarmSound === "alarm-sound") {
        soundPath = alarm
    }

    return soundPath
}

export default setSound