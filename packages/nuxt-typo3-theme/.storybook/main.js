const path = require('path')
const webpackConfig = require('../webpack.config')

module.exports = {
  typescript: {
    check: true,
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls'
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: config.module.rules.concat(webpackConfig.module.rules)
      },
      plugins: config.plugins.concat(webpackConfig.plugins)
    }
  }
}
