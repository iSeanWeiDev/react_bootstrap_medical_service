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

const nextQuestionRequest = (state, action) =>
  state.merge({ ...state, status: 'pending'})

const nextQuestionSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'done',
    data: data
  })
}

const nextQuestionFailure = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'error',
    data: data
  })
}

const previousQuestionRequest = (state, action) =>
  state.merge({ ...state, status: 'pending'})

const previousQuestionSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'done',
    data: data
  })
}

const previousQuestionFailure = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'error',
    data: data
  })
}

const saveAnwerRequest = (state, action) =>
  state.merge({ ...state, status: 'pending'})

const saveAnwerSuccess = (state, action) => 
  state.merge({ ...state, status: 'done'})


const saveAnwerFailure = (state, action) => 
  state.merge({ ...state, status: 'error'})

const predictionRequest = (state, action) =>
  state.merge({ ...state, status: 'pending'})

const predictionSuccess = (state, action) => {
  const data = action.response;
  return state.merge({
    ...state,
    status: 'done',
    data: data
  })
}

const predictionFailure = (state, action) => {
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

  [ScreeningTypes.NEXT_QUESTION_REQUEST]:nextQuestionRequest,
  [ScreeningTypes.NEXT_QUESTION_SUCCESS]:nextQuestionSuccess,
  [ScreeningTypes.NEXT_QUESTION_FAILURE]:nextQuestionFailure,

  [ScreeningTypes.PREVIOUS_QUESTION_REQUEST]:previousQuestionRequest,
  [ScreeningTypes.PREVIOUS_QUESTION_SUCCESS]:previousQuestionSuccess,
  [ScreeningTypes.PREVIOUS_QUESTION_REQUEST]:previousQuestionFailure,

  [ScreeningTypes.SAVE_ANSWER_REQUEST]: saveAnwerRequest,
  [ScreeningTypes.SAVE_ANSWER_SUCCESS]: saveAnwerSuccess,
  [ScreeningTypes.SAVE_ANSWER_FAILURE]: saveAnwerFailure,

  [ScreeningTypes.PREDICTION_REQUEST]: predictionRequest,
  [ScreeningTypes.PREDICTION_SUCCESS]: predictionSuccess,
  [ScreeningTypes.PREDICTION_FAILURE]: predictionFailure,
});
