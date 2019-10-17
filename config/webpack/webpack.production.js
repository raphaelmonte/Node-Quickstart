const WebpackShellPlugin = require('webpack-shell-plugin');
const common = require('./webpack.common');

const config = {
  ...common,
  plugins: [
    ...common.plugins,
    new WebpackShellPlugin({
      onBuildEnd: ['node build/index.js']
    })
  ]
};

module.exports = config;
