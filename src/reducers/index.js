import { combineReducers } from 'redux'
import configureStore from '../configureStore'
import {createBrowserHistory} from 'history';

const initialState = {}
const history = createBrowserHistory();
/* ------------- Assemble The Reducers ------------- */
const reducers = combineReducers({
  app: require('./app').reducer,
  auth: require('./auth').reducer,
  profile: require('./profile').reducer,
  screening: require('./screening').reducer,
})

const store = configureStore(initialState, reducers, history)

export { store, history }
