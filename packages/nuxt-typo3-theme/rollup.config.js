import fs from 'fs'
import path from 'path'
import vue from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import minimist from 'minimist'
import includePaths from 'rollup-plugin-includepaths'

// Get browserslist config and remove ie from es build targets
const esbrowserslist = fs
  .readFileSync('./.browserslistrc')
  .toString()
  .split('\n')
  .filter((entry) => entry && entry.substring(0, 2) !== 'ie')
const argv = minimist(process.argv.slice(2))
const projectRoot = path.resolve(__dirname)

const baseConfig = {
  input: 'src/entry.ts',
  plugins: {
    includePaths: {
      include: {},
      paths: ['src'],
      external: [],
      extensions: ['.js', '.ts', '.vue']
    },
    preVue: [
      alias({
        entries: [
          {
            find: '@',
            replacement: `${path.resolve(projectRoot, 'src')}`
          }
        ],
        customResolver: resolve({
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
        })
      })
    ],
    replace: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
    vue: {
      css: true,
      template: {
        isProduction: true
      }
    },
    postVue: [],
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      babelHelpers: 'bundled'
    }
  }
}

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  'vue',
  '@vue/composition-api',
  'defu',
  'nuxt-typo3-theme',
  'vue-svgicon'
]

const extensions = ['.js', '.ts']
const vuePlugins = [
  resolve({ extensions }),
  includePaths(baseConfig.plugins.includePaths),
  replace(baseConfig.plugins.replace),
  ...baseConfig.plugins.preVue,
  vue(baseConfig.plugins.vue),
  ...baseConfig.plugins.postVue,
  babel({
    ...baseConfig.plugins.babel,
    presets: [
      [
        '@babel/preset-env',
        {
          targets: esbrowserslist
        }
      ]
    ]
  }),
  commonjs()
]

// Customize configs for individual targets
const buildFormats = []
if (!argv.format || argv.format === 'es') {
  const ceConfig = {
    ...baseConfig,
    input: 'src/index.ts',
    external,
    output: {
      file: 'dist/nuxt-typo3-theme-ce.js',
      format: 'esm',
      exports: 'named'
    },
    plugins: vuePlugins
  }
  buildFormats.push(ceConfig)

  const pluginConfig = {
    ...baseConfig,
    input: 'src/nuxt/plugin.ts',
    external,
    output: {
      file: 'dist/nuxt-typo3-theme-plugin.js',
      format: 'esm',
      exports: 'named'
    },
    plugins: [
      replace({
        '<%= serialize(options) %>': '<%= serialize(options) %>'
      }),
      ...vuePlugins
    ]

  }
  buildFormats.push(pluginConfig)

  const nuxtConfig = {
    ...baseConfig,
    input: 'src/nuxt/index.ts',
    external,
    output: {
      file: 'dist/nuxt-typo3-theme.js',
      format: 'esm',
      exports: 'named'
    },
    plugins: [
      resolve({ extensions }),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        include: ['src/**/*.ts'],
        extensions,
        exclude: './node_modules/**'
      })
    ]
  }
  buildFormats.push(nuxtConfig)
}

// Export config
export default buildFormats
