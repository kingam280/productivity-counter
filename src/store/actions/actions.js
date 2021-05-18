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
            .get(`/records/${userId}.json`)
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
            const sorted = data.sort((a, b) => b.timestamp - a.timestamp)
            dispatch(fetchStatsFulfilled(sorted))
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

export const setCurrentLabel = (label) => ({
    type: types.SET_CURRENT_LABEL,
    currentLabel: label
})

export const saveRecord = (dataToSave) => (dispatch) => { 
    const {userId, focusTime, label, timestamp} = dataToSave
    const data = {
        label: label || 'no label',
        timeInMinutes: focusTime,
        timestamp: timestamp ? timestamp : Date.now()
    }

    if (userId) {
        axios
            .post(`/records/${userId}.json`, data)
            .then(res => {
                console.log('Successfully added to database')
                dispatch(fetchStats())
            })
            .catch(error => console.log(error))
    } else {
        const array = JSON.parse(localStorage.getItem('data')) || []
        array.unshift(data)
        localStorage.setItem('data', JSON.stringify(array))
    }
}

export const fetchLabels = (userId) => (dispatch) => {
    dispatch(fetchLabelsPending())
    if (userId) {
        axios
            .get(`/labels/${userId}.json`)
            .then(res => res.data)
            .then(data => {
                const records = []
                for (let record in data) {
                    
                    records.push(data[record])
                }
                dispatch(fetchLabelsFulfilled(records))
            })
            .catch(err => {
                dispatch(fetchLabelsRejected(err))
            })
      } else {
            const data = JSON.parse(localStorage.getItem('labels')) || []
            dispatch(fetchLabelsFulfilled(data))
      }
}

export const fetchLabelsFulfilled = (data) => ({
    type: types.FETCH_LABELS_FULFILLED,
    payload: data
})

export const fetchLabelsPending = () => ({
    type: types.FETCH_LABELS_PENDING
})

export const fetchLabelsRejected = (error) => ({
    type: types.FETCH_LABELS_REJECTED,
    payload: error
})

export const saveLabel = (dataToSave) => (dispatch) => { 
    const {label, color, userId} = dataToSave
    const data = {
        label: label || 'no label',
        color: color
    }

    if (userId) {
        axios
            .post(`/labels/${userId}.json`, data)
            .then(res => {
                console.log('Successfully added to database')
                dispatch(fetchLabels(userId))
            })
            .catch(error => console.log(error))
    } else {
        const array = JSON.parse(localStorage.getItem('labels')) || []
        array.push(data)
        localStorage.setItem('labels', JSON.stringify(array))
        dispatch(fetchLabels(userId))
    }
}