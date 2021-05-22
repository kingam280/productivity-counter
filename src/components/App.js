import React from 'react';
import {
  HashRouter as Router,
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

  return (
    <AuthProvider>
      <Router >
        <div className="app">
          <TopPanel />
          <Switch>
            <Route exact path="/">
              <Timer />
            </Route>
            <Route path="/timer">
              <Timer />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route path="/settings">
              <Settings />
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
