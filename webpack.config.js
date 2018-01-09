const path = require('path');
const nodeExternals = require('webpack-node-externals');

/**
 * Add node_modules here that should be included in the bundle
 * Since Flex will install the NPM modules, all Node Modules are excluded from
 * the bundle by default.
 */
const modulesToBundle = [];

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node',
  externals: [nodeExternals({
    whitelist: modulesToBundle
  })]
};