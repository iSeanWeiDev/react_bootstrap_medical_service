import { put } from 'redux-saga/effects'
import ProfileActions from '../actions/profile'

//get profile
export function* getProfileRequest(api, action) {
  const response = yield api.getProfile();
  if(response.ok) {
    yield put(ProfileActions.getProfileSuccess(response.data))
  } else {
    yield put(ProfileActions.getProfileFailure())
  }
}
