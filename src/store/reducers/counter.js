import * as types from '../actions/types'

const initialState = {
    isCounting: false,
    isDuringCounting: false,
    timeLeft: 50 * 1000 * 60,
}

export const counter = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_IS_COUNTING:
            return {
                ...state,
                isCounting: action.isCounting
            }
        case types.SET_IS_DURING_COUNTING:
            return {
                ...state,
                isDuringCounting: action.isDuringCounting
            }
        case types.SET_TIME_LEFT:
            return {
                ...state,
                timeLeft: action.timeLeft
            } 
        default:
            return state
    }
}