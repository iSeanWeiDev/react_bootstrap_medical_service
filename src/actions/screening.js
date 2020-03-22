import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  /**
   * get Screen
   */
  getScreeningRequest: ['payload'],
  getScreeningSuccess: ['response'],
  getScreeningFailure: ['response'],
})

export const ScreeningTypes = Types
export default Creators
