import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { auth_register } from '../../redux/auth/auth_actions'

class Register extends Component {
  state = {
    phone: '',
    password: '',
    name: '',
  }

  changeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  submitHandler = async (e) => {
    e.preventDefault()
    const { phone, name, password } = this.state
    this.props.register(phone, name, password)
  }
  
  render() {
    return (
      <div>
        <h2>Register</h2>
        {this.props.auth ? <Redirect to="/homepage" /> : null}
        {this.props.err ? <p>{this.props.err}</p> : null}
        <form onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} name='phone' type="text" placeholder="Номер" required />
          <input onChange={this.changeHandler} name='name' type="text" placeholder="Имя" required />
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
    register: (phone, name, password) => dispatch(auth_register(phone, name, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register) 
