module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  rules: {
    'prettierx/options': ['error', { semi: false }]
  },
  extends: ['macopedia/vue']
  // add your custom rules here
}
