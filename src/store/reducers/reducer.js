import * as types from '../actions/types'

const initialState = {
    focusTime: 40,
    alarmSound: 'alarm-sound',
    isCounting: false
}

export const reducer = (state = initialState, action) => {
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
        case types.IS_COUNTING:
            return {
                ...state,
                isCounting: action.isCounting
            }
        default:
            return state
    }
}