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
  const [alarmSound, setAlarmSound] = useState('alarm-sound')

  return (
    <Router>
      <div className="app">
        <Menu />
        <Switch>
          <Route exact path="/">
            <Timer 
            startTime={focusTime}
            sound={alarmSound}
            />
          </Route>
          <Route path="/timer">
            <Timer 
            startTime={focusTime}
            alarmSound={alarmSound}
            />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/settings">
            <Settings 
            handleFocusTimeChange={setFocusTime} 
            focus={focusTime}
            setAlarmSound={setAlarmSound}
            alarmSound={alarmSound}
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
