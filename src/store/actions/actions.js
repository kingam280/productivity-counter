import axios from '../../config/axios'
import * as types from './types'

//SETTINGS

export const changeFocusTime = (focusTime) => ({
    type: types.CHANGE_FOCUS_TIME,
    focusTime
})

export const changeAlarmSound = (alarmSound) => ({
    type: types.CHANGE_ALARM_SOUND,
    alarmSound
})


//STATS

export const fetchStats = (userId) => (dispatch) => {
    dispatch(fetchStatsPending())

    if (userId) {
        axios
            .get(`/${userId}.json`)
            .then(res => res.data)
            .then(data => {
                const records = []
                for (let record in data) {
                    records.push(data[record])
                }
                const sorted = records.sort((a, b) => b.timestamp - a.timestamp)
                dispatch(fetchStatsFulfilled(sorted))
            })
            .catch(err => {
                dispatch(fetchStatsRejected(err))
            })
      } else {
            const data = JSON.parse(localStorage.getItem('data')) || []
            dispatch(fetchStatsFulfilled(data))
      }
}

export const fetchStatsFulfilled = (data) => ({
    type: types.FETCH_STATS_FULFILLED,
    payload: data
})

export const fetchStatsPending = () => ({
    type: types.FETCH_STATS_PENDING
})

export const fetchStatsRejected = (error) => ({
    type: types.FETCH_STATS_REJECTED,
    payload: error
})


//COUNTER

export const setIsCounting = (isCounting) => ({
    type: types.SET_IS_COUNTING,
    isCounting
})

export const setIsDuringCounting = (isDuringCounting) => ({
    type: types.SET_IS_DURING_COUNTING,
    isDuringCounting
})

export const setTimeLeft = (timeLeft) => ({
    type: types.SET_TIME_LEFT,
    timeLeft: timeLeft
})