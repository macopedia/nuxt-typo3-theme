import Vue from 'vue'
import ThemePlugin from 'nuxt-typo3-theme/src/plugin'
import Store from 'nuxt-typo3-theme/src/store/index'
import { Context } from '@nuxt/types'

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
}
