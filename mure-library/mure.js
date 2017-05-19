import PouchDB from 'pouchdb';
import apps from './apps.json';

class Mure {
  constructor () {
    this.apps = apps;
    // Funky stuff to figure out if we're debugging (if that's the case, we want to use
    // localhost instead of the github link for all links)
    let windowTitle = document.getElementsByTagName('title')[0];
    windowTitle = windowTitle ? windowTitle.textContent : '';
    this.debugMode = window.location.hostname === 'localhost' && windowTitle.startsWith('Mure');
    // Once we know whether we're debugging, figure out the current app name
    this.currentApp = Object.keys(apps).filter(d => {
      if (this.debugMode) {
        return parseInt(window.location.port) === this.apps[d].debug_port;
      } else {
        return window.location.href.startsWith(this.apps[d].public_url);
      }
    })[0];
    // Create / load the local database of files
    this.localdb = new PouchDB('mure');

    this.loadUserLibraries = false;
    this.runUserScripts = false;
  }
  signalSvgLoaded (loadUserLibrariesFunc, runUserScriptsFunc) {
    // Only load the SVG's linked libraries + embedded scripts if we've been told to
    let callback = this.runUserScripts ? runUserScriptsFunc : () => {};
    if (this.loadUserLibraries) {
      loadUserLibrariesFunc(callback);
    }
  }
  openApp (appName) {
    console.log('todo: switch to ' + this.apps[appName]);
  }
  loadSvg (fileName, iframe) {

  }
  uploadSvg () {

  }
  downloadSvg () {

  }
}

let mure = new Mure();
window.mure = mure;
export default mure;
