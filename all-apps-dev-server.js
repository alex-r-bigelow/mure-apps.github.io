#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var colors = require('ansi-256-colors');
var express = require('express');
var webpack = require('webpack');
var middleware = require('webpack-dev-middleware');
// TODO: get the app list from the mure library instead of reading the submodule file
var apps = require(path.join(__dirname, 'mure-library/src/appList.json'));

var app = express();

/* Serve the root app */
var rootConfig = require('./webpack.config.js');
rootConfig.output.publicPath = '/docs';
var rootCompiler = webpack(rootConfig, () => {});
var rootMiddleware = middleware(rootCompiler, {
  publicPath: '/docs',
  stats: { colors: true }
});
app.use(rootMiddleware);
console.log(colors.fg.getRgb(1, 3, 2) + 'main app loaded successfully!' + colors.reset);

/* Serve the redirect to the compiled docs directory (simulates what we
   have to do for the github organization page) */
app.use(express.static('.'));

app.listen(8080);

/*
Object.keys(apps).forEach(function (appName) {
  // Validate that both package.json and webpack.config.js exist
  try {
    var packageJson = require(path.join(__dirname, 'apps/' + appName + '/package.json'));
    var subConfig = require(path.join(__dirname, 'apps/' + appName + '/webpack.config.js'));

    // Serve the submodule
    subConfig.context = path.join(__dirname, 'apps/' + appName);
    subConfig.output.publicPath = '/' + appName;
    var subCompiler = webpack(subConfig, () => {});
    var subMiddleware = middleware(subCompiler, {
      publicPath: '/' + appName,
      stats: { colors: true }
    });
    app.use(subMiddleware);
    console.log(colors.fg.getRgb(1, 3, 2) + appName + ' app loaded successfully!' + colors.reset);
  } catch (ex) {
    console.log(colors.fg.getRgb(5, 1, 3) + 'Error loading ' + appName + ':\n' + ex.message + colors.reset);
  }
});
*/
