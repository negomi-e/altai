import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
// import Logout from '../auth/Logout'
// import Login from '../auth/Login'
// import Register from '../auth/Register'

import Home from './components/Pages/Home/Home'
import Initiatives from './components/Pages/Initiatives/Initiatives'
import Candidates from './components/Pages/Candidates/Candidates'
import ProjectsInProgress from './components/Pages/ProjectsInProgress/ProjectsInProgress'

class HomePage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Logout />
          </li>
          <li>
            <NavLink to="/homepage">Здесь ваша ссылка</NavLink>
          </li>
          <li>
              <NavLink to="/candidates">Candidates</NavLink>
            </li>
            <li>
              <NavLink to="/issues">Initiatives</NavLink>
            </li>
        </ul>



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
    

        
      //   <Switch>
      //     <Route exact path="/login" component={Login} />
      //     <Route exact path="/register" component={Register} />
      //     <Route exact to="/homepage" component={() => <h1>Здесь ваш компонент</h1>} />
      //   </Switch>
      // </div>
    )
  }
}
export default HomePage
