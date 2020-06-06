import { combineReducers } from 'redux'
import auth_reducer from './auth/auth_reducer'
import userReducer from './user/userReducer'

export default combineReducers({
  auth: auth_reducer,
  user: userReducer,
})
