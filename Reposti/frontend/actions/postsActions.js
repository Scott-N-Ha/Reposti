import * as APIUtil from '../util/apiUtil.js';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";

// regular actions

export const receiveAllPosts = payload => {
  return {
    type: RECEIVE_ALL_POSTS,
    payload
  }
};

// thunk actions

export const fetchAllPosts = () => dispatch => (
  APIUtil.fetchAllPosts().then(posts => dispatch(receiveAllPosts(posts)))
);