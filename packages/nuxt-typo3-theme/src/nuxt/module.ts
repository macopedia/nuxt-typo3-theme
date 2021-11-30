import { Module } from '@nuxt/types'
import { resolve } from 'path'
import defu from 'defu'
import type { TYPO3ThemeOptions } from './module.types'

const defaults: TYPO3ThemeOptions = {
  sources: true,
  css: true,
  googleFonts: true,
  layouts: true,
  overrideLocalComponents: false
}

const NuxtTypo3Theme: Module = async function (options: TYPO3ThemeOptions) {
  options = defu(options, defaults)
  options = defu(this.options.typo3theme, options)
  const modulesList: string[] = [
    ...this.nuxt.options.modules,
    ...this.nuxt.options.buildModules
  ]

  // @todo uncomment it when we move all components to nuxt-typo3-ce
  // this.nuxt.options.typo3.registerComponents = false
  if (options.css) {
    this.nuxt.options.css.push(resolve(__dirname, '../styles/core.scss'))
  }

  if (options.googleFonts && !modulesList.includes('@nuxtjs/google-fonts')) {
    this.addModule([
      '@nuxtjs/google-fonts',
      this.nuxt.options.googleFonts || {
        families: {
          'Open Sans': {
            wght: [300, 400, 500, 700]
          }
        }
      }
    ])
  }

  if (options.sources) {
    this.addPlugin({
      src: resolve(__dirname, 'plugin.ts'),
      fileName: 'nuxt-typo3-theme-plugin.ts',
      options
    })
  } else {
    this.addPlugin({
      src: resolve(__dirname, 'nuxt-typo3-theme-plugin.js'),
      fileName: 'nuxt-typo3-theme-plugin.js',
      options
    })
  }

  if (options.layouts) {
    if (
      typeof options.layouts === 'boolean' ||
      (Array.isArray(options.layouts) && options.layouts.includes('default'))
    ) {
      this.addLayout(resolve(__dirname, '../layouts/default.vue'), 'default')
    }
    if (
      typeof options.layouts === 'boolean' ||
      (Array.isArray(options.layouts) && options.layouts.includes('error'))
    ) {
      this.addLayout(resolve(__dirname, '../layouts/error.vue'), 'error')
    }
  }

  this.nuxt.hook('build:before', async () => {
    if (typeof this.options.build.transpile !== 'undefined') {
      this.options.build.transpile.push('nuxt-typo3-ce')
      this.options.build.transpile.push('nuxt-typo3-theme')
    }
  })
}

export default NuxtTypo3Theme
module.exports = NuxtTypo3Theme
module.exports.meta = require('../../package.json')
