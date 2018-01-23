const path = require('path');
const _ = require('lodash');

const webpack = require('webpack'); //to access built-in plugins
const CleanPlugin = require('clean-webpack-plugin');
const LodashPlugin = require('lodash-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VerPlugin = require('webpack-ver-plugin');

// const CompressionPlugin = require('compression-webpack-plugin');
const filename = 'flavor';

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'flavor-js',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory'
      }
    ]
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_' // indicates global variable
    },
  },
  plugins: [
    new VerPlugin({
      packageFile: path.join(__dirname, 'package.json'),
      outputFile: path.join('./src/', 'release.json')
    }),
    new LodashPlugin()
  ]
};

// let configTargets = ['var', 'this', 'window', 'global', 'commonjs', 'commonjs2', 'amd', 'umd'].map((target) => {
let configTargets = ['umd'].map((target) => {
  return _.merge({}, config, {
    devtool: 'sourcemap',
    output: {
      // filename: filename + '.' + target + '.js',
      filename: filename + '.js',
      libraryTarget: target,
    },
    plugins: [
      new CleanPlugin(['dist']),
    ]
  });
});

let configTargetsProd = ['umd'].map((target) => {
  return _.merge({}, config, {
    output: {
      // filename: filename + '.' + target + '.min.js',
      filename: filename + '.min.js',
      libraryTarget: target,
    },
    plugins: [
      new UglifyJsPlugin(),
    ],
  });
});

module.exports = _.concat(configTargets, configTargetsProd);
