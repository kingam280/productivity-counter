import * as types from '../actions/types'

const initialState = {
    isCounting: false,
    isDuringCounting: false,
    timeLeft: 50 * 1000 * 60,
    labels: [],
    isLoading: false,
    isError: false
}

export const counter = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_LABELS_FULFILLED:
            return {
                ...state,
                labels: action.payload,
                isLoading: false,
                isError: false,
            }
        case types.FETCH_LABELS_PENDING:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case types.FETCH_LABELS_REJECTED:
            return {
                ...state,
                isError: true,
                isLoading: false
            } 
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