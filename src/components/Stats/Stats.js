import React, {useState, useEffect} from 'react';
import axios from '../../config/axios'
import Record from './Record'
import './Stats.css';

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
      <div className="stats container">
        <h2>Statistics</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Label</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {records.map( record => <Record timestamp={record.timestamp} label={record.label} timeInMinutes={record.timeInMinutes} /> ) }
          </tbody>
          
        </table>
      </div>
    );
  }