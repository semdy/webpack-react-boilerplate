import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
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

  const middleware = composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk));
  const store = createStore(reducer, initialState, middleware);

  //热加载,及时更新reducer
  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers');
        store.replaceReducer(nextReducer);
      });
    }
  }

  return {history, store};
}
