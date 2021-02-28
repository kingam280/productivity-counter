import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './Menu'
import Footer from './Footer'
import Timer from './Timer'
import Stats from './Stats'
import Settings from './Settings'
import NotFound from './NotFound'
import '../styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/">
            <Timer startTime={5}/>
          </Route>
          <Route path="/timer">
            <Timer startTime={5}/>
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/settings">
            <Settings />
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
