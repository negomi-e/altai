import { AUTH, ERR, LOGOUT } from './auth_actionTypes'

export function auth(id) {
  return {
    type: AUTH,
    payload: id
  }
}

export function show_err(err){
  return {
    type: ERR,
    payload: err
  }
}

export function logout(err){
  return {
    type: LOGOUT,
  }
}

export function auth_login(phone, password) {
  return async (dispatch) => {
    const response = await fetch('auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify({
        phone,
        password
      })
    })
    const { err, id, success } = await response.json()
    if (err) {
      dispatch(show_err(err))
    }
    if (success) {
      dispatch(auth(id))
    }
  }
}

export function auth_register(phone, name, password) {
  return async (dispatch) => {
    const response = await fetch('auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify({
        phone,
        name,
        password
      })
    })
    const { err, id, success } = await response.json()
    if (err) {
      dispatch(show_err(err))
    }
    if (success) {
      dispatch(auth(id))
    }
  }
}

export function out(){
  return async (dispatch) => {
    const response = await fetch('/auth/logout')
    const { success } = await response.json()
    if(success){
      dispatch(logout())
    }
  }
}
