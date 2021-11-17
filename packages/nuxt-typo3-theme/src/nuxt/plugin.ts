import Vue from 'vue'
import ThemePlugin from 'nuxt-typo3-theme/src/plugin'
import T3Frame from 'nuxt-typo3-theme/src/components/T3Frame'
import Store from 'nuxt-typo3-theme/src/store/index'
import T3CeText from 'nuxt-typo3-theme/src/components/T3CeText'
import T3CeTextpic from 'nuxt-typo3-theme/src/components/T3CeTextpic'
import T3CeHeader from 'nuxt-typo3-theme/src/components/T3CeHeader'
import T3CeGallery from 'nuxt-typo3-theme/src/components/T3CeGallery'
import T3CeImage from 'nuxt-typo3-theme/src/components/T3CeImage'
import T3CeMenuPages from 'nuxt-typo3-theme/src/components/T3CeMenuPages'
import T3CeDiv from 'nuxt-typo3-theme/src/components/T3CeDiv'
import T3CeNewsPi1 from 'nuxt-typo3-theme/src/components/T3CeNewsPi1'
import T3CeUploads from 'nuxt-typo3-theme/src/components/T3CeUploads'
import { Context } from '@nuxt/types'

// temporary until we refactore all CE
// because we can't override CE from vue plugin level
const globalComponents: Record<string, typeof Vue> = {
  T3Frame,
  T3CeText,
  T3CeDiv,
  T3CeImage,
  T3CeMenuPages,
  T3CeMenuSubpages: T3CeMenuPages,
  T3CeTextpic,
  T3CeHeader,
  T3CeNewsPi1,
  T3CeGallery,
  T3CeUploads
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
