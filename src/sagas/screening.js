import { put, call } from 'redux-saga/effects'
import ScreeningActions from '../actions/screening'
import { history } from '../reducers'

export function* getScreeningRequest(api, action) {
  const { payload } = action;
  const response = yield api.getScreening(payload);
  if(response.ok) {
    yield put(ScreeningActions.getScreeningSuccess(response.data))
  } else {
    yield put(ScreeningActions.getScreeningFailure(response.data))
  }
}

export function* nextQuestionRequest(api, action) {
  const { payload } = action;
  const response = yield api.nextQuestion(payload);
  if(response.ok) {
    console.log("www", response.data.response)
    if(response.data.response.endAction) {
      yield call(history.push, '/continue', response.data.response)
    } else {
      yield put(ScreeningActions.nextQuestionSuccess(response.data))
    }
  } else {
    yield put(ScreeningActions.nextQuestionFailure(response.data))
  }
}

export function* previousQuestionRequest(api, action) {
  const { payload } = action;
  const response = yield api.previousQuestion(payload);
  if(response.ok) {
    yield put(ScreeningActions.previousQuestionSuccess(response.data))
  } else {
    yield put(ScreeningActions.previousQuestionFailure(response.data))
  }
}


export function* saveAnswerRequest(api, action) {
  const { payload } = action;
  const response = yield api.saveAnswer(payload);
  if(response.ok) {
    yield put(ScreeningActions.saveAnswerSuccess())
  } else {
    yield put(ScreeningActions.saveAnswerFailure())
  }
}

export function* predictionRequest(api, action) {
  const response = yield api.prediction();
  if(response.ok) {
    yield put(ScreeningActions.predictionSuccess(response.data))
  } else {
    yield put(ScreeningActions.predictionFailure(response.data))
  }
}