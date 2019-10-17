const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

const {
  NODE_ENV = PRODUCTION
} = process.env;

const config = {
  entry: './src/index.ts',
  target: 'node',
  mode: NODE_ENV,
  watch: NODE_ENV === DEVELOPMENT,
  optimization: {
    minimize: NODE_ENV === PRODUCTION
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../../build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader']
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: `"${NODE_ENV}"`
    })
  ]
};

module.exports = config;
