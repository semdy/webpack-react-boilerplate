const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

let serverRendererPath;
let serverRenderer;

if (process.env.NODE_ENV === 'production') {
  serverRendererPath = path.join(__dirname, '../build/static/scripts/renderer.js');
  serverRenderer = require(serverRendererPath).default;
} else {
  serverRendererPath = path.join(__dirname, 'renderer.js');
  serverRenderer = require(serverRendererPath);
}

const PORT = 8000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// other static resources should just be served as they are
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// root (*) should always serve our server rendered page
app.use("*", serverRenderer);

// start the app
app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error);
  }

  console.log("listening on " + PORT + "...");
});
