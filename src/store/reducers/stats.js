import * as types from '../actions/types'

const initialState = {
    records: [],
    isError: false,
    isLoading: false,
}

export const stats = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_STATS_FULFILLED:
            return {
                records: action.payload,
                isLoading: false,
                isError: false,
            }
        case types.FETCH_STATS_PENDING:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case types.FETCH_STATS_REJECTED:
            return {
                ...state,
                isError: true,
                isLoading: false
            } 
        default:
            return state
    }
}