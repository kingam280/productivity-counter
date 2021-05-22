import React, {useContext, useEffect} from 'react';
import StatsOverview from './StatsOverview'
import StatsTable from './StatsTable'
import './Stats.css';
import { AuthContext } from '../../contexts/Auth'
import { connect } from "react-redux";
import { setStats } from "../../store/actions/actions"
import firebase from '../../config/firebase'

const Stats = ({ records, setStats}) => {
  const { user } = useContext(AuthContext)
    
  useEffect(() => {
    if (user) {
      const userData = firebase.database().ref(`/records/${user}`)
      userData.on('value', (data) => {
        const records = []
        for(let el in data.val()) {
          records.push(data.val()[el])
        }
        const sorted = records.sort((a, b) => b.timestamp - a.timestamp)
        setStats(sorted)
      })
    } else {
      const data = JSON.parse(localStorage.getItem('data')) || []
      const sorted = data.sort((a, b) => b.timestamp - a.timestamp)
      setStats(sorted)
    }
  }, [user, setStats])    
    

    return (
      <div className="stats container">
        <h2>Statistics</h2>
        <StatsOverview records={records}/>
        <StatsTable records={records} />
      </div>
    );
  }

const mapStateToProps = (state) => {
    return {
      records: state.stats.records
    }
}
  
const mapDispatchToProps = dispatch => ({ 
    setStats: (records) => dispatch(setStats(records))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Stats)