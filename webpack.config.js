const path = require('path');
const webpack = require('webpack');
const packageJSON = require('./package.json');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./config.js');

module.exports = {
  context: path.resolve('src'),

  devtool: 'source-map',
  debug: true,

  entry: {
    app: './index.js',
  },

  loader: {
    appSettings: {
      env: 'development' // string, default to 'development'
    }
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: './flavor.js',
    library: 'flavor-js',
    libraryTarget: 'umd',
  },

  plugins: [
    new CleanWebpackPlugin(['dist', 'build']),
    // new webpack.IgnorePlugin(/lodash/),
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
    new webpack.optimize.OccurrenceOrderPlugin,
    // Uglify debug
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: false,
    //   minimize: false,
    //   sourceMap: true,
    //   compress: false,
    //   output: {
    //     comments: true,
    //   },
    // }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        toplevel: false,
        screw_ie8: true,
      },
      minimize: true,
      sourceMap: true,
      compress: {
        negate_iife: true,
        sequences: true,  // join consecutive statemets with the “comma operator”
        properties: true,  // optimize property access: a["foo"] → a.foo
        drop_console: true,
        dead_code: true,  // discard unreachable code
        drop_debugger: true,  // discard “debugger” statements
        unsafe: true, // some unsafe optimizations (see below)
        conditionals: true,  // optimize if-s and conditional expressions
        comparisons: true,  // optimize comparisons
        evaluate: true,  // evaluate constant expressions
        booleans: true,  // optimize boolean expressions
        loops: true,  // optimize loops
        unused: true,  // drop unused variables/functions
        hoist_funs: true,  // hoist function declarations
        hoist_vars: true, // hoist variable declarations
        if_return: true,  // optimize if-s followed by return/continue
        join_vars: true,  // join var declarations
        cascade: true,  // try to cascade `right` into `left` in sequences
        side_effects: true,  // drop side-effect-free statements
        warnings: false,  // warn about potentially dangerous optimizations/code
        global_defs: {}     // global definitions
      },
      output: {
        comments: false
      },
    }),
  ],

  module: {
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
            'targets': { 'node': 4 }
          }]]
        }
      },
    ],
  },

  externals: packageJSON.peerDependencies ? Object.keys(packageJSON.peerDependencies) : [],

  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'bower_components'],
  },

  eslint: {
    configFile: '.eslintrc',
  },

};
