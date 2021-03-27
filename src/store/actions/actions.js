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
    type: types.SET_IS_COUNTING,
    isCounting
})

export const setIsDuringCounting = (isDuringCounting) => ({
    type: types.SET_IS_DURING_COUNTING,
    isDuringCounting
})