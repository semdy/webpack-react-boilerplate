import './utils/flexible';

import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import './styles/app.scss';

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);

// import all svg
const req = require.context('./images/icons', true, /\.svg$/);
requireAll(req);

const history = createHistory();
let store = configureStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
