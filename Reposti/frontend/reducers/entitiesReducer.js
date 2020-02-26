import { combineReducers } from 'redux';

import postsReducer from './postsReducer.js';

const entitiesReducer = combineReducers({
  posts: postsReducer
});

export default entitiesReducer;