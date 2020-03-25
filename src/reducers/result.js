import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { ResultTypes } from '../actions/result';

const initialState = Immutable({
  status: "",
  type: "",
  data: "",
})

const setScreeningRequest = (state, action) => {
  const type = action.payload;
  console.log(type);
  return state.merge({
    ...state,
    type: type,
  })
}

const resultRequest = (state, action) =>
  state.merge({ ...state, status: 'pending'});

const resultSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'done',
    data: data
  })
}

const resultFailure = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'error',
    data: data
  })
}

export const reducer = createReducer(initialState, {
  [ResultTypes.SET_SCREENING_REQUEST]: setScreeningRequest,
  [ResultTypes.GET_RESULT_REQUEST]: resultRequest,
  [ResultTypes.GET_RESULT_SUCCESS]: resultSuccess,
  [ResultTypes.GET_RESULT_FAILURE]: resultFailure,
})
