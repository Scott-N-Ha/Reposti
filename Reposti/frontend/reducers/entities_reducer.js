import { combineReducers } from 'redux';

import usersReducer from './users_reducer.js';
import postsReducer from './posts_reducer.js';
import followsReducer from './follows_reducer.js';
import likesReducer from './likes_reducer.js';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  follows: followsReducer,
  likes: likesReducer,
});

export default entitiesReducer;