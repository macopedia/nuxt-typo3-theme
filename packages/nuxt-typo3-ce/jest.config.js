module.exports = {
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  setupFiles: ['./jest.setup.js'],
  globals: {
    'vue-jest': {
      experimentalCSSCompile: true
    },
    'ts-jest': {
      babelConfig: true,
      tsconfig: '<rootDir>/tsconfig.test.json',
    }
  }
}
