import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    
    return (
      <div className="App">
        <nav>
            <Link to="/timer">Timer</Link>
            <Link to="/stats">Stats</Link>
            <Link to="/settings">Settings</Link>
        </nav>
      </div>
    );
  }