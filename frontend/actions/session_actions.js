import * as SessionAPI from '../util/session_api_util.js';
import { receiveErrors } from './errors_actions.js';

// String Constants
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";


// Regular Actions
const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

// Thunk Actions
export const login = user => dispatch => (
  SessionAPI.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
      // errors => dispatch(receiveErrors(errors)))
);

export const logout = () => dispatch => (
  SessionAPI.logout()
    .then(() => dispatch(logoutCurrentUser()),
      errors => dispatch(receiveErrors(errors)))
);

export const signup = user => dispatch => (
  SessionAPI.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors)))
);