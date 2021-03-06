import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import HomeNav from '../../Common/Nav/HomeNav'

import Logout from '../../Auth/Logout'

import Home from '../../Pages/Home/Home'
import Initiatives from '../../Pages/Initiatives/Initiatives'
import Candidates from '../../Pages/Candidates/Candidates'
import ProjectsInProgress from '../../Pages/ProjectsInProgress/ProjectsInProgress'
import UserPage from '../../ivan/UserPage';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeNav />

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
          <Route exact path="/:id">
            <UserPage />
          </Route>
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    )
  }
}
export default HomePage;
