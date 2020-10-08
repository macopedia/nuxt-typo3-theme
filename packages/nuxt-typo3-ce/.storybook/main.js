const path = require('path');
const webpackConfig = require('../webpack.config')

module.exports = {
  "typescript": {
    check: false,
    checkOptions: {},
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-docs',
      options: {
        vueDocgenOptions: {
          alias: {
            '@': path.resolve(__dirname, '../'),
          }
        }
      }
    },
    '@storybook/addon-controls',
    'storybook-addon-designs'
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: config.module.rules.concat(webpackConfig.module.rules) },
      plugins: config.plugins.concat(webpackConfig.plugins)
    };
  },
}
