import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setStatsOverall } from '../../store/actions/actions'
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

const StatsOverview = ({ records, statsOverall, setStatsOverall }) => {

    useEffect(() => {
        const today = getTimeFromToday(records)
        const week = getTimeFromWeek(records)
        const month = getTimeFromMonth(records)
            
        setStatsOverall({today, week, month})
        
    }, [records, setStatsOverall])

    return (
        <div className="stats-overview">
            <h3>Overview</h3>
            <div className="stats-item">
                {records ? <TimeDisplay time={statsOverall.today} /> : <p>-</p>}
                <p>Today</p>
            </div>
            <div className="stats-item">
                {records ? <TimeDisplay time={statsOverall.week} /> : <p>-</p>}
                <p>Week</p>
            </div>
            <div className="stats-item">
                {records ? <TimeDisplay time={statsOverall.month} /> : <p>-</p>}
                <p>Month</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      statsOverall: state.stats.statsOverall
    }
}

const mapDispatchToProps = dispatch => ({ 
    setStatsOverall: (records) => dispatch(setStatsOverall(records))
});

export default connect(mapStateToProps, mapDispatchToProps)(StatsOverview);