import * as PostsAPI from '../util/posts_api_util.js';
import { receiveErrors } from './errors_actions.js';

// String Constants
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

// Regular Actions
const createPostAction = payload => ({
  type: CREATE_POST,
  payload
});

const updatePostAction = payload => ({
  type: UPDATE_POST,
  payload
})

const deletePostAction = payload => ({
  type: DELETE_POST,
  payload
});

// Thunk Actions
export const createPost = post => dispatch => (
  PostsAPI.createPost(post)
    .then(post => dispatch(createPostAction(post)),
      errors => dispatch(receiveErrors(errors)))
);

export const createPhotoPost = post => dispatch => (
  PostsAPI.createPhotoPost(post)
    .then(post => dispatch(createPostAction(post)),
      errors => dispatch(receiveErrors(errors)))
);

export const createMediaPost = post => dispatch => (
  PostsAPI.createMediaPost(post)
    .then(post => dispatch(createPostAction(post)),
      errors => dispatch(receiveErrors(errors)))
);
  
export const updatePost = post => dispatch => (
  PostsAPI.updatePost(post)
  .then(post => dispatch(updatePostAction(post)),
    errors => dispatch(receiveErrors(errors)))
);

export const deletePost = post => dispatch => (
  PostsAPI.destroyPost(post)
    .then(post => dispatch(deletePostAction(post)),
      errors => dispatch(receiveErrors(errors)))
);