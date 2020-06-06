import React from 'react';

import Home from './components/Pages/Home/Home'
import Initiatives from './components/Pages/Initiatives/Initiatives'
import Candidates from './components/Pages/Candidates/Candidates'
import ProjectsInProgress from './components/Pages/ProjectsInProgress/ProjectsInProgress'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/candidates">Candidates</Link>
            </li>
            <li>
              <Link to="/issues">Initiatives</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/issues">
            <Initiatives />
          </Route>
          <Route path="/candidates">
            <Candidates />
          </Route>
          <Route path="/inprogress">
            <ProjectsInProgress />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
