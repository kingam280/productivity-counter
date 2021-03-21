import React, {useEffect, useState} from 'react'
import TimeDisplay from './TimeDisplay'

const getTimeFromToday = (records) => {
    if (!records) return 0
    const today = new Date().setHours(0,0,0)
    const time = records.reduce( (prev, current) => {
        if (current.timestamp >= today) {
            return prev + parseInt(current.timeInMinutes)
        } else {
            return prev
        }
    }, 0)
    return time
}

const getTimeFromWeek = (records) => {
    if (!records) return 0
    const today = new Date()
    const day = today.getDay()
    const diff = today.getDate() - day + (day === 0 ? -6:1)
    const startDate = new Date(today.setDate(diff)).setHours(0,0,0)
    const time = records.reduce( (prev, current) => {
        if (current.timestamp >= startDate) {
            return prev + parseInt(current.timeInMinutes)
        } else {
            return prev
        }
    }, 0)
    return time
}

const getTimeFromMonth = (records) => {
    if (!records) return 0
    const today = new Date()
    const startDate = new Date(today.setDate(1)).setHours(0,0,0)

    const time = records.reduce( (prev, current) => {
        if (current.timestamp >= startDate) {
            return prev + parseInt(current.timeInMinutes)
        } else {
            return prev
        }
    }, 0)
    return time
}

const StatsOverview = ({records}) => {
    const [todayTime, setTodayTime] = useState(0)
    const [weekTime, setWeekTime] = useState(0)
    const [monthTime, setMonthTime] = useState(0)

    useEffect(() =>{
        setTodayTime(getTimeFromToday(records));
        setMonthTime(getTimeFromMonth(records))
        setWeekTime(getTimeFromWeek(records))
    },[records])

    return (
        <div class="stats-overview">
            <h3>Overview</h3>
            <div className="today">
                {records.length > 0 ? <TimeDisplay time={todayTime} /> : <p>-</p>}
                <p>Today</p>
            </div>
            <div className="week">
                {records.length > 0 ? <TimeDisplay time={weekTime} /> : <p>-</p>}
                <p>Week</p>
            </div>
            <div className="month">
                {records.length > 0 ? <TimeDisplay time={monthTime} /> : <p>-</p>}
                <p>Month</p>
            </div>
        </div>
    )
}

export default StatsOverview