const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
       test: /\.jsx?$/,
       loader: "babel-loader",
     },
    ]
  },
  plugins: [
    new HtmlWebpack({ template: 'src/index.html'}),
  ]
};
