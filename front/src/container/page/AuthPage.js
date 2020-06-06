import React, { Component } from 'react'
import Login from '../auth/Login'
import { NavLink, Route, Switch } from 'react-router-dom'
import Register from '../auth/Register'

export default class AuthPage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Алтай</NavLink>
          </li>
          <li>
            <NavLink to="/login">Авторизация</NavLink>
          </li>
          <li>
            <NavLink to="/register">Регистрация</NavLink>
          </li>
        </ul>

      <Switch>
        <Route exact path="/" component={() => <h1>Добро пожаловать</h1>} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
      </div>
    )
  }
}
