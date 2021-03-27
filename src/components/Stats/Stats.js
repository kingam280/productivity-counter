import React, {useContext} from 'react';
import StatsOverview from './StatsOverview'
import StatsTable from './StatsTable'
import './Stats.css';
import useStats from '../../utils/useStats'
import { AuthContext } from '../../contexts/Auth'

export default function Stats() {
    const { user } = useContext(AuthContext)
    const { records, loading } = useStats(user)

    return (
      <div className="stats container">
        <h2>Statistics</h2>
        <StatsOverview records={records}/>
        <StatsTable records={records} loading={loading}/>
      </div>
    );
  }