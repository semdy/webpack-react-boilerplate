import './utils/flexible';

import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import './styles/app.scss';

const initialState = window.INITIAL_STATE || {};
delete window.INITIAL_STATE;

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context('./images/icons', true, /\.svg$/);
requireAll(req);

const {store, history} = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}
