import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './Menu/Menu'
import Footer from './Footer/Footer'
import Timer from './Timer/Timer'
import Stats from './Stats/Stats'
import Settings from './Settings/Settings'
import NotFound from './NotFound/NotFound'
import './App.css';

function App() {
  const [focusTime, setFocusTime] = useState(50)

  const handleFocusTimeChange = (focusTime) => {
    setFocusTime(focusTime)
  }
  
  return (
    <Router>
      <div className="app">
        <Menu />
        <Switch>
          <Route exact path="/">
            <Timer startTime={focusTime}/>
          </Route>
          <Route path="/timer">
            <Timer startTime={focusTime}/>
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/settings">
            <Settings 
            handleFocusTimeChange={setFocusTime} 
            focus={focusTime}
            />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
