import mure from '../mure-library/mure.js';

import View from '../lib/View';

import downloadIcon from '../img/download.svg';
import openFileIcon from '../img/openFileIcon.svg';
import trashCanIcon from '../img/trashCanIcon.svg';

import template from './template.html';
import './style.scss';

class MainView extends View {
  setup (d3el) {
    d3el.html(template);
    mure.on('fileListChange', () => { this.render(); });
    mure.on('fileChange', () => { this.render(); });
  }

  draw (d3el) {
    mure.getFileList().then(fileList => {
      this.renderUserFiles(d3el.select('#allFiles'), fileList);
    });
  }

  renderUserFiles (d3el, fileList) {
    let allFiles = d3el.selectAll('li')
      .data(fileList, d => d);
    allFiles.exit().remove();

    let allFilesEnter = allFiles.enter().append('li');
    allFilesEnter.append('span')
      .classed('fileTitle', true);

    allFiles = allFiles.merge(allFilesEnter);

    let openButtonsEnter = allFilesEnter.append('div')
      .classed('open', true)
      .classed('button', true);
    openButtonsEnter.append('a').append('img')
      .attr('src', openFileIcon);
    openButtonsEnter.append('label')
      .text('Open');
    let openButtons = allFiles.select('.open')
      .on('click', d => {
        mure.setCurrentFile(d);
      });
    mure.getCurrentFilename().then(currentFile => {
      openButtons.classed('selected', d => d === currentFile);
    });

    let downloadButtonsEnter = allFilesEnter.append('div')
      .classed('download', true)
      .classed('button', true);
    downloadButtonsEnter.append('a').append('img')
      .attr('src', downloadIcon);
    downloadButtonsEnter.append('label')
      .text('Download');
    allFiles.select('.download').on('click', d => {
      mure.downloadSvg(d);
    });

    let deleteButtonsEnter = allFilesEnter.append('div')
      .classed('delete', true)
      .classed('button', true);
    deleteButtonsEnter.append('a').append('img')
      .attr('src', trashCanIcon);
    deleteButtonsEnter.append('label')
      .text('Delete');

    allFiles.select('.fileTitle').text(d => d);
    allFiles.select('.delete').select('a').on('click', d => { mure.deleteSvg(d); });
  }
}

export default MainView;
