import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { RECEIVE_SINGLE_USER } from '../actions/users_actions.js';
import { CREATE_FOLLOW, DELETE_FOLLOW } from '../actions/follows_action.js';

const initialState = {

};

const followsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let followId;
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(nextState, action.currentUser.follows);
    case RECEIVE_SINGLE_USER:
      return Object.assign(nextState, action.payload.follows);
    case CREATE_FOLLOW:
      followId = Object.keys(action.payload)[0];
      nextState[followId] = action.payload[followId];
      return nextState;
    case DELETE_FOLLOW:
      followId = Object.keys(action.payload)[0];
      delete nextState[followId];
      return nextState;
    default:
      return state;
  }
};

export default followsReducer;