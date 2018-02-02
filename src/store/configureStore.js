import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import reducer from '../reducers';
import * as actionCreators from '../actions';

/**
 * 创建store
 * @param  {[type]} initialState [description]
 * @param  {[type]} history [description]
 * @return {[type]}              [description]
 */
export default function configureStore(initialState, history) {
  const store = createStore(reducer, initialState,
    //redux调试代码
    window.devToolsExtension && window.devToolsExtension({ actionCreators }),
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history))
  );

  //热加载,及时更新reducer
  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers');
        store.replaceReducer(nextReducer);
      });
    }
  }

  return store;
}
