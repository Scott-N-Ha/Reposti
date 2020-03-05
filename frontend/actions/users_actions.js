import * as UserAPI from '../util/users_api_util.js';
import { receiveErrors } from './errors_actions.js';

// String Constants
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";

// Regular Actions
const receiveSingleUser = (payload) => ({
  type: RECEIVE_SINGLE_USER,
  payload
});

// Thunk Actions
export const fetchSingleUser = username => dispatch => (
  UserAPI.fetchSingleUser(username)
    .then(user => dispatch(receiveSingleUser(user)),
      errors => dispatch(receiveErrors(errors)))
);