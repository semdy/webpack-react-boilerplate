import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ConnectedRouter, push} from 'react-router-redux';
import {Provider} from 'react-redux';
import serialize from 'serialize-javascript';
import App from '../src/containers/App';
import configureStore from '../src/store/configureStore';

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }


    const {store, history} = configureStore({}, true);

    // once `store` is configured, dispatch the proper route into
    store.dispatch(push(req.originalUrl));

    const preloadedState = serialize(store.getState());
    const markup = ReactDOMServer.renderToString(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App/>
        </ConnectedRouter>
      </Provider>
    );

    return res.status(200).send(
      htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${markup}</div>`
      ).replace('window.INITIAL_STATE={}', `window.INITIAL_STATE = ${preloadedState}`)
    )

  });
}