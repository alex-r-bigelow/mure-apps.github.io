#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var colors = require('ansi-256-colors');
var express = require('express');
var webpack = require('webpack');
var middleware = require('webpack-dev-middleware');

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

/* Serve the redirect to the compiled docs directory (simulates what we
   have to do for the github organization page) */
app.use(express.static('.'));

app.listen(8080);

/* Generate the app directory */
var appDirectory = {};
fs.readdir(path.join(__dirname, 'apps'), function (err, appNames) {
  if (err) {
    console.log('Error scanning sub apps:', err);
    process.exit();
  }
  appNames.forEach(function (appName) {
    // Validate that both package.json and webpack.config.js exist
    try {
      var packageJson = require(path.join(__dirname, 'apps/' + appName + '/package.json'));
      var subConfig = require(path.join(__dirname, 'apps/' + appName + '/webpack.config.js'));

      // Add an entry in the app directory
      appDirectory[appName] = {
        name: appName,
        description: packageJson.description || '',
        author: packageJson.author || ''
      };

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

  // Finally, write the directory of apps to a json file for the mure library
  fs.writeFile('./mure-library/appList.json', JSON.stringify(appDirectory, null, 2));
});
