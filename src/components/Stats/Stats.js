import React, {useContext} from 'react';
import Record from './Record'
import Loading from '../Loading/Loading'
import './Stats.css';
import useStats from '../../utils/useStats'
import { AuthContext } from '../../contexts/Auth'

export default function Stats() {
    const { user } = useContext(AuthContext)
    const records = useStats(user)

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