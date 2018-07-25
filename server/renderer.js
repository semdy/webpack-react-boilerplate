import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ConnectedRouter, push} from 'react-router-redux';
import {Provider} from 'react-redux';
import serialize from 'serialize-javascript';
import App from '../src/App';
import configureStore from '../src/store/configureStore';

const path = require("path");
const fs = require("fs");
const isDev = process.env.NODE_ENV === 'development';
const targetFolder = isDev ? 'public' : 'dist';

export default (req, res, next, isNoHtml) => {
  const filePath = path.resolve(__dirname, '..', targetFolder, 'index.html');
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    const {store, history} = configureStore({}, true);

    // once `store` is configured, dispatch the proper route into
    store.dispatch(push(req.originalUrl));

    const preloadedState = serialize(store.getState());
    const markup = isNoHtml ? '' : ReactDOMServer.renderToString(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App/>
        </ConnectedRouter>
      </Provider>
    );

    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${markup}</div>`
    ).replace('window.INITIAL_STATE={}', `window.INITIAL_STATE = ${preloadedState}`);

    if (isDev) {
      html = html
        .replace(/%PUBLIC_URL%/g, process.env.PUBLIC_URL)
        .replace('</body>', '<script type="text/javascript" src="/bundle.js"></script>\n</body>');
    }

    return res.status(200).send(html);

  });
}