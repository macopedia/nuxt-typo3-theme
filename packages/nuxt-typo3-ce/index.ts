import VueCompositionAPI from '@vue/composition-api'
import { VueConstructor } from 'vue'
import T3CeDefault from './src/components/T3CeDefault'
import T3CeShortcut from './src/components/T3CeShortcut'
import T3CeHeader from './src/components/T3CeHeader'
import T3CeText from './src/components/T3CeText'
import T3CeHtmlParser from './src/components/T3CeHtmlParser'
import T3CeTable from './src/components/T3CeTable'
import T3CeBullets from './src/components/T3CeBullets'
import T3CeDiv from './src/components/T3CeDiv'
import T3CeHtml from './src/components/T3CeHtml'
import T3CeImage from './src/components/T3CeImage'
import T3CeMenuPages from './src/components/T3CeMenuPages'

const globalComponents: Record<
  string,
  Vue.VueConstructor | Vue.FunctionalComponentOptions
> = {
  T3CeDefault,
  T3CeShortcut,
  T3CeHeader,
  T3CeText,
  T3CeHtmlParser,
  T3CeBullets,
  T3CeDiv,
  T3CeHtml,
  T3CeImage,
  T3CeMenuPages,
  T3CeTable,
  CeMenuSubpages: T3CeMenuPages,
  CeMenuRelatedPages: T3CeMenuPages,
  CeMenuRecentlyUpdated: T3CeMenuPages,
  CeMenuSectionPages: T3CeMenuPages,
  CeMenuCategorizedPages: T3CeMenuPages
}

const UiPlugin = {
  install: (Vue: VueConstructor): void => {
    // TO DO: check if composition API is installed before use plugin
    Vue.use(VueCompositionAPI)

    Object.keys(globalComponents).forEach((key: string) => {
      Vue.component(key, globalComponents[key] as VueConstructor)
    })
  }
}

export { globalComponents }

export default UiPlugin
