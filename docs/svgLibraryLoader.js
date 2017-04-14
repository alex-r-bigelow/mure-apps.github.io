/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals XMLHttpRequest, ActiveXObject */
/* eslint no-eval: 0 */
function load(url, callback) {
  var xhr = void 0;
  if (typeof XMLHttpRequest !== 'undefined') {
    xhr = new XMLHttpRequest();
  } else {
    var versions = ['MSXML2.XmlHttp.5.0', 'MSXML2.XmlHttp.4.0', 'MSXML2.XmlHttp.3.0', 'MSXML2.XmlHttp.2.0', 'Microsoft.XmlHttp'];
    for (var i = 0, len = versions.length; i < len; i++) {
      try {
        xhr = new ActiveXObject(versions[i]);
        break;
      } catch (e) {}
    }
  }

  xhr.onreadystatechange = ensureReadiness;

  function ensureReadiness() {
    if (xhr.readyState < 4) {
      return;
    }

    if (xhr.status !== 200) {
      return;
    }

    // all is well
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}

function loadLibraries(callback) {
  // Grab all the mure:library tags, and load the referenced library (script src attributes
  // in SVG don't work, so we have to manually load remote libraries)
  var libraries = Array.from(document.getElementsByTagNameNS('http://mure-apps.github.io', 'library')).map(function (libraryTag) {
    return libraryTag.getAttribute('src');
  });

  // This is a funky check to see whether we're actually debugging mure.js locally, or if
  // this is the normal use case where we should just stick with the hosted version
  var mureLibraryIndex = libraries.indexOf('https://mure-apps.github.io/docs/mure.min.js');
  if (mureLibraryIndex !== -1) {
    var parentLibraries = [];
    if (window.parent !== window) {
      parentLibraries = Array.from(window.parent.document.getElementsByTagName('script')).filter(function (scriptTag) {
        return scriptTag.getAttribute('src') === 'mure.js';
      });
    }
    if (parentLibraries.length !== 0) {
      // swap the hosted library for the debugging one
      libraries[mureLibraryIndex] = 'mure.js';
    }
  }

  var loadedLibraries = {};
  var onloadFired = false;

  libraries.forEach(function (script) {
    load(script, function (scriptText) {
      eval(scriptText);
      loadedLibraries[script] = true;
      attemptStart();
    });
  });

  window.onload = function () {
    onloadFired = true;
    attemptStart();
  };

  function attemptStart() {
    if (!onloadFired) {
      return;
    }
    var allLoaded = libraries.every(function (script) {
      return loadedLibraries[script];
    });
    if (allLoaded) {
      callback();
    }
  }
}

function runUserScripts() {
  Array.from(document.getElementsByTagNameNS('http://mure-apps.github.io', 'script')).forEach(function (scriptTag) {
    return eval(scriptTag.textContent);
  });
}

loadLibraries(runUserScripts);

/***/ })

/******/ });
//# sourceMappingURL=svgLibraryLoader.js.map