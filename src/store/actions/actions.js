import * as types from './types'

export const changeFocusTime = (focusTime) => ({
    type: types.CHANGE_FOCUS_TIME,
    focusTime
})

export const changeAlarmSound = (alarmSound) => ({
    type: types.CHANGE_ALARM_SOUND,
    alarmSound
})

export const setIsCounting = (isCounting) => ({
    type: types.IS_COUNTING,
    isCounting
})