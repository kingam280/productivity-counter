import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

function Menu({isDuringCounting}) {
    
    return (
        <>
            <Link to="/timer" className="menu-item">Timer</Link>
            <Link to={isDuringCounting ? "/timer" : "/stats"} className={isDuringCounting ? "menu-item menu-inactive" : "menu-item"}>Stats</Link>
            <Link to={isDuringCounting ? "/timer" : "/settings"} className={isDuringCounting ? "menu-item menu-inactive" : "menu-item"}>Settings</Link>
        </>

    );
  }

const mapStateToProps = (state) => {
    return {
      isDuringCounting: state.counter.isDuringCounting
    }
}
  
export default connect(mapStateToProps, null)(Menu)