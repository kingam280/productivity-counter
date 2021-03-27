import * as types from '../actions/types'

const initialState = {
    isCounting: false,
    isDuringCounting: false
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
        default:
            return state
    }
}