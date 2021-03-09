import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TopPanel from './TopPanel/TopPanel'
import Footer from './Footer/Footer'
import Timer from './Timer/Timer'
import Stats from './Stats/Stats'
import Settings from './Settings/Settings'
import NotFound from './NotFound/NotFound'
import Log from './Log/Log'
import './App.css';
import { AuthProvider } from '../contexts/Auth'

function App() {
  const [focusTime, setFocusTime] = useState(50)
  const [alarmSound, setAlarmSound] = useState('alarm-sound')

  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <TopPanel />
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
            <Route path="/signup">
              <Log type="signup" />
            </Route>
            <Route path="/login">
              <Log type="login"/>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;
