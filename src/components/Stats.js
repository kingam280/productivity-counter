import React, {useState, useEffect} from 'react';
import axios from '../axios'
// import getRecordsFromDatabase from '../data/getRecordsFromDatabase'

export default function Stats() {
  const [records, setRecords] = useState([])

    const getRecordsFromDatabase = async () => {
      axios
        .get('/records.json')
        .then(res => res.data)
        .then(data => {
          for (let record in data) {
            setRecords(prev => Array(data[record]).concat(prev))
          }
        })
    }

    useEffect(() => {
      getRecordsFromDatabase()
    }, [])

    const displayRecord = (record) => {
      const date = new Date(record.timestamp)
      const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
      const year = date.getFullYear()
      return (
        <>
          <tr key={record.timestamp}>
            <td>{day}/{month}/{year}</td>
            <td>{record.label}</td>
            <td>{record.timeInMinutes} min</td>
          </tr>
        </>
      )
    }

    return (
      <div className="stats">
        <table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Label</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            {records.map( (item, i) => displayRecord(item))}
          </tbody>
          
        </table>
      </div>
    );
  }