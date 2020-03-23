import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  /**
   * get Screen
   */
  getScreeningRequest: ['payload'],
  getScreeningSuccess: ['response'],
  getScreeningFailure: ['response'],

  // Question

  nextQuestionRequest: ['payload'],
  nextQuestionSuccess: ['response'],
  nextQuestionFailure: ['response'],

  previousQuestionRequest: ['payload'],
  previousQuestionSuccess: ['response'],
  previousQuestionFailure: ['response'],

  saveAnswerRequest: ['payload'],
  saveAnswerSuccess: ['response'],
  saveAnswerFailure: null,

  predictionRequest: [],
  predictionSuccess: ['response'],
  predictionFailure: ['response'],
  
})

export const ScreeningTypes = Types
export default Creators
