import React, { Component } from 'react'
import { connect } from 'react-redux'
import { auth_login } from '../../redux/auth/auth_actions'
import { Redirect } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Form.css'

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
      <Container>
         {this.props.auth ? <Redirect to="/" /> : null}
         {this.props.err ? <p>{this.props.err}</p> : null}
      <section className='authPage'>
        <Form name="loginForm" className="form" onSubmit={this.submitHandler}>
          <legend>Вход</legend>
          <Form.Group controlId="formBasicNumber">
            <Form.Control  
            onChange={this.changeHandler} type="text" placeholder="Номер" name="phone" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control  
            onChange={this.changeHandler} type="password" placeholder="Пароль" name="password" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Запомнить меня" />
          </Form.Group>

          <Button variant="primary" type="submit" >
          Войти
          </Button>
          <div>
          </div>

          {/* {
            <Form.Text className={`${this.props.err ? "red" : "hidden"} `}>error: {this.props.err}</Form.Text>
          } */}
        </Form>
      </section>
      </Container>





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

