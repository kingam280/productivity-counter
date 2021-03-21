import * as types from '../actions/types'

const initialState = {
    focusTime: 50,
    alarmSound: 'alarm-sound',
}

export const settings = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_FOCUS_TIME:
            return {
                ...state, 
                focusTime: action.focusTime
            }
        case types.CHANGE_ALARM_SOUND:
            return {
                ...state, 
                alarmSound: action.alarmSound
            }
        default:
            return state
    }
}