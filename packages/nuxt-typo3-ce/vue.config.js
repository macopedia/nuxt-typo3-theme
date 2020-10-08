/* eslint-disable @typescript-eslint/no-var-requires */
const webpackConfig = require('./webpack.config')
module.exports = {
  chainWebpack: config => {
    // because we override it by shared wepback config
    config.module.rules.delete('scss')
    config.module.rules.delete('css')
  },
  configureWebpack: config => {
    return {
      plugins: webpackConfig.plugins,
      module: {
        rules: webpackConfig.module.rules
      }
    }
  }
}
