import React from 'react';
import Record from './Record'
import './Stats.css';
import useStats from '../../hooks/useStats'

export default function Stats() {
    const records = useStats()

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
            {records.length > 0 ? records.map( record => <Record timestamp={record.timestamp} label={record.label} timeInMinutes={record.timeInMinutes} /> ) : "Ładowanie..." }
          </tbody>
          
        </table>
      </div>
    );
  }