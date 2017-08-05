'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  // Entry point for static analyzer
  entry: {
    'webpack-bundle': './index.js'
  },

  output: {
    // Where to build results
    path: path.join(__dirname, 'docs'),

    // Filename to use in HTML
    filename: '[name].js'
  },
  devtool: 'cheap-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    }),
    new WebpackShellPlugin({
      onBuildStart: [
        'cd lib && ../node_modules/rollup/bin/rollup -c && ../node_modules/uglify-js/bin/uglifyjs d3.js -c -m -o d3.min.js'
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        query: {
          attrs: ['img:src', 'link:href']
        }
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|(?!template\b)\b\w+\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'url-loader'
      },
      {
        test: /template\.svg$/,
        loader: 'html-loader',
        query: {
          attrs: ['image:xlink:href', 'image:href']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|web_client)/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    alias: {
      'd3': path.resolve(__dirname, 'lib/d3.min.js')
    }
  }
};
