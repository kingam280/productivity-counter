const setSound = (alarmSound) => {
    let soundPath
    if (alarmSound === "click-sound") {
        soundPath = "http://www.astrofegia.com/Music/Wav/Utopia%20Close.wav"
    } else if (alarmSound === "tink-sound") {
        soundPath = "http://princezze.free.fr/sounds/select6.wav"
    } else if (alarmSound === "birds-sound") {
        soundPath = "http://rus.gflora.com/page/Misc/birds/songsparrow.wav"
    } else if (alarmSound === "alarm-sound") {
        soundPath = "http://david.guerrero.free.fr/Effects/WeaponHoming.wav"
    }

    return soundPath
}

export default setSound