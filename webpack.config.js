// Webpack uses this to work with directories
const path = require('path');

// This is the main configuration object.
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: './src/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  // development (minifying and other things) / production
  mode: 'development'
};