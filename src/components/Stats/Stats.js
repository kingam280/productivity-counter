import React, {useState, useEffect} from 'react';
import axios from '../../config/axios'
import Record from './Record'

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
            {records.map( record => <Record timestamp={record.timestamp} label={record.label} timeInMinutes={record.timeInMinutes} /> ) }
          </tbody>
          
        </table>
      </div>
    );
  }