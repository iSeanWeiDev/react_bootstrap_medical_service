import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { ScreeningTypes } from '../actions/screening';

const initialState = Immutable({
  status: "",
  data: "",
})

const getScreeningRequest = (state, action) =>
  state.merge({ ...state, status: 'pending'})

const getScreeningSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'done',
    data: data
  })
}

const getScreeningFailure = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'error',
    data: data
  })
}

export const reducer = createReducer(initialState, {
  [ScreeningTypes.GET_SCREENING_REQUEST]: getScreeningRequest,
  [ScreeningTypes.GET_SCREENING_SUCCESS]: getScreeningSuccess,
  [ScreeningTypes.GET_SCREENING_FAILURE]: getScreeningFailure,
});
