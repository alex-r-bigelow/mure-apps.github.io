/* globals XMLHttpRequest, ActiveXObject */
/* eslint no-eval: 0 */
function load (url, callback) {
  let xhr;
  if (typeof XMLHttpRequest !== 'undefined') {
    xhr = new XMLHttpRequest();
  } else {
    let versions = [
      'MSXML2.XmlHttp.5.0',
      'MSXML2.XmlHttp.4.0',
      'MSXML2.XmlHttp.3.0',
      'MSXML2.XmlHttp.2.0',
      'Microsoft.XmlHttp'
    ];
    for (let i = 0, len = versions.length; i < len; i++) {
      try {
        xhr = new ActiveXObject(versions[i]);
        break;
      } catch (e) {}
    }
  }

  xhr.onreadystatechange = ensureReadiness;

  function ensureReadiness () {
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

function loadLibraries (callback) {
  // Grab all the mure:library tags, and load the referenced library (script src attributes
  // in SVG don't work, so we have to manually load remote libraries)
  let libraries = Array.from(document.getElementsByTagNameNS('http://mure-apps.github.io', 'library'))
    .map(libraryTag => libraryTag.getAttribute('src'));

  // This is a funky check to see whether we're actually debugging mure.js locally, or if
  // this is the normal use case where we should just stick with the hosted version
  let mureLibraryIndex = libraries.indexOf('https://mure-apps.github.io/docs/mure.min.js');
  if (mureLibraryIndex !== -1) {
    let parentLibraries = [];
    if (window.parent !== window) {
      parentLibraries = Array.from(window.parent.document.getElementsByTagName('script'))
        .filter(scriptTag => scriptTag.getAttribute('src') === 'mure.js');
    }
    if (parentLibraries.length !== 0) {
      // swap the hosted library for the debugging one
      libraries[mureLibraryIndex] = 'mure.js';
    }
  }

  let loadedLibraries = {};
  let onloadFired = false;

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

  function attemptStart () {
    if (!onloadFired) {
      return;
    }
    let allLoaded = libraries.every(script => {
      return loadedLibraries[script];
    });
    if (allLoaded) {
      callback();
    }
  }
}

function runUserScripts () {
  Array.from(document.getElementsByTagNameNS('http://mure-apps.github.io', 'script'))
    .forEach(scriptTag => eval(scriptTag.textContent));
}

loadLibraries(runUserScripts);
