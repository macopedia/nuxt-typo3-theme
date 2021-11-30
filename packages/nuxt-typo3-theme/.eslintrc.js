module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['macopedia/vue', 'plugin:vuejs-accessibility/recommended'],
  plugins: ['vuejs-accessibility'],
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
    ],
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        allowChildren: true
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
