import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { out } from '../../redux/auth/auth_actions'


 class Logout extends Component {

  clickHandler = (event) => {
    event.preventDefault()
    this.props.logout()
    this.props.history.push(`/`)
  }
  
  render() {
    
    return (
      <>
       <NavLink to="/logout" onClick={this.clickHandler}><p>Logout</p></NavLink>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // auth: state.auth.
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(out())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Logout))
