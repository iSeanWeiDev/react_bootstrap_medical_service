import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Set screen type
  setScreeningRequest: ['payload'],
  getResultRequest: ['payload'],
  getResultSuccess: ['response'],
  getResultFailure: ['response'],
})

export const ResultTypes = Types;
export default Creators;
