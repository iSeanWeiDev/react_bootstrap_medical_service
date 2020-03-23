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
    switch(response.data.response.endAction) {
      case "RETURN" : 
        yield call(history.push, '/profile', response.data.response)
        break;
      case "THANK_YOU_MAIN" :
        yield call(history.push, '/continue', response.data.response)
        break;
      case "PREDICTION" :
        yield call(history.push, '/continue', response.data.response)
        break;
      default: 
        yield put(ScreeningActions.nextQuestionSuccess(response.data))
        break;  
    } 
  } else {
    yield put(ScreeningActions.nextQuestionFailure(response.data))
  }
}

export function* previousQuestionRequest(api, action) {
  const { payload } = action;
  const response = yield api.previousQuestion(payload);
  if(response.ok) {
    if(!response.data.response) {
      yield call(history.goBack)
    } else {
      yield put(ScreeningActions.previousQuestionSuccess(response.data))
    }
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
  const { payload } = action;
  const response = yield api.prediction(payload);
  if(response.ok) {
    yield put(ScreeningActions.predictionSuccess(response.data))
  } else {
    yield put(ScreeningActions.predictionFailure(response.data))
  }
}