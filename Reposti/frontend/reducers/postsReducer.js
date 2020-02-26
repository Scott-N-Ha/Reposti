import merge from 'lodash/merge';

import { RECEIVE_ALL_POSTS } from '../actions/postsActions.js';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge(nextState, action.payload);
    default:
      return state;
  }
}

export default postsReducer;