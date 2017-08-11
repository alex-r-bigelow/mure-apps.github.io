#!/usr/bin/env node
var path = require('path');
var colors = require('ansi-256-colors');
var portscanner = require('portscanner');
var shell = require('shelljs');
var request = require('request');
var express = require('express');
var mure = require('mure');

var statusColor = colors.fg.getRgb(1, 3, 2);
var errorColor = colors.fg.getRgb(5, 1, 3);
var routingColor = colors.fg.getRgb(4, 2, 0);

var firstPort = 8080;
var lastPort = 9000;

function logLines (prefix, data) {
  process.stdout.write(data.split('\n').map(line => line ? prefix + line : '').join('\n'));
}

var appList = [{
  appName: 'Main App',
  path: __dirname,
  publicPath: '/docs'
}];
console.log(statusColor + 'Main App ready' + colors.reset);

Object.keys(mure.appList).forEach(appName => {
  // Validate that both package.json and webpack.config.js exist
  try {
    var appPath = path.join(__dirname, 'apps/' + appName);

    appList.push({
      appName: appName,
      path: appPath,
      publicPath: '/' + appName
    });
    console.log(statusColor + appName + ' ready' + colors.reset);
  } catch (ex) {
    console.log(errorColor + 'Error recognizing ' + appName + ':\n' + ex.message + colors.reset);
  }
});

var app = express();

var promiseChain = Promise.resolve(firstPort + 1);
appList.forEach(appSpec => {
  // Sneaky hack to make port-finding synchronous
  promiseChain = promiseChain.then(nextPossiblePort => {
    return portscanner.findAPortNotInUse(nextPossiblePort, lastPort).then(port => {
      // Check if we're out of ports
      if (port >= lastPort) {
        console.log(errorColor + 'Ran out of available ports!' + colors.reset);
        process.exit(1);
      }

      // Start the development server
      console.log(statusColor + 'Starting ' + appSpec.appName + ' on port ' + port + colors.reset);
      var process = shell.exec(
        'cd ' + appSpec.path + ' && webpack-dev-server --watch --colors --port ' + port + ' --output-public-path ' + appSpec.publicPath,
        { silent: true, async: true },
        (code, stdout, stderr) => {
          console.log(errorColor + appSpec.appName + ' exited with code ' + code + colors.reset);
        });
      process.stdout.on('data', data => {
        logLines(statusColor + appSpec.appName + ': ' + colors.reset, data);
      });
      process.stderr.on('data', data => {
        logLines(errorColor + appSpec.appName + ': ' + colors.reset, data);
      });

      // Proxy the port
      console.log(routingColor + 'Proxying ' + appSpec.appName + ' (' + port + ') as http://localhost:' + firstPort + appSpec.publicPath + colors.reset);
      app.use(appSpec.publicPath, (req, res) => {
        var originalUrl = req.protocol + '://localhost:' + firstPort + req.originalUrl;
        var url = 'http://localhost:' + port + appSpec.publicPath + req.path;
        try {
          req.pipe(request({
            uri: url,
            qs: req.query
          })).pipe(res);
          console.log(routingColor + 'Routed ' + colors.reset + originalUrl + ' to ' + url);
        } catch (err) {
          console.log(errorColor + 'Error routing ' + colors.reset + originalUrl + ' to ' + url);
          logLines(errorColor + 'Error message: ' + colors.reset, err.message);
        }
      });

      // pass the next port number to the next chained promise
      return port + 1;
    }).catch(err => {
      console.log(errorColor + 'Error starting ' + appSpec.appName +
        ', attempting port range ' + nextPossiblePort + ' - ' + lastPort + colors.reset);
      logLines(errorColor + appSpec.appName + colors.reset, err.message);
      return nextPossiblePort + 1;
    });
  });
});

promiseChain.then(() => {
  // Simulate the redirect to /docs that we do when hosted on github.io
  app.use('/', express.static('.'));
  app.listen(firstPort);
  console.log(routingColor + 'Proxying all ports, mimicing github.io paths under http://localhost:' + firstPort + colors.reset);
});
