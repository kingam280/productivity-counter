import * as types from '../actions/types'

const initialState = {
    records: null,
}

export const stats = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_STATS:
            return {
                records: action.payload,
            }
        default:
            return state
    }
}