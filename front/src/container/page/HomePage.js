import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import Logout from '../auth/Logout'
import Login from '../auth/Login'
import Register from '../auth/Register'


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
        </ul>
        
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact to="/homepage" component={() => <h1>Здесь ваш компонент</h1>} />
        </Switch>
      </div>
    )
  }
}
export default HomePage
