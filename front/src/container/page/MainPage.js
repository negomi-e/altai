import React, { Component } from 'react'
import { connect } from 'react-redux'
import AuthPage from './AuthPage'
import HomePage from './HomePage'


class MainPage extends Component {
  render() {
    return (
      <>
        {this.props.auth ? <HomePage /> : <AuthPage/>}
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(MainPage) 
