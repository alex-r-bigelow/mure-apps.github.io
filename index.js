import mure from './mure-library/mure.js';
import * as d3 from 'd3';

window.mure = mure; // strap mure to the window so that loaded SVG files know that they're being edited
window.d3 = d3; // strap d3 to the window for debugging console access

import './style/layout.scss';
import './style/toolbars.scss';
import './style/scrollbars.scss';
import './lib/recolorImages.js';

mure.loadUserLibraries = true;
mure.runUserScripts = true;

function renderMenu (menuId, menuData) {
  let menu = d3.select(menuId);
  let menuItems = menu.select('ul').selectAll('li').data(menuData);
  menuItems.exit().remove();
  let menuItemsEnter = menuItems.enter().append('li');
  let menuItemLinksEnter = menuItemsEnter.append('a');
  menuItemLinksEnter.append('img');
  menuItemLinksEnter.append('label');

  menuItems = menuItemsEnter.merge(menuItems);

  menuItems.classed('button', true)
    .classed('selected', d => d.selected);
  let menuItemLinks = menuItems.select('a');

  menuItemLinks.select('img').attr('src', d => d.icon);
  menuItemLinks.select('label').text(d => d.label);

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

function setup () {
  // CSS doesn't let us resize the iframe...
  let bounds = d3.select('#previewSection').node().getBoundingClientRect();
  let demo = d3.select('#demo');
  let demoContent = demo.node().contentDocument.documentElement;
  if (demoContent) {
    bounds = demoContent.getBoundingClientRect();
  }
  demo.attrs({
    width: bounds.width,
    height: bounds.height
  });
  demo.node().focus();

  renderMenu('#appMenu', buildAppMenu());
}
window.onload = window.onresize = setup;
