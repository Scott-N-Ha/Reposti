import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions.js";

let initialState = {
  id: null,
  username: "",
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState["id"] = Number(Object.keys(action.currentUser.users)[0]);
      return nextState;
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;