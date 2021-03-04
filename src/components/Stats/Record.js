import React from 'react'

const Record = ({timestamp, label, timeInMinutes}) => {
    const date = new Date(timestamp)
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
    const year = date.getFullYear()
    
    return (
        <tr>
            <td>{day}/{month}/{year}</td>
            <td>{label}</td>
            <td>{timeInMinutes} min</td>
          </tr>
    )
}

export default Record