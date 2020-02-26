import { combineReducers } from 'redux';
import entitiesReducer from './entitiesReducer.js';

const rootReducer = combineReducers({
  entities: entitiesReducer
});

export default rootReducer;