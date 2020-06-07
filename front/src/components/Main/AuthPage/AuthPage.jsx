import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'
import AuthNav from '../../Common/Nav/AuthNav'
import Register from '../../Auth/Register'
import Login from '../../Auth/Login'

import Banner from './Banner'
import Stories from './Stories'

class AuthPage extends Component {
  render() {
    return (
      <div>
        <AuthNav />

      <Switch>
        <Route exact path="/" component={Banner} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
      </div>
    )
  }
}

export default AuthPage;