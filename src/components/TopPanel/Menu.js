import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

function Menu({isCounting}) {
    
    return (

        <>
            <Link to="/timer" className="menu-item">Timer</Link>
            <Link to={isCounting ? "/timer" : "/stats"} className={isCounting ? "menu-item menu-inactive" : "menu-item"}>Stats</Link>
            <Link to={isCounting ? "/timer" : "/settings"} className={isCounting ? "menu-item menu-inactive" : "menu-item"}>Settings</Link>
        </>

    );
  }

const mapStateToProps = (state) => {
    return {
      isCounting: state.counter.isCounting
    }
}
  
export default connect(mapStateToProps, {})(Menu)