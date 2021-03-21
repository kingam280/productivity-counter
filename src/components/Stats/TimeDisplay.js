import React from 'react'

const TimeDisplay = ({time}) => {
    const hours = Math.floor(time / 60)
    const minutes = time - hours * 60
    return (
        <p>{hours}h {minutes}m</p>
    )
}

export default TimeDisplay