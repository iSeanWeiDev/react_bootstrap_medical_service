import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getResultRequest: ['payload'],
  getResultSuccess: ['response'],
  getResultFailure: ['response'],
})

export const ResultTypes = Types
export default Creators
