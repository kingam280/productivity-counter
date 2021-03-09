import React from 'react';
import Menu from './Menu'
import LogPanel from './LogPanel'
import './TopPanel.css';


export default function TopPanel() {
    
    return (
        <nav className="menu">
            <LogPanel />
            <Menu />
        </nav>

    );
  }