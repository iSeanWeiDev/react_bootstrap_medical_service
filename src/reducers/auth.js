import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { AuthTypes } from '../actions/auth';

const initialState = Immutable({
  status: "",
  data: "",
})

//signin
const signinRequest = (state, action) =>
  state.merge({ ...state, status: 'pending'})
const signinSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'done',
    data: data
  })
}
const signinFailure = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'error',
    data: data
  })
}

//signup
const signupRequest = (state, action) =>
  state.merge({ ...state, status: 'pending'})
const signupSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'done',
    data: data
  })
}
const signupFailure = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'error',
    data: data
  })
}

// logout
const logoutRequest = (state, action) => state.merge({ ...state, ...initialState })

export const reducer = createReducer(initialState, {
  //signin
  [AuthTypes.SIGNIN_REQUEST]: signinRequest,
  [AuthTypes.SIGNIN_SUCCESS]: signinSuccess,
  [AuthTypes.SIGNIN_FAILURE]: signinFailure,

  //signup
  [AuthTypes.SIGNUP_REQUEST]: signupRequest,
  [AuthTypes.SIGNUP_SUCCESS]: signupSuccess,
  [AuthTypes.SIGNUP_FAILURE]: signupFailure,

  // logout
  [AuthTypes.LOGOUT_REQUEST]: logoutRequest,
})
