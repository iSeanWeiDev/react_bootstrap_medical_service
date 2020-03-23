import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { ProfileTypes } from '../actions/profile'

const initialState = Immutable({
  status: "",
  data: "",
})

//get profile
const getProfileRequest = (state, action) =>
    state.merge({ ...state, status: 'pending'})
const getProfileSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'done',
    data: data
  })
}
const getProfileFailure = (state, action) => 
  state.merge({...state, status: 'error'})

//edit profile
const editProfileRequest = (state, action) =>
  state.merge({ ...state, status: 'pending'})
const editProfileSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'done',
    data: data
  })
}
const editProfileFailure = (state, action) => 
  state.merge({...state, status: 'error'})

export const reducer = createReducer(initialState, {
  //get profile
  [ProfileTypes.GET_PROFILE_REQUEST]: getProfileRequest,
  [ProfileTypes.GET_PROFILE_SUCCESS]: getProfileSuccess,
  [ProfileTypes.GET_PROFILE_FAILURE]: getProfileFailure,

  //edit profile
  [ProfileTypes.EDIT_PROFILE_REQUEST]: editProfileRequest,
  [ProfileTypes.EDIT_PROFILE_SUCCESS]: editProfileSuccess,
  [ProfileTypes.EDIT_PROFILE_FAILURE]: editProfileFailure

})
