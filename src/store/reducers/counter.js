import * as types from '../actions/types'

export const counter = (state = {isCounting: false}, action) => {
    switch (action.type) {
        case types.IS_COUNTING:
            return {
                ...state,
                isCounting: action.isCounting
            }
        default:
            return state
    }
}