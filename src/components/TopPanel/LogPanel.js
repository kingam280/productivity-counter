import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/Auth'
import { useHistory } from "react-router-dom";


export default function LogPanel() {
    const { user, setUser } = useContext(AuthContext)
    const history = useHistory()

    const handleClick = (e) => {
        if (e.target.textContent === "Log out") {
            localStorage.setItem('userId', '')
            setUser('')
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
