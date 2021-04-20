import React, {useContext, useEffect} from 'react';
import StatsOverview from './StatsOverview'
import StatsTable from './StatsTable'
import './Stats.css';
import { AuthContext } from '../../contexts/Auth'
import { connect } from "react-redux";
import { fetchStats } from "../../store/actions/actions"

const Stats = ({ records, isLoading, fetchStats}) => {
    const { user } = useContext(AuthContext)
    
    useEffect(() => {
      fetchStats(user)
    }, [fetchStats, user])

    return (
      <div className="stats container">
        <h2>Statistics</h2>
        <StatsOverview records={records}/>
        <StatsTable records={records} loading={isLoading}/>
      </div>
    );
  }

const mapStateToProps = (state) => {
    return {
      records: state.stats.records,
      isLoading: state.stats.isLoading
    }
}
  
const mapDispatchToProps = dispatch => ({ 
    fetchStats: id => dispatch(fetchStats(id))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Stats)