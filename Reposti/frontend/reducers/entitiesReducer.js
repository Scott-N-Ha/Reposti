import { combineReducers } from 'redux';

import postsReducer from './postsReducer.js';
import usersReducer from './usersReducer.js';

const entitiesReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer
});

export default entitiesReducer;