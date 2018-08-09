const webpack = require('webpack');

module.exports = {
mode: 'development', 
context : __dirname, 

  entry: __dirname + '/src/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
};