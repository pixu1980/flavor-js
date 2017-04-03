const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve('src'),

  entry: {
    app: './index.js',
  },

  loader: {
    appSettings: {
      env: 'development' // string, default to 'development'
    }
  },

  output: {
    path: path.resolve('dist'),
    filename: './flavor.js',
  },

  plugins: [
    new CleanWebpackPlugin(['dist', 'build']),
    //new webpack.IgnorePlugin(/lodash/),
    new webpack.optimize.OccurrenceOrderPlugin,
    new webpack.optimize.UglifyJsPlugin,
  ],

  module: {
    noParse: /node_modules\/lodash\/lodash\.js/,
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules|bower_components/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel-loader',
        'query': {
          'presets': [['env', {
            'modules': false,
            'targets': {'node': 4}
          }]]
        }
      },
    ],
  },

  externals: /^(lodash)/i,

  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'bower_components'],
  },

  eslint: {
    configFile: '.eslintrc',
  },

};
