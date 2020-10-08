import Vue from 'vue'
import ThemePlugin from 'nuxt-typo3-theme/src/plugin'
import CeFrame from 'nuxt-typo3-theme/src/components/CeFrame'
import Store from 'nuxt-typo3-theme/src/store/index'
import CeText from 'nuxt-typo3-theme/src/components/CeText'
import CeTextpic from 'nuxt-typo3-theme/src/components/CeTextpic'
import CeHeader from 'nuxt-typo3-theme/src/components/CeHeader'
import CeGallery from 'nuxt-typo3-theme/src/components/CeGallery'
import CeImage from 'nuxt-typo3-theme/src/components/CeImage'
import CeMenuPages from 'nuxt-typo3-theme/src/components/CeMenuPages'
import CeDiv from 'nuxt-typo3-theme/src/components/CeDiv'
import CeNewsPi1 from 'nuxt-typo3-theme/src/components/CeNewsPi1'
import CeUploads from 'nuxt-typo3-theme/src/components/CeUploads'
import { Context } from '@nuxt/types'

// temporary until we refactore all CE
// because we can't override CE from vue plugin level
const globalComponents: Record<string, typeof Vue> = {
  CeFrame,
  CeText,
  CeDiv,
  CeImage,
  CeMenuPages,
  CeMenuSubpages: CeMenuPages,
  CeTextpic,
  CeHeader,
  CeNewsPi1,
  CeGallery,
  CeUploads
}

export default (nuxtContext: Context): void => {
  const options = JSON.parse('<%= serialize(options) %>')

  nuxtContext.store.registerModule(
    'typo3',
    {
      getters: Store.getters,
      mutations: Store.mutations
    },
    { preserveState: true }
  )

  Vue.use(ThemePlugin, options)
  Object.keys(globalComponents).forEach(key => {
    Vue.component(key, globalComponents[key])
  })
}
