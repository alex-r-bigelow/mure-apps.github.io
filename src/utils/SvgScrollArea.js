/* globals d3, SVG */
import throttle from './throttle.js';
class SvgScrollArea {
  constructor (scrollGroup, { horizontalScrollbar, verticalScrollbar, sensitivity, throttleDelay }) {
    this.scrollGroup = SVG.adopt(scrollGroup);
    this.sensitivity = sensitivity || 0.1;
    this.throttleDelay = throttleDelay || 100;

    this.finishScroll = throttle(() => { this._finishScroll(); }, this.throttleDelay);

    this.dx = 0;
    this.dy = 0;

    this.sDoc = this.scrollGroup.doc();

    if (horizontalScrollbar) {
      this.hBar = SVG.adopt(horizontalScrollbar);
      this.left = this.hBar.select('[data-scrollbar="left"]').first();
      this.right = this.hBar.select('[data-scrollbar="right"]').first();
      this.hHandle = this.hBar.select('[data-scrollbar="handle"]').first();
      this.hTrack = this.hBar.select('[data-scrollbar="track"]').first();
    }
    if (verticalScrollbar) {
      this.vBar = SVG.adopt(verticalScrollbar);
      this.up = this.vBar.select('[data-scrollbar="up"]').first();
      this.down = this.vBar.select('[data-scrollbar="down"]').first();
      this.vHandle = this.vBar.select('[data-scrollbar="handle"]').first();
      this.vTrack = this.vBar.select('[data-scrollbar="track"]').first();
    }

    this.scrollHorizontal();
    this.scrollVertical();
    this.initEventHandlers();
    this.setupChangeObserver();
  }
  initEventHandlers () {
    this.left.on('click',
      () => { this.scrollHorizontal({ delta: 1 }); });
    this.right.on('click',
      () => { this.scrollHorizontal({ delta: -1 }); });
    this.up.on('click',
      () => { this.scrollVertical({ delta: 1 }); });
    this.down.on('click',
      () => { this.scrollVertical({ delta: -1 }); });
  }
  _finishScroll () {
    let globalChanges = new SVG.Matrix()
      .translate(this.dx, this.dy);
    let localMatrix = new SVG.Matrix(this.scrollGroup);
    let newLocalMatrix = globalChanges
      .multiply(localMatrix);
    this.scrollGroup.transform(newLocalMatrix.extract());
    this.dx = this.dy = 0;
    this.renderHandles();
  }
  scrollHorizontal (options) {
    options = options || {};
    let clipBounds = this.getClipBounds();
    let scrollBounds = this.getGlobalBounds(this.scrollGroup);
    if (!this.hBar || scrollBounds.w < clipBounds.w) {
      // Ignore arguments; instead force this.scrollGroup
      // to align with the left side of the clip boundary
      this.canScrollHorizontal = false;
      this.dx = clipBounds.x - scrollBounds.x;
    } else {
      this.canScrollHorizontal = true;
      if (options.delta) {
        // Additively shift by some proportion of the clip area
        this.dx += options.delta * clipBounds.w * this.sensitivity;
      } else if (options.position) {
        // Center the clip area on the global screen position
        this.dx = options.position - scrollBounds.cx;
      }
      if (this.dx + scrollBounds.x > clipBounds.x) {
        // Overshot moving to the right; align left
        this.dx = clipBounds.x - scrollBounds.x;
      } else if (this.dx + scrollBounds.x2 < clipBounds.x2) {
        // Overshot moving to the left; align right
        this.dx = clipBounds.x2 - scrollBounds.x2;
      }
    }
    this.finishScroll();
  }
  scrollVertical (options) {
    options = options || {};
    let clipBounds = this.getClipBounds();
    let scrollBounds = this.getGlobalBounds(this.scrollGroup);
    if (!this.vBar || scrollBounds.h < clipBounds.h) {
      // Ignore arguments; instead force this.scrollGroup
      // to align with the left side of the clip boundary
      this.canScrollVertical = false;
      this.dy = clipBounds.y - scrollBounds.y;
    } else {
      this.canScrollVertical = true;
      if (options.delta) {
        // Additively shift by some proportion of the clip area
        this.dy += options.delta * clipBounds.h * this.sensitivity;
      } else if (options.position) {
        // Center the clip area on the global screen position
        this.dy = options.position - scrollBounds.cy;
      }
      if (this.dy + scrollBounds.y > clipBounds.y) {
        // Overshot moving to the right; align left
        this.dy = clipBounds.y - scrollBounds.y;
      } else if (this.dy + scrollBounds.y2 < clipBounds.y2) {
        // Overshot moving to the left; align right
        this.dy = clipBounds.y2 - scrollBounds.y2;
      }
    }
    this.finishScroll();
  }
  renderHandles () {
    let clipBounds = this.getClipBounds();
    let scrollBounds = this.getGlobalBounds(this.scrollGroup);
    if (this.hBar) {
      let trackBounds = this.hTrack.rbox(this.hBar).addOffset();
      let scale = d3.scaleLinear()
        .domain([scrollBounds.x, scrollBounds.x2])
        .range([trackBounds.x, trackBounds.x2]);
      let left = scale(clipBounds.x);
      let right = scale(clipBounds.x2);
      this.hHandle
        .attr('x', left)
        .attr('width', right - left);
    }
    if (this.vBar) {
      let trackBounds = this.vTrack.rbox(this.vBar).addOffset();
      let scale = d3.scaleLinear()
        .domain([scrollBounds.y, scrollBounds.y2])
        .range([trackBounds.y, trackBounds.y2]);
      let top = scale(clipBounds.y);
      let bottom = scale(clipBounds.y2);
      this.vHandle
        .attr('y', top)
        .attr('height', bottom - top);
    }
  }
  setupChangeObserver () {
    let observer = new window.MutationObserver(() => {
      this.scrollHorizontal();
      this.scrollVertical();
    });
    observer.observe(this.scrollGroup.node, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  getGlobalBounds (sEl) {
    return sEl.rbox(this.sDoc).addOffset();
  }
  getClipBounds () {
    return this.getGlobalBounds(this.scrollGroup.parent().reference('clip-path'));
  }
}
export default SvgScrollArea;
