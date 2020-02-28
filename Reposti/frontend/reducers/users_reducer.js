import { RECEIVE_CURRENT_USER } from "../actions/session_actions.js";

const initialState = {
};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, nextState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.currentUser.id] = action.currentUser;
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;