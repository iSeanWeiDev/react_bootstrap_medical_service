/**
 * We will use the following prefixes.
 * add: When adding something to the database.
 * delete: When deleting something from the database.
 * update: When updating something in the database.
 * fetch: When pulling something from the database.
 * search: When searching something in the database.
 * select: When setting reducers, not handling with database, just handling only reducers.
 */

import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    /**
   * get profile
   */
  getProfileRequest: [],
  getProfileSuccess: ['response'],
  getProfileFailure: null,

  // edit profile
  editProfileRequest: ['payload'],
  editProfileSuccess: ['response'],
  editProfileFailure: ['response'],
})

export const ProfileTypes = Types
export default Creators
