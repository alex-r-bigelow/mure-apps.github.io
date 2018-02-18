/* globals d3, mure */
import SimpleSvgApp from './utils/SimpleSvgApp.js';
import SvgScrollArea from './utils/SvgScrollArea.js';
window.app = new SimpleSvgApp(
  [
    'resolutions/1920x1080.svg'
  ],
  {
    onresize: () => {
      console.log('resized');
    },
    onreload: () => {
      console.log('reloaded');
      window.scrollbar = new SvgScrollArea(d3.select('#scrollMe').node(),
        {
          verticalScrollbar: d3.select('#vertical').node(),
          horizontalScrollbar: d3.select('#horizontal').node()
        });
    },
    attrOverrideSpec: [
      {
        targets: [
          '#horizontal [data-scrollbar="handle"]',
          {
            mouse: '#horizontal [data-scrollbar="left"]',
            effect: 'rect, path'
          },
          {
            mouse: '#horizontal [data-scrollbar="right"]',
            effect: 'rect, path'
          }
        ],
        disabled: {
          templates: { '#scrollDisableTemplate': [ 'style' ] },
          enableWhen: () => window.scrollbar.canScrollHorizontal
        },
        hover: {
          templates: { '#scrollHoverTemplate': [ 'style' ] }
        },
        active: {
          templates: { '#scrollActiveTemplate': [ 'style' ] }
        }
      },
      {
        targets: [
          '#vertical [data-scrollbar="handle"]',
          {
            mouse: '#vertical [data-scrollbar="up"]',
            effect: 'rect, path'
          },
          {
            mouse: '#vertical [data-scrollbar="down"]',
            effect: 'rect, path'
          }
        ],
        disabled: {
          templates: { '#scrollDisableTemplate': [ 'style' ] },
          enableWhen: () => window.scrollbar.canScrollVertical
        },
        hover: {
          templates: { '#scrollHoverTemplate': [ 'style' ] }
        },
        active: {
          templates: { '#scrollActiveTemplate': [ 'style' ] }
        }
      }
    ]
  });
