import { combineReducers } from 'redux'
import configureStore from '../configureStore'

const initialState = {}

/* ------------- Assemble The Reducers ------------- */
const reducers = combineReducers({
  app: require('./app').reducer,
  auth: require('./auth').reducer,
  profile: require('./profile').reducer
})

const store = configureStore(initialState, reducers)

export { store }
