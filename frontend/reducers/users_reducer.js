import { RECEIVE_CURRENT_USER } from "../actions/session_actions.js";
import { RECEIVE_SINGLE_USER } from "../actions/users_actions.js";

const initialState = {
};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let userId;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      userId = Object.keys(action.currentUser.users)[0];
      nextState[userId] = action.currentUser.users[userId];
      return nextState;
      
    case RECEIVE_SINGLE_USER:
      userId = action.payload.users[Object.keys(action.payload.users)[0]].id;
      nextState[userId] = action.payload.users[userId];

      Object.keys(action.payload.other_users).forEach(id => {
        if (nextState[id] === undefined){
          nextState[id] = action.payload.other_users[id];
        }
      });

      return nextState;
      
    default:
      return state;
  }
};

export default usersReducer;