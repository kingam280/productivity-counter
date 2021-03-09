import React from 'react';
import { Link } from 'react-router-dom';


export default function Menu() {
    
    return (

        <>
            <Link to="/timer" className="menu-item">Timer</Link>
            <Link to="/stats" className="menu-item">Stats</Link>
            <Link to="/settings" className="menu-item">Settings</Link>
        </>

    );
  }