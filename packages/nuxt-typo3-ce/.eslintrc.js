module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['macopedia/vue'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ]
  },
  ignorePatterns: ['*.config.js', '*.stories.ts'],
  overrides: [
    {
      files: [
        '**/**/*.spec.[jt]s?(x)',
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
