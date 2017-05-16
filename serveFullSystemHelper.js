var extractIndex = process.argv.indexOf('--extract');
var extractAttr = process.argv[extractIndex + 1];

var apps = require('./mure-library/apps.json');
Object.keys(apps).forEach(function (appName) {
  console.log(apps[appName][extractAttr]);
});
