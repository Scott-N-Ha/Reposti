import * as LikeAPI from '../util/like_api_util.js';
import { receiveErrors } from './errors_actions.js';

// String Constants
export const CREATE_LIKE = "CREATE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";

// Regular Actions
const createLikeAction = (payload) => ({
  type: CREATE_LIKE,
  payload
});

const deleteLikeAction = (payload) => ({
  type: DELETE_LIKE,
  payload
});

const receiveLikesAction = payload => ({
  type: RECEIVE_LIKES,
  payload
});

// Thunk Actions
export const createLike = like => dispatch => (
  LikeAPI.createLike(like)
    .then(like => dispatch(createLikeAction(like)),
      errors => dispatch(receiveErrors(errors)))
);

export const deleteLike = like => dispatch => (
  LikeAPI.deleteLike(like)
    .then(like => dispatch(deleteLikeAction(like)),
      errors => dispatch(receiveErrors(errors)))
);

export const fetchAllLikesForUser = user => dispatch => (
  LikeAPI.fetchAllLikesForUser(user)
    .then(likes => dispatch(receiveLikesAction(likes)),
      errors => dispatch(receiveErrors(errors)))
);