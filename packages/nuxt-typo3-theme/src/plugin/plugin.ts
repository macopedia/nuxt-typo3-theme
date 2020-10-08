import { VueConstructor } from 'vue'
import VueMq from 'vue-mq'
import SvgIcon from 'vue-svgicon'

import NuxtTypo3Ce from 'nuxt-typo3-ce'
import type { TYPO3ThemeOptions } from '../nuxt/module.types'
import useOverrideLocalComponents from '../composables/useOverrideLocalComponents'

import CeFrame from 'nuxt-typo3-theme/src/components/CeFrame'
import CeText from 'nuxt-typo3-theme/src/components/CeText'
import CeTextpic from 'nuxt-typo3-theme/src/components/CeTextpic'
import CeHeader from 'nuxt-typo3-theme/src/components/CeHeader'
import CeGallery from 'nuxt-typo3-theme/src/components/CeGallery'
import CeImage from 'nuxt-typo3-theme/src/components/CeImage'
import CeMenuPages from 'nuxt-typo3-theme/src/components/CeMenuPages'
import CeBullets from 'nuxt-typo3-theme/src/components/CeBullets'
import CeDiv from 'nuxt-typo3-theme/src/components/CeDiv'
import CeHtmlParser from 'nuxt-typo3-theme/src/components/CeHtmlParser'
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
  CeFrame,
  CeText,
  CeDiv,
  CeImage,
  CeMenuPages,
  CeMenuSubpages: CeMenuPages,
  CeTextpic,
  CeBullets,
  CeHeader,
  CeGallery,
  CeHtmlParser,
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
