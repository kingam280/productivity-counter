import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/Auth'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { setStats } from '../../store/actions/actions';


const LogPanel = ({ setStats }) => {
    const { user, setUser } = useContext(AuthContext)
    const history = useHistory()

    const handleClick = (e) => {
        if (e.target.textContent === "Log out") {
            localStorage.clear()
            setUser('')
            setStats(null)
            history.push('/timer')
        } else if (e.target.textContent === "Log in") {
            history.push('/login')
        }
    }

    return (
        <div className="log-panel">
            <p>Productivity Counter</p>
            <button onClick={handleClick}>{user ? "Log out" : "Log in"}</button>
        </div>

    );
}

const mapDispatchToProps = dispatch => ({ 
    setStats: (records) => dispatch(setStats(records))
  });

export default connect(null, mapDispatchToProps)(LogPanel)
