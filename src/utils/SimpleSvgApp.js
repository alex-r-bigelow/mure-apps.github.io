/* globals d3 */
import debounce from './debounce.js';
class SimpleSvgApp {
  constructor (pathList, { onresize, onreload, attrOverrideSpec }) {
    this.pathList = pathList;
    this.onresize = onresize;
    this.onreload = onreload;
    this.attrOverrideSpec = attrOverrideSpec;
    this.dimensionList = pathList.map(p => {
      let matches = /(\d+)x(\d+)/g.exec(p);
      if (!matches || matches.length <= 2) {
        throw new Error('Target dimensions must be in the file name');
      }
      return {
        width: parseInt(matches[1]),
        height: parseInt(matches[2])
      };
    });
    this.loadedSvgs = {};
    this.currentIndex = null;
    this.pickSize = debounce(() => { this._pickSize(); }, 200);
    window.onresize = () => { this.pickSize(); };
    this._pickSize();
  }
  _pickSize () {
    let w = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    let area = 0;
    let dimIndex = null;
    let enableScrolling = false;
    let position = { left: 0, top: 0 };
    // First try to find the biggest one that fits
    this.dimensionList.forEach((d, i) => {
      if (d.width <= w.width &&
          d.height <= w.height &&
          d.width * d.height > area) {
        area = d.width * d.height;
        position.left = (w.width - d.width) / 2;
        position.top = (w.height - d.height) / 2;
        dimIndex = i;
      }
    });
    if (dimIndex === null) {
      // If nothing fits, use the smallest one
      enableScrolling = true;
      area = Infinity;
      this.dimensionList.forEach((d, i) => {
        if (d.width * d.height < area) {
          area = d.width * d.height;
          dimIndex = i;
        }
      });
    }
    if (dimIndex === this.currentIndex) {
      // No need to re-load the same resolution; just adjust
      // the SVG position
      this.centerSvg(enableScrolling, position);
      if (this.onresize) {
        this.onresize();
      }
    } else {
      // Load the SVG
      this.currentIndex = dimIndex;
      (async () => {
        if (!this.loadedSvgs[dimIndex]) {
          this.loadedSvgs[dimIndex] = await d3.text(this.pathList[dimIndex]);
        }
        d3.select('body')
          .html(this.loadedSvgs[dimIndex]);
        this.centerSvg(enableScrolling, position);
        // attach attribute copy listeners to the new DOM
        if (this.attrOverrideSpec) {
          this.attachAttrOverrideListeners();
        }
        if (this.onreload) {
          this.onreload();
        }
      })();
    }
  }
  centerSvg (enableScrolling, position) {
    d3.select('body')
      .style('overflow', enableScrolling ? 'auto' : 'hidden')
      .select('svg')
      .style('position', 'relative')
      .style('left', position.left)
      .style('top', position.top);
  }
  attachAttrOverrideListeners () {
    let deriveAttrs = state => {
      let attrs = {};
      Object.keys(state.templates).forEach(sourceSelector => {
        let source = d3.select(sourceSelector);
        state.templates[sourceSelector].forEach(attr => {
          attrs[attr] = source.attr(attr);
        });
      });
      return attrs;
    };

    let applyAttrs = (element, attrs) => {
      Object.keys(attrs).forEach(attr => {
        element.attr(attr, attrs[attr]);
      });
    };

    this.attrOverrideSpec.forEach(spec => {
      let hoverAttrs = spec.hover && deriveAttrs(spec.hover);
      let activeAttrs = spec.active && deriveAttrs(spec.active);
      let allAttrs = [...new Set([
        ...Object.keys(hoverAttrs),
        ...Object.keys(activeAttrs)
      ])];

      spec.targets.forEach(targetSpec => {
        let interactionSelector = targetSpec.mouse || targetSpec;
        let effectSelector = targetSpec.effect;
        d3.selectAll(interactionSelector).each(function () {
          let interactionTarget = d3.select(this);
          let effectTargets = effectSelector
            ? interactionTarget.selectAll(effectSelector) : interactionTarget;
          let initialAttrs = {};
          allAttrs.forEach(attr => {
            initialAttrs[attr] = effectTargets.attr(attr);
          });
          let hovering = false;
          let dragging = false;
          if (hoverAttrs) {
            interactionTarget.on('mouseenter' + SimpleSvgApp.EVENT_NAMESPACE, () => {
              if (!dragging) { applyAttrs(effectTargets, hoverAttrs); }
              hovering = true;
            });
            interactionTarget.on('mouseleave' + SimpleSvgApp.EVENT_NAMESPACE, () => {
              if (!dragging) { applyAttrs(effectTargets, initialAttrs); }
              hovering = false;
            });
          }
          if (activeAttrs) {
            interactionTarget.on('mousedown' + SimpleSvgApp.EVENT_NAMESPACE, () => {
              dragging = true;
              applyAttrs(effectTargets, activeAttrs);
              let view = d3.select(d3.event.view);
              view.on('mouseup' + SimpleSvgApp.EVENT_NAMESPACE, () => {
                dragging = false;
                if (hovering) {
                  applyAttrs(effectTargets, hoverAttrs);
                } else {
                  applyAttrs(effectTargets, initialAttrs);
                }
                view.on('mouseup' + SimpleSvgApp.EVENT_NAMESPACE, null);
              });
            });
          }
        });
      });
    });
  }
}
// extra characters so we don't hog regular event binding
SimpleSvgApp.EVENT_NAMESPACE = '.SimpleSvgApp';
export default SimpleSvgApp;
