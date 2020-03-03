import { RECEIVE_SINGLE_USER } from '../actions/users_actions.js';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { DELETE_POST } from '../actions/posts_actions.js';

const initialState = {

};

const postsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      return Object.assign(nextState, action.currentUser.posts);
    case RECEIVE_SINGLE_USER:
      return Object.assign(nextState, action.payload.posts);
    case DELETE_POST:
      delete nextState[Object.keys(action.payload.posts)[0]];
      return nextState;
    default:
      return state;
  }
};

export default postsReducer;