const devPresets = ['@vue/cli-plugin-babel/preset']
const buildPresets = ['@babel/preset-typescript']
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset', "@babel/preset-typescript"],
  plugins: ['@babel/plugin-proposal-optional-chaining'],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ]
      ]
    }
  }
}
