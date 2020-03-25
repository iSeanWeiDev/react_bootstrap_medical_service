import { put } from 'redux-saga/effects'
import ResultActions from '../actions/result'

//get profile
export function* getResultRequest(api, action) {
  const {payload} = action;
  const response = yield api.getResult(payload);
  if(response.ok) {
    yield put(ResultActions.getResultSuccess(response.data))
  } else {
    yield put(ResultActions.getResultFailure(response.data))
  }
}
