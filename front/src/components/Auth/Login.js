import React, { Component } from 'react'
import { connect } from 'react-redux'
import { auth_login } from '../../redux/auth/auth_actions'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    phone: '',
    password: '',
  }

  changeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  submitHandler = async (e) => {
    e.preventDefault()
    const { phone, password } = this.state
    this.props.login(phone, password)
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        {this.props.auth ? <Redirect to="/homepage" /> : null}
        {this.props.err ? <p>{this.props.err}</p> : null}
        <form onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} name='phone' type="text" placeholder="Номер" required />
          <input onChange={this.changeHandler} name='password' type="password" placeholder="Пароль" required />
          <input type="submit" value="Войти" />
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    err: state.auth.errMessage,
    auth: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (phone, password) => dispatch(auth_login(phone, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

