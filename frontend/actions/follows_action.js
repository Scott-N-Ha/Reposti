import * as FollowAPI from '../util/follow_api_util.js';
import { receiveErrors } from './errors_actions.js';

// String Constants
export const CREATE_FOLLOW = "CREATE_FOLLOW";
export const DELETE_FOLLOW = "DELETE_FOLLOW";
export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";

// Regular Actions
const createFollowAction = (payload) => ({
  type: CREATE_FOLLOW,
  payload
});

const deleteFollowAction = (payload) => ({
  type: DELETE_FOLLOW,
  payload
});

const receiveFollowsAction = payload => ({
  type: RECEIVE_FOLLOWS,
  payload
});

// Thunk Actions
export const createFollow = follow => dispatch => (
  FollowAPI.createFollow(follow)
    .then(follow => dispatch(createFollowAction(follow)),
      errors => dispatch(receiveErrors(errors)))
);

export const deleteFollow = follow => dispatch => (
  FollowAPI.deleteFollow(follow)
    .then(follow => dispatch(deleteFollowAction(follow)),
      errors => dispatch(receiveErrors(errors)))
);

export const fetchFollows = user => dispatch => (
  FollowAPI.fetchFollows(user)
    .then(follows => dispatch(receiveFollowsAction(follows)),
      errors => dispatch(receiveErrors(errors)))
);