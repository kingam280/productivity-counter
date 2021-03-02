import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
    
    return (

        <nav className="menu">
            <Link to="/timer" className="menu-item">Timer</Link>
            <Link to="/stats" className="menu-item">Stats</Link>
            <Link to="/settings" className="menu-item">Settings</Link>
        </nav>

    );
  }