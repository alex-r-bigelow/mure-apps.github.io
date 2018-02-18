/* globals d3, mure */
import SimpleSvgApp from './utils/SimpleSvgApp.js';
import SvgScrollbar from './utils/SvgScrollbar.js';
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
      window.scrollbar = new SvgScrollbar(d3.select('#scrollMe'),
        {
          verticalScrollbar: d3.select('#vertical'),
          horizontalScrollbar: d3.select('#horizontal')
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
          },
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
        hover: {
          '#scrollHoverTemplate': [
            'style'
          ]
        },
        active: {
          '#scrollActiveTemplate': [
            'style'
          ]
        }
      }
    ]
  });
