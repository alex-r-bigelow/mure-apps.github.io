/* globals mure */

import * as d3 from 'd3';

import './style/layout.scss';
import './style/toolbars.scss';
import './lib/recolorImages.js';

window.d3 = d3; // strap d3 to the window for debugging console access

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
  let demo = d3.select('#demo');
  let svg = d3.select(demo.node().contentDocument).select('svg');
  let nativeBounds = svg.node().getBoundingClientRect();
  demo.attrs({
    width: nativeBounds.width,
    height: nativeBounds.height
  });
  demo.node().focus();

  renderMenu('#appMenu', buildAppMenu());
}
window.onload = window.onresize = setup;
