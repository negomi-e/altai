import { AUTH, ERR, LOGOUT } from './auth_actionTypes'
const initialState = {
  isAuthenticated: !!window.localStorage.getItem('isAuth') || false,
  errMessage: false,
  id: ''
}

export default function (state = initialState, action) {
  switch (action.type) {

    case AUTH:
      window.localStorage.setItem('isAuth', 'true')
      window.localStorage.setItem('id', action.payload)
      window.localStorage.setItem('status', action.status)
      return {
        ...state,
        isAuthenticated: true,
        id: action.payload

      }

    case ERR:
      return {
        ...state,
        errMessage: action.payload
      }

    case LOGOUT:
      window.localStorage.clear()
      return {
        ...state,
        isAuthenticated: false
      }

    default:
      return state
  }
}
