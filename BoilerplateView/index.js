import View from '../lib/View';

import template from './template.svg';
import './style.scss';

class BoilerplateView extends View {
  setup (d3el) {
    d3el.html(template);
  }

  draw (d3el) {
    let containerBounds = d3el.node().getBoundingClientRect();
    let svg = d3el.select('svg');
    svg.attrs({
      width: containerBounds.width,
      height: containerBounds.height
    });
  }
}
export default BoilerplateView;
