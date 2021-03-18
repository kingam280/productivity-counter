import * as types from './types'

export const changeFocusTime = (time) => ({
    type: types.CHANGE_FOCUS_TIME,
    time
})

export const changeAlarmSound = (sound) => ({
    type: types.CHANGE_ALARM_SOUND,
    sound
})

export const isCounting = (counting) => ({
    type: types.IS_COUNTING,
    counting
})