import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { auth_register } from '../../redux/auth/auth_actions'
import './Form.css'

import { Form, Button, Container } from 'react-bootstrap'

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
    <Container>
        {this.props.auth ? <Redirect to="/homepage" /> : null}
        {this.props.err ? <p>{this.props.err}</p> : null}
        <section className="authPage">

          <Form name="registrationForm" onSubmit={this.submitHandler} className='form'>

            <legend>Зарегистрировать</legend>

            <Form.Group controlId="formBasicNumber">
              <Form.Control 
              // value={this.state.phone} 
              onChange={this.changeHandler} type="text" placeholder="Номер" name="phone" required />

            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Control 
              // value={this.state.name} 
              onChange={this.changeHandler} type="text" placeholder="Имя" name="name" required />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control 
              // value={this.state.password} 
              onChange={this.changeHandler} type="password" placeholder="Пароль" name="password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Войти
      </Button>

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
    register: (phone, name, password) => dispatch(auth_register(phone, name, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register) 
