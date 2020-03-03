import * as LikeAPI from '../util/like_api_util.js';
import { receiveErrors } from './errors_actions.js';

// String Constants
export const CREATE_LIKE = "CREATE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";

// Regular Actions
const createLikeAction = (payload) => ({
  type: CREATE_LIKE,
  payload
});

const deleteLikeAction = (payload) => ({
  type: DELETE_LIKE,
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