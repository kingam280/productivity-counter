import * as types from '../actions/types'

const initialState = {
    records: null,
    statsOverall: {
        today: 0,
        week: 0,
        month: 0
    }
}

export const stats = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_STATS:
            return {
                ...state,
                records: action.payload,
            }
        case types.SET_STATS_OVERALL:
            return {
                ...state,
                statsOverall: {
                    today: action.payload.today,
                    week: action.payload.week,
                    month: action.payload.month
                }
            }
        default:
            return state
    }
}