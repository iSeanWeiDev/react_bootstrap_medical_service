import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { AppTypes } from '../actions/app'

const initialState = Immutable({
  status: "",
  data: "",
  authenticated: false,
})

// clear all reqest
const clearRequest = (state, action) => state.merge({ ...state, ...initialState })

export const reducer = createReducer(initialState, {
  [AppTypes.CLEAR_REQUEST]: clearRequest,
})
