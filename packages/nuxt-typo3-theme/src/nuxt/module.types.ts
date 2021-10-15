interface TYPO3ThemeOptions {
  /** use typescript sources */
  sources?: boolean
  /** import  css */
  css?: boolean
  /** use google fonts module */
  googleFonts?: boolean
  /** use theme layouts eg. default.vue */
  layouts?: boolean | string[]
  /** use global components to override locals in specific scope */
  overrideLocalComponents?: boolean | string[]
}

export { TYPO3ThemeOptions }
