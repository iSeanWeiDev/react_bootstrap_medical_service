import { put } from 'redux-saga/effects'
import ScreeningActions from '../actions/screening'

export function* getScreeningRequest(api, action) {
  const { payload } = action;
  const response = yield api.postSignin(payload);
  if(response.ok) {
    yield put(ScreeningActions.screeningSuccess(response.data))
  } else {
    yield put(ScreeningActions.screeningFailure(response.data))
  }
}