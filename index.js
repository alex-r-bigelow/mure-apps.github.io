import mure from './mure-library/mure.js';
import * as d3 from 'd3';

window.d3 = d3; // strap d3 to the window for debugging console access

import './style/layout.scss';
import './style/toolbars.scss';
import './style/scrollbars.scss';
import './lib/recolorImages.js';

import trashCanIcon from './img/trashCanIcon.svg';

mure.loadUserLibraries = true;
mure.runUserScripts = true;

function renderMenu (menuId, menuData) {
  let menu = d3.select(menuId);
  let menuItems = menu.select('ul').selectAll('li').data(menuData);
  menuItems.exit().remove();
  let menuItemsEnter = menuItems.enter().append('li');
  let menuItemLinksEnter = menuItemsEnter.append('a');
  menuItemLinksEnter.append('img');
  menuItemsEnter.append('label');

  menuItems = menuItemsEnter.merge(menuItems);

  menuItems.classed('button', true)
    .classed('selected', d => d.selected);
  let menuItemLinks = menuItems.select('a');

  menuItemLinks.select('img').attr('src', d => d.icon);
  menuItems.select('label').text(d => d.label);

  menuItems.on('click', function (d) {
    d.onclick.call(this, d);
  });
}

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

let fileOpsMenu = [
  {
    label: 'Upload',
    icon: require('./img/upload.svg'),
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

function renderUserFiles (fileList) {
  let allFiles = d3.select('#allFiles').selectAll('li')
    .data(fileList, d => d);
  allFiles.exit().remove();

  let allFilesEnter = allFiles.enter().append('li');
  allFilesEnter.append('span')
    .classed('fileTitle', true);
  let deleteButtonsEnter = allFilesEnter.append('div')
    .classed('delete', true)
    .classed('button', true);
  deleteButtonsEnter.append('a').append('img')
    .attr('src', trashCanIcon);
  deleteButtonsEnter.append('label')
    .text('Delete');

  allFiles = allFiles.merge(allFilesEnter);

  allFiles.select('.fileTitle').text(d => d);
  allFiles.select('.delete').select('a').on('click', d => { mure.deleteSvg(d); });
}

function setup () {
  // CSS doesn't let us resize the iframe...
  let previewBounds = d3.select('#previewSection').node().getBoundingClientRect();
  let demo = d3.select('#demo');
  let demoContent = demo.node().contentDocument.documentElement;
  let bounds = previewBounds;
  if (demoContent) {
    bounds = demoContent.getBoundingClientRect();
  }
  demo.attrs({
    width: bounds.width,
    height: bounds.height
  });
  // While we're at it, might as well do some centering that CSS can't handle:
  let leftRightMargin = bounds.width < previewBounds.width ? 'auto' : null;
  let topBottomMargin = bounds.height < previewBounds.height ? 'auto' : null;
  demo.styles({
    'margin-left': leftRightMargin,
    'margin-right': leftRightMargin,
    'margin-top': topBottomMargin,
    'margin-bottom': topBottomMargin
  });
  demo.node().focus();

  renderMenu('#appMenu', buildAppMenu());
  renderMenu('#fileOpsMenu', fileOpsMenu);
  mure.getFileList().then(renderUserFiles);
  mure.on('fileListChange', renderUserFiles);
}
window.onload = window.onresize = setup;
