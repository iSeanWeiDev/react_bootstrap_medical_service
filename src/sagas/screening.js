import { put } from 'redux-saga/effects'
import ScreeningActions from '../actions/screening'

export function* getScreeningRequest(api, action) {
  const { payload } = action;
  const response = yield api.getScreening(payload);
  if(response.ok) {
    yield put(ScreeningActions.getScreeningSuccess(response.data))
  } else {
    yield put(ScreeningActions.getScreeningFailure(response.data))
  }
}