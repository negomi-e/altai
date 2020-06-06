import React, { Component } from 'react'
import { connect } from 'react-redux'
import AuthPage from './AuthPage'
import HomePage from './HomePage'
import './MainPage.css'
import { createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Source Sans Pro, sans-serif',
  }
});




class MainPage extends Component {
  render() {
    return (
      <div className='root'>
      <ThemeProvider  theme={theme}>
        {this.props.auth ? <HomePage /> : <AuthPage/>}
      </ThemeProvider>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(MainPage) 
