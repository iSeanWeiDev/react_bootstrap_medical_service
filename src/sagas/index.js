import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/api'

import { AuthTypes } from '../actions/auth'
import { ProfileTypes } from '../actions/profile'
import { ScreeningTypes } from '../actions/screening'

import {
  signinRequest,
  signupRequest,
} from './auth'

import {
  getProfileRequest
} from './profile'

import {
  getScreeningRequest,
  nextQuestionRequest,
  previousQuestionRequest,
  saveAnswerRequest,
  predictionRequest
} from './screening'

const api = API.create();

export default function* root() {
  yield all([
    // ------------------------- App Sagas
    
    // ------------------------- Auth Sagas
    takeLatest(AuthTypes.SIGNIN_REQUEST, signinRequest, api),
    takeLatest(AuthTypes.SIGNUP_REQUEST, signupRequest, api),

    // ------------------------- Profile Sagas
    takeLatest(ProfileTypes.GET_PROFILE_REQUEST, getProfileRequest, api),

    // ------------------------- Screening Sagas
    takeLatest(ScreeningTypes.GET_SCREENING_REQUEST, getScreeningRequest, api),
    takeLatest(ScreeningTypes.NEXT_QUESTION_REQUEST, nextQuestionRequest, api),
    takeLatest(ScreeningTypes.PREVIOUS_QUESTION_REQUEST, previousQuestionRequest, api),
    takeLatest(ScreeningTypes.SAVE_ANSWER_REQUEST, saveAnswerRequest, api),
    takeLatest(ScreeningTypes.PREDICTION_REQUEST, predictionRequest, api),

  ])
}
