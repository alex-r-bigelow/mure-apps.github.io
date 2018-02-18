/* globals d3 */
class SvgScrollbar {
  constructor (scrollGroup, { horizontalScrollbar, verticalScrollbar }) {
    this.scrollGroup = scrollGroup;
    this.setupObserver();

    this.horizontalScrollbar = horizontalScrollbar;
    this.verticalScrollbar = verticalScrollbar;
    this.clipBounds = this.deriveClipBounds();
    this.setupBars();
  }
  renderHandles () {
    if (this.horizontalHandle) {
      this.horizontalHandle
        .attr('x', this.horizontalScale(this.clipBounds.left - this.contentBounds.left))
        .attr('width', this.horizontalScale(this.clipBounds.width - this.contentBounds.left));
    }
    if (this.verticalHandle) {
      this.verticalHandle
        .attr('y', this.verticalScale(this.clipBounds.top - this.contentBounds.top))
        .attr('height', this.verticalScale(this.clipBounds.height - this.contentBounds.top));
    }
  }
  updateBounds () {
    this.contentBounds = this.scrollGroup.node()
      .getBoundingClientRect();
  }
  setupBars () {
    this.updateBounds();

    if (this.horizontalScrollbar) {
      this.left = this.horizontalScrollbar.select('[data-scrollbar="left"]');
      this.right = this.horizontalScrollbar.select('[data-scrollbar="right"]');
      this.horizontalHandle = this.horizontalScrollbar.select('[data-scrollbar="handle"]');

      let origin = this.deriveContainerOrigin(this.horizontalScrollbar);
      // get the right-most edge of the left button
      let leftBound = this.left.node()
        .getBoundingClientRect();
      leftBound = leftBound.right - origin.x;
      // get the left-most edge of the right button
      let rightBound = this.right.node()
        .getBoundingClientRect();
      rightBound = rightBound.left - origin.x;

      this.horizontalScale = d3.scaleLinear()
        .domain([0, this.contentBounds.width])
        .range([leftBound, rightBound]);
    }
    if (this.verticalScrollbar) {
      this.up = this.verticalScrollbar.select('[data-scrollbar="up"]');
      this.down = this.verticalScrollbar.select('[data-scrollbar="down"]');
      this.verticalHandle = this.verticalScrollbar.select('[data-scrollbar="handle"]');

      let origin = this.deriveContainerOrigin(this.verticalScrollbar);
      // get the bottom-most edge of the up button
      let topBound = this.up.node()
        .getBoundingClientRect();
      topBound = topBound.bottom - origin.y;
      // get the top-most edge of the down button
      let bottomBound = this.down.node()
        .getBoundingClientRect();
      bottomBound = bottomBound.top - origin.y;

      this.verticalScale = d3.scaleLinear()
        .domain([0, this.contentBounds.height])
        .range([topBound, bottomBound]);
    }
    this.renderHandles();
  }
  setupObserver () {
    let observer = new window.MutationObserver(() => {
      this.updateBounds();
      this.renderHandles();
    });
    observer.observe(this.scrollGroup.node(), {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  deriveContainerOrigin (d3el) {
    let temp = d3el.append('rect')
      .attr('fill', 'transparent')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1);
    let bounds = temp.node().getBoundingClientRect();
    temp.remove();
    return { x: bounds.x, y: bounds.y };
  }
  deriveClipBounds () {
    let clipUrl = this.scrollGroup.node()
      .parentNode.getAttribute('clip-path');
    if (!clipUrl) {
      throw new Error('The scrollGroup must be directly inside a group with a clip-path url() property');
    }
    clipUrl = /url\((.*)\)/.exec(clipUrl);
    if (!clipUrl || clipUrl.length < 2) {
      throw new Error('Encountered a problem parsing clip-path');
    }
    let clipPath = d3.select(clipUrl[1]).node();
    if (!clipPath) {
      throw new Error('Couldn\'t find clip-path');
    }
    return clipPath.getBoundingClientRect();
  }
}
export default SvgScrollbar;
