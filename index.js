import * as d3 from 'd3';

import BoilerplateView from './BoilerplateView';

import './style/colors.scss';
import './style/layout.scss';
// note that we import this *after* our stylesheets; if we didn't, we'd need to
// import recolorImages from './lib/recolorImages'; and call recolorImages()
// after all the stylesheets were loaded
import './lib/recolorImages';

let myView;

function resize () {
  myView.render();
}

function setup () {
  // Example of a view
  myView = new BoilerplateView();
  myView.render(d3.select('#boilerplateViewContainer'));
}
window.onload = setup;
window.onresize = resize;
