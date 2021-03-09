import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/Auth'


export default function LogPanel() {
    const { user, setUser } = useContext(AuthContext)

    const handleClick = (e) => {
        if (e.target.textContent === "Log out") {
            localStorage.setItem('userId', '')
            setUser('')
            window.location.replace("timer")
        } else if (e.target.textContent === "Log in") {
            window.location.replace("login")
        }
    }

    return (
        <div className="log-panel">
            <p>Productivity Counter</p>
            <button onClick={handleClick}>{user ? "Log out" : "Log in"}</button>
        </div>

    );
}
