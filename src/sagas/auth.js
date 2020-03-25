import { put, call } from 'redux-saga/effects';
import AuthActions from '../actions/auth';
import AppActions from '../actions/app';
import { history } from '../reducers';

//signin
export function* signinRequest(api, action) {
  const { payload } = action;
  // send signin post request
  const signInResponse = yield api.postSignin(payload);
  if(signInResponse.ok) {
    // render data to signin success
    yield put(AuthActions.signinSuccess(signInResponse.data));
    yield put(AppActions.appAuthenticated());
    // set the access token to loacal storage
    yield localStorage.setItem('access_token', signInResponse.data.response.access_token);
    yield localStorage.setItem('refresh_token', signInResponse.data.response.refresh_token);
    
    // Send get Userinfo request
    const getUserInfoResponse = yield api.getUserInfo();
    // Handle getUserInfoResponse
    if (getUserInfoResponse.ok && !getUserInfoResponse.data.response.onboarded) {
      yield call(history.push, '/screening/onboarding');
    } else {
      yield call(history.push, '/');
    }
  } else {
    // render data to signin failure
    yield put(AuthActions.signinFailure(signInResponse.data))
  }
}

//signup
export function* signupRequest(api, action) {
  const { payload } = action;
  console.log(payload);
  const signUpResponse = yield api.postSingup(payload);
  if(signUpResponse.ok) {
    yield put(AppActions.appAuthenticated());
    yield put(AuthActions.signupSuccess(signUpResponse.data))
  } else {
    yield put(AuthActions.signupFailure(signUpResponse.data))
  }
}

