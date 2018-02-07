import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import todos from './todo';
import visibilityFilter from './visibilityFilter';

const reducers = combineReducers({
  router: routerReducer,
  todos,
  visibilityFilter
});

export default reducers;
