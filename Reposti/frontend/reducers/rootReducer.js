import { combineReducers } from 'redux';

import entitiesReducer from './entitiesReducer.js';
import sessionReducer from './sessionReducer.js';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer
});

export default rootReducer;