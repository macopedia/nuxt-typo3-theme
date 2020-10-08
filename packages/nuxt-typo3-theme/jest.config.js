module.exports = {
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@vue/composition-api)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  globals: {
    'vue-jest': {
      experimentalCSSCompile: true
    },
    'ts-jest': {
      babelConfig: true,
      tsconfig: '<rootDir>/tsconfig.test.json',
    }
  },
  setupFilesAfterEnv: ['./jest.setup.js']
}
