import { combineReducers } from 'redux'
import auth_reducer from './auth/auth_reducer'

export default combineReducers({
  auth: auth_reducer
})
