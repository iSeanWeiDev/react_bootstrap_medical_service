import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { ScreeningTypes } from '../actions/screening';

const initialState = Immutable({
  status: "",
  data: "",
})

const screeningRequest = (state, action) =>
  state.merge({ ...state, status: 'pending'})
const screeningSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'done',
    data: data
  })
}
const screeningFailure = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'error',
    data: data
  })
}

export const reducer = createReducer(initialState, {
  [ScreeningTypes.SCREENING_REQUEST]: screeningRequest,
  [ScreeningTypes.SCREENING_SUCCESS]: screeningSuccess,
  [ScreeningTypes.SCREENING_FAILURE]: screeningFailure,
});
