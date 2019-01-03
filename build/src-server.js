import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

import config from '../webpack.config.dev';

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
});

const port = 3000;
const app = express();

app.use(middleware);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(port, (err) => {
  if (err) {
      console.log(err);
  } else {
      open('http://localhost:' + port);
  }
});
