
import mure from 'mure';
import * as d3 from 'd3';

// strap mure and d3 to the window for debugging console access
window.mure = mure;
window.d3 = d3;

import MainView from './MainView';
import { DocView, Toolbar, AppToolbar, NewFileDialog, updateImgColorFilters } from 'mure-ui';
import './style.scss';
updateImgColorFilters();

import gearIcon from './img/gear.svg';
import newFileIcon from './img/newFile.svg';
import uploadIcon from './img/upload.svg';

/* eslint-disable import/no-webpack-loader-syntax */
import demoSvgText from '!raw-loader!./demo.svg';
/* eslint-enable import/no-webpack-loader-syntax */

let opsMenu = [
  {
    label: 'Settings',
    icon: gearIcon,
    events: {
      click: () => {
        console.log('todo: settings dialog');
      }
    }
  },
  {
    label: 'New File',
    icon: newFileIcon,
    events: {
      click: () => {
        new NewFileDialog('.svg', [
          {
            label: 'Width',
            attrs: {
              type: 'number',
              id: 'width',
              min: 1,
              value: 512
            }
          },
          {
            label: 'Height',
            attrs: {
              type: 'number',
              id: 'height',
              min: 1,
              value: 512
            }
          }
        ],
        newFileSpecs => {
          let newFileText = '<svg width="' + newFileSpecs.width + '" height="' + newFileSpecs.height + '"></svg>';
          let newBlob = new window.Blob([newFileText], { type: 'image/svg+xml' });
          newBlob.name = newFileSpecs.name;
          mure.uploadSvg(newBlob);
        }).render();
      }
    }
  },
  {
    label: 'Upload',
    icon: uploadIcon,
    events: {
      click: () => {
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
  }
];

let mainView;
let docView;
let appMenu;
let fileOpsMenu;

function setup () {
  mainView = new MainView();
  docView = new DocView(demoSvgText, true);
  appMenu = new AppToolbar();
  fileOpsMenu = new Toolbar(opsMenu);
  renderAll();
}
function renderAll () {
  mainView.render(d3.select('#mainView'));
  docView.render(d3.select('#docView'));
  appMenu.render(d3.select('#appMenu'));
  fileOpsMenu.render(d3.select('#fileOpsMenu'));
}
window.onload = setup;
window.onresize = renderAll;
