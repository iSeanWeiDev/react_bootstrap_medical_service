import { put } from 'redux-saga/effects'
import AuthActions from '../actions/auth'

//signin
export function* signinRequest(api, action) {
  const { payload } = action;
  const response = yield api.postSignin(payload);
  if(response.ok) {
    yield put(AuthActions.signinSuccess(response.data))
  } else {
    yield put(AuthActions.signinFailure(response.data))
  }
}

//signup
export function* signupRequest(api, action) {
  const { payload } = action;
  const response = yield api.postSingup(payload);
  if(response.ok) {
    yield put(AuthActions.signupSuccess(response.data))
  } else {
    yield put(AuthActions.signupFailure(response.data))
  }
}