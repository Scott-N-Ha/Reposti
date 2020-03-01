import { RECEIVE_CURRENT_USER } from "../actions/session_actions.js";
import { RECEIVE_SINGLE_USER } from "../actions/users_actions.js";
import { RECEIVE_ERRORS } from "../actions/errors_actions.js";

const initialState = {
}

const sessionErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      nextState["session"] = action.errors
      return nextState;
    case RECEIVE_CURRENT_USER:
      nextState["user"] = action.errors
      return nextState;
    case RECEIVE_SINGLE_USER:
      nextState["user"] = action.errors
      return nextState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;