import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import todos from './todo';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  routerReducer,
  todos,
  visibilityFilter
});

export default todoApp;
