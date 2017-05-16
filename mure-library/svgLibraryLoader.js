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

if (window.parent !== window && window.parent.mure) {
  // This SVG is getting edited in a mure app! In that case, the parent mure library
  // is responsible to figure out whether or not our libraries / scripts should
  // even be loaded
  window.parent.mure.signalSvgLoaded(window);
} else {
  // We've been loaded directly into a browser, or embedded in a normal page;
  // load all the libraries, and then run all the scripts
  loadLibraries(runUserScripts);
}
