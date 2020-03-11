import { RECEIVE_CURRENT_USER } from "../actions/session_actions.js";
import { RECEIVE_SINGLE_USER } from "../actions/users_actions.js";
import { CREATE_LIKE, DELETE_LIKE } from '../actions/likes_actions.js';
import { CREATE_FOLLOW, DELETE_FOLLOW, RECEIVE_FOLLOWS } from '../actions/follows_action.js';
import { RECEIVE_LIKES } from '../actions/likes_actions.js';

const initialState = {
};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let userId;
  let likeId;
  let followId;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(nextState, action.currentUser.other_users, action.currentUser.users);
      
    case RECEIVE_SINGLE_USER:
      userId = action.payload.users[Object.keys(action.payload.users)[0]].id;
      nextState[userId] = action.payload.users[userId];

      Object.keys(action.payload.other_users).forEach(id => {
        if (nextState[id] === undefined){
          nextState[id] = action.payload.other_users[id];
        }
      });
      return nextState;

    case CREATE_LIKE:
      likeId = Number(Object.keys(action.payload)[0]);
      userId = action.payload[likeId].liker_id;
      nextState[userId].likes.push(likeId);
      return nextState;

    case DELETE_LIKE:
      likeId = Number(Object.keys(action.payload)[0]);
      userId = action.payload[likeId].liker_id;
      nextState[userId].likes = nextState[userId].likes.filter(likeArrId => likeArrId !== likeId);
      return nextState;

    case CREATE_FOLLOW:
      followId = Number(Object.keys(action.payload)[0]);
      userId = action.payload[followId].follower_id;
      nextState[userId].leaders.push(followId);
      return nextState;
      
    case DELETE_FOLLOW:
      followId = Number(Object.keys(action.payload)[0]);
      userId = action.payload[followId].follower_id;
      nextState[userId].leaders = nextState[userId].leaders.filter(leaderArrId => leaderArrId != followId);
      return nextState;

    case RECEIVE_FOLLOWS:
      if (Object.values(action.payload).length > 0){
        Object.keys(action.payload.users).forEach(id => {
          if (nextState[id] === undefined){
            nextState[id] = action.payload.users[id];
          }
        });
      }
      return nextState;

    case RECEIVE_LIKES:
      if (Object.values(action.payload).length > 0){
        Object.keys(action.payload.users).forEach(id => {
          if (nextState[id] === undefined){
            nextState[id] = action.payload.users[id];
          }
        });
      }
      return nextState;
      
    default:
      return state;
  }
};

export default usersReducer;