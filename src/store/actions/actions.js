import axios from '../../config/axios'
import * as types from './types'

//SETTINGS

export const changeFocusTime = (focusTime) => ({
    type: types.CHANGE_FOCUS_TIME,
    focusTime
})

export const changeAlarmSound = (alarmSound) => ({
    type: types.CHANGE_ALARM_SOUND,
    alarmSound
})


//STATS

export const setStats = (data) => ({
    type: types.SET_STATS,
    payload: data
})

//COUNTER

export const setIsCounting = (isCounting) => ({
    type: types.SET_IS_COUNTING,
    isCounting
})

export const setIsDuringCounting = (isDuringCounting) => ({
    type: types.SET_IS_DURING_COUNTING,
    isDuringCounting
})

export const setTimeLeft = (timeLeft) => ({
    type: types.SET_TIME_LEFT,
    timeLeft: timeLeft
})

export const saveRecord = (dataToSave) => (dispatch) => { 
    const {userId, focusTime, label, timestamp} = dataToSave
    const data = {
        label: label || 'no label',
        timeInMinutes: focusTime,
        timestamp: timestamp ? timestamp : Date.now()
    }

    if (userId) {
        axios
            .post(`/${userId}.json`, data)
            .then(res => {
                console.log('Successfully added to database')
            })
            .catch(error => console.log(error))
    } else {
        const array = JSON.parse(localStorage.getItem('data')) || []
        array.unshift(data)
        localStorage.setItem('data', JSON.stringify(array))
    }
}