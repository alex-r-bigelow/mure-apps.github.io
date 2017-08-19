import * as d3 from 'd3';
import mure from 'mure';

import { View } from 'uki';

import downloadIcon from '../img/download.svg';
import openFileIcon from '../img/openFile.svg';
import trashCanIcon from '../img/trashCan.svg';

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
    allFiles = allFiles.merge(allFilesEnter);

    allFilesEnter.append('span')
      .classed('fileTitle', true);
    // We add the text label last so it can adjust to the available space

    let openButtonsEnter = allFilesEnter.append('div')
      .classed('open', true)
      .classed('button', true);
    openButtonsEnter.append('a').append('img')
      .attr('src', openFileIcon);
    openButtonsEnter.append('label')
      .text('Open');
    let openButtons = allFiles.select('.open')
      .on('click', d => {
        mure.setCurrentFile(mure.lastFile === d ? null : d);
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
    allFiles.select('.delete').select('a')
      .on('click', d => { mure.deleteSvg(d); });

    let self = this;
    allFiles.select('.fileTitle').each(function (d) {
      let buttonLeft = d3.select(this.parentNode)
        .select('.open.button').node().getBoundingClientRect().left;
      let parentLeft = this.parentNode.getBoundingClientRect().left;
      let maxLabelWidth = buttonLeft - parentLeft - 1.5 * self.emSize;
      let label = d;
      this.textContent = label;
      // truncate long file names
      while (this.clientWidth > maxLabelWidth) {
        label = label.substr(0, label.length - 10) + '...' + label.substr(label.length - 6, 6);
        this.textContent = label;
      }
    });
  }
}

export default MainView;
