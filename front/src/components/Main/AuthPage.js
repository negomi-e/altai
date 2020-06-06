import React, { Component } from 'react'

import { NavLink, Route, Switch } from 'react-router-dom'
import AuthNav from '../Common/Nav/AuthNav'
import Register from '../auth/Register'
import Login from '../auth/Login'

export default class AuthPage extends Component {
  render() {
    return (
      <div>
        <AuthNav />

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
