import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/api'

import { AuthTypes } from '../actions/auth'
import { ProfileTypes } from '../actions/profile'

import {
  signinRequest,
  signupRequest,
} from './auth'

import {
  getProfileRequest
} from './profile'

const api = API.create();

export default function* root() {
  yield all([
    // ------------------------- App Sagas
    
    // ------------------------- Auth Sagas
    takeLatest(AuthTypes.SIGNIN_REQUEST, signinRequest, api),
    takeLatest(AuthTypes.SIGNUP_REQUEST, signupRequest, api),

    // ------------------------- Profile Sagas
    takeLatest(ProfileTypes.GET_PROFILE_REQUEST, getProfileRequest, api),

  ])
}
