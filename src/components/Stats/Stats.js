import React from 'react';
import Record from './Record'
import Loading from '../Loading/Loading'
import './Stats.css';
import useStats from '../../utils/useStats'

export default function Stats() {
    const records = useStats()

    return (
      <div className="stats container">
        <h2>Statistics</h2>
        {records.length > 0 ? 
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Label</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {records.map( record => <Record timestamp={record.timestamp} label={record.label} timeInMinutes={record.timeInMinutes} key={record.timestamp} /> ) }
            </tbody>
          </table> : <Loading /> }
      </div>
    );
  }