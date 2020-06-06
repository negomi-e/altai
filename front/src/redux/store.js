import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const enchancers = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, enchancers)
export default store

