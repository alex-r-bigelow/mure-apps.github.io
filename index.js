import * as d3 from 'd3';

import './style/layout.scss';

window.d3 = d3; // strap d3 to the window for debugging console access

function setup () {
  let demo = d3.select('#demo');
  let svg = d3.select(demo.node().contentDocument).select('svg');
  let nativeBounds = svg.node().getBoundingClientRect();
  demo.attrs({
    width: nativeBounds.width,
    height: nativeBounds.height
  });
  demo.node().focus();
}
window.onload = window.onresize = setup;
