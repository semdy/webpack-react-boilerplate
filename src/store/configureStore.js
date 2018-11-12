import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import reducer from '../reducers';


export default (initialState = {}, fromServer = false) => {

  let history;

  if (fromServer) {
    history = createMemoryHistory();
  } else {
    history = createBrowserHistory();
  }

  let enhancer;

  if (process.env.NODE_ENV === 'development') {
    const {logger} = require(`redux-logger`);
    const DevTools = require('../DevTools').default;

    enhancer = compose(
      applyMiddleware(routerMiddleware(history), thunk, logger),
      DevTools.instrument()
    )
  } else {
    enhancer = applyMiddleware(routerMiddleware(history), thunk);
  }

  const store = createStore(reducer, initialState, enhancer);

  //热加载,及时更新reducer
  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers').default;
        store.replaceReducer(nextReducer);
      });
    }
  }

  return {history, store};
}
