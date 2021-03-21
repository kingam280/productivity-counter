import React, {useContext} from 'react';
import Record from './Record'
import Loading from '../Loading/Loading'
import StatsOverview from './StatsOverview'
import './Stats.css';
import useStats from '../../utils/useStats'
import { AuthContext } from '../../contexts/Auth'

export default function Stats() {
    const { user } = useContext(AuthContext)
    const {records, loading} = useStats(user)

    const displayTable = () => {
      if (loading) {
        return <Loading />
      } else if (records.length > 0) {
        return (
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
          </table>
        )
      } else {
        return (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Label</th>
                <th>Time</th>
              </tr>
            </thead>
          </table>
        )
      }
    }

    return (
      <div className="stats container">
        <h2>Statistics</h2>
        <StatsOverview records={records}/>
        <h3>Latest sessions</h3>
        {displayTable()}
      </div>
    );
  }