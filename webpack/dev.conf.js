/**
 * dev.conf.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 18.08.2016
 */

const config = require('./base.conf');
const path = require('path');

// Webpack Development Settings
module.exports = Object.assign(config, {
  mode: 'development',
  entry: './dev/App.jsx',
  output:{
    path: path.resolve(__dirname, 'dev'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      ...config.module.rules,
      {
      test: /\.less$/,
      use: [
        // compiles Less to CSS
        "style-loader",
        "css-loader",
        "less-loader",
      ],
    }],
  },
});
