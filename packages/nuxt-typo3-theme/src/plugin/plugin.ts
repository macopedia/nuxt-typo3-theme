import { VueConstructor } from 'vue'
import VueMq from 'vue-mq'
import SvgIcon from 'vue-svgicon'

import NuxtTypo3Ce from 'nuxt-typo3-ce'
import type { TYPO3ThemeOptions } from '../nuxt/module.types'
import useOverrideLocalComponents from '../composables/useOverrideLocalComponents'

import T3Frame from 'nuxt-typo3-theme/src/components/T3Frame'
import T3CeText from 'nuxt-typo3-theme/src/components/T3CeText'
import T3CeTextpic from 'nuxt-typo3-theme/src/components/T3CeTextpic'
import T3CeHeader from 'nuxt-typo3-theme/src/components/T3CeHeader'
import T3CeGallery from 'nuxt-typo3-theme/src/components/T3CeGallery'
import T3CeImage from 'nuxt-typo3-theme/src/components/T3CeImage'
import T3CeMenuPages from 'nuxt-typo3-theme/src/components/T3CeMenuPages'
import T3CeBullets from 'nuxt-typo3-theme/src/components/T3CeBullets'
import T3CeDiv from 'nuxt-typo3-theme/src/components/T3CeDiv'
import T3CeHtmlParser from 'nuxt-typo3-theme/src/components/T3CeHtmlParser'
import UiFrame from 'nuxt-typo3-theme/src/components/UiFrame'

import {
  UiContainer,
  UiRow,
  UiCol,
  UiOrder,
  UiOffset
} from 'nuxt-typo3-theme/src/components/UiGrid'

const globalComponents: Record<string, Vue.VueConstructor> = {
  UiFrame,
  T3Frame,
  T3CeText,
  T3CeDiv,
  T3CeImage,
  T3CeMenuPages,
  T3CeMenuSubpages: T3CeMenuPages,
  T3CeTextpic,
  T3CeBullets,
  T3CeHeader,
  T3CeGallery,
  T3CeHtmlParser,
  UiContainer,
  UiRow,
  UiCol,
  UiOrder,
  UiOffset
}

const defaults = {
  overrideLocalComponents: false
}

const UiPlugin = {
  install: (
    Vue: VueConstructor,
    options: TYPO3ThemeOptions = defaults
  ): void => {
    Vue.use(NuxtTypo3Ce)

    Object.keys(globalComponents).forEach(key => {
      Vue.component(key, globalComponents[key])
    })

    Vue.use(VueMq, {
      breakpoints: {
        default: 576,
        sm: 768,
        md: 1024,
        lg: 1200,
        xl: 1400,
        xxl: Infinity
      },
      defaultBreakpoint: 'default' // customize this for SSR
    })

    if (
      options.overrideLocalComponents &&
      !Vue.__nuxt_typo3_overrides_mixin__
    ) {
      Vue.__nuxt_typo3_overrides_mixin__ = true
      Vue.mixin({
        setup () {
          useOverrideLocalComponents(
            Array.isArray(options.overrideLocalComponents)
              ? options.overrideLocalComponents
              : undefined
          )
        }
      })
    }

    Vue.use(SvgIcon, {
      tagName: 'SvgIcon'
    })

    require('nuxt-typo3-theme/src/components/UiIcon/svg')
  }
}

export default UiPlugin
