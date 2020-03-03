import * as PostsAPI from '../util/posts_api_util.js';
import { receiveErrors } from './errors_actions.js';

// String Constants
export const DELETE_POST = "DELETE_POST";

// Regular Actions
const deletePostAction = payload => ({
  type: DELETE_POST,
  payload
});

// Thunk Actions
export const deletePost = post => dispatch => (
  PostsAPI.destroyPost(post)
    .then(post => dispatch(deletePostAction(post)),
      errors => dispatch(receiveErrors(errors)))
);