import VueCompositionAPI from '@vue/composition-api'
import Vue, { VueConstructor } from 'vue'
import CeFrame from './src/components/CeFrame'
import CeRenderer from './src/components/CeRenderer'
import CeDebug from './src/components/CeDebug'
import CeDynamic from './src/components/CeDynamic'
import CeDefault from './src/components/CeDefault'
import CeShortcut from './src/components/CeShortcut'
import CeHeader from './src/components/CeHeader'
import CeText from './src/components/CeText'
import CeHtmlParser from './src/components/CeHtmlParser'
import CeLink from './src/components/CeLink'
import CeTable from './src/components/CeTable'
import CeBullets from './src/components/CeBullets'
import CeDiv from './src/components/CeDiv'
import CeHtml from './src/components/CeHtml'
import CeImage from './src/components/CeImage'
import CeMenuPages from './src/components/CeMenuPages'

const globalComponents: Record<
  string,
  Vue.VueConstructor | Vue.FunctionalComponentOptions
> = {
  CeFrame,
  CeRenderer,
  CeDebug,
  CeDynamic,
  CeDefault,
  CeShortcut,
  CeHeader,
  CeText,
  CeHtmlParser,
  CeLink,
  CeBullets,
  CeDiv,
  CeHtml,
  CeImage,
  CeMenuPages,
  CeTable,
  CeMenuSubpages: CeMenuPages,
  CeMenuRelatedPages: CeMenuPages,
  CeMenuRecentlyUpdated: CeMenuPages,
  CeMenuSectionPages: CeMenuPages,
  CeMenuCategorizedPages: CeMenuPages
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
