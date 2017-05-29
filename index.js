import mure from './mure-library/mure.js';
import * as d3 from 'd3';

window.d3 = d3; // strap d3 to the window for debugging console access

import MainView from './MainView';
import DocView from './DocView';
import Toolbar from './Toolbar';

import { NewFileDialog } from './Dialog';

import gearIcon from './img/gearIcon.svg';
import newFileIcon from './img/newFileIcon.svg';
import uploadIcon from './img/upload.svg';

import './style/layout.scss';
import './style/buttons.scss';
import './style/scrollbars.scss';
import './lib/recolorImages.js';

import demoSvgText from '!raw-loader!./demo.svg';

mure.loadUserLibraries = true;
mure.runUserScripts = true;

function buildAppMenu () {
  return d3.entries(mure.apps).map(entry => {
    return {
      onclick: d => {
        mure.openApp(d.label);
      },
      label: entry.key,
      icon: require('./img/' + entry.value.icon),
      selected: entry.key === mure.currentApp
    };
  });
}

let opsMenu = [
  {
    label: 'Settings',
    icon: gearIcon,
    onclick: () => {
      console.log('todo: settings dialog');
    }
  },
  {
    label: 'New File',
    icon: newFileIcon,
    onclick: () => {
      new NewFileDialog(newFileSpecs => {
        let newFileText = '<svg width="' + newFileSpecs.width + '" height="' + newFileSpecs.height + '"></svg>';
        let newBlob = new window.Blob([newFileText], { type: 'image/svg+xml' });
        newBlob.name = newFileSpecs.name;
        mure.uploadSvg(newBlob);
      }).render();
    }
  },
  {
    label: 'Upload',
    icon: uploadIcon,
    onclick: () => {
      let inputField = d3.select('body')
        .append('input')
        .attr('type', 'file')
        .property('multiple', true)
        .attr('accept', '.svg')
        .style('display', 'none')
        .on('change', () => {
          Array.from(inputField.node().files).forEach(fileObj => {
            mure.uploadSvg(fileObj);
          });
          inputField.remove();
        });
      inputField.node().click();
    }
  }
];

let mainView;
let docView;
let appMenu;
let fileOpsMenu;

function setup () {
  mainView = new MainView();
  mainView.render(d3.select('#mainView'));

  docView = new DocView(demoSvgText);
  docView.render(d3.select('#docView'));

  appMenu = new Toolbar(buildAppMenu());
  appMenu.render(d3.select('#appMenu'));

  fileOpsMenu = new Toolbar(opsMenu);
  fileOpsMenu.render(d3.select('#fileOpsMenu'));
}
window.onload = window.onresize = setup;
