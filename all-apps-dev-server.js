var fs = require('fs');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var middleware = require('webpack-dev-middleware');

var app = express();

/* Serve the root app */
var rootConfig = require('./webpack.config.js');
rootConfig.output.publicPath = '/docs';
var rootCompiler = webpack(rootConfig, () => {});
var rootMiddleware = middleware(rootCompiler, { publicPath: '/docs' });
app.use(rootMiddleware);

/* Serve the redirect to the compiled docs directory (simulates what we
   have to do for the github organization page) */
app.use(express.static('.'));

/* serve the submodules */
fs.readdir(path.join(__dirname, 'apps'), function (err, appNames) {
  if (err) {
    console.log('Error scanning sub apps:', err);
    process.exit();
  }
  appNames.forEach(appName => {
    var subConfig = require('./apps/' + appName + '/webpack.config.js');
    subConfig.context = path.join(__dirname, 'apps/' + appName);
    subConfig.output.publicPath = '/' + appName;
    var subCompiler = webpack(subConfig, () => {});
    var subMiddleware = middleware(subCompiler, { publicPath: '/' + appName });
    app.use(subMiddleware);
  });
});

app.listen(8080);
