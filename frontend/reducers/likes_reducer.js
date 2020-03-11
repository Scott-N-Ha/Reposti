import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { RECEIVE_SINGLE_USER } from '../actions/users_actions.js';
import { CREATE_LIKE, DELETE_LIKE, RECEIVE_LIKES } from '../actions/likes_actions.js';

const initialState = {

};

const likesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let likeId;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(nextState, action.currentUser.likes);

    case RECEIVE_SINGLE_USER:
      return Object.assign(nextState, action.payload.likes);

    case CREATE_LIKE:
      likeId = Object.keys(action.payload)[0];
      nextState[likeId] = action.payload[likeId];
      return nextState;

    case DELETE_LIKE:
      likeId = Object.keys(action.payload)[0];
      delete nextState[likeId];
      return nextState;

    case RECEIVE_LIKES:
      return Object.assign(nextState, action.payload.likes);
      
    default:
      return state;
  }
};

export default likesReducer;