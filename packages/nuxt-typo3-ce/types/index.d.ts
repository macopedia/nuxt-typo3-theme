import Vue, { VueConstructor } from 'vue'
import { PluginObject } from 'vue/types'
import UiPlugin from '../index'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TYPO3CeInstance<T> = T extends new (...args: any[]) => infer R
  ? R
  : never

// Components
export type T3CeHeader = VueConstructor<Vue>
export type T3CeTable = VueConstructor<Vue>
export type T3CeBullets = VueConstructor<Vue>
export type T3CeDefault = VueConstructor<Vue>
export type T3CeDiv = VueConstructor<Vue>
export type T3CeGallery = VueConstructor<Vue>
export type T3CeHtml = VueConstructor<Vue>
export type T3CeHtmlParser = VueConstructor<Vue>
export type T3CeImage = VueConstructor<Vue>
export type T3CeRenderer = VueConstructor<Vue>
export type T3CeShortcut = VueConstructor<Vue>
export type T3CeText = VueConstructor<Vue>
export type T3CeTextpic = VueConstructor<Vue>

// Components prop
// Shared props interface
export { T3CeSharedProps } from '../src/composables/useSharedProps/sharedProps.types'
export {
  T3CeAppearanceInterface,
  T3CeAppearanceProps
} from '../src/composables/useAppearanceProps/appearanceProps.types'

export { File, FileList } from '../src/components/T3CeUploads/T3CeUploads.types'

export { UrlMethods } from '../src/composables/useUrlMethods/useUrlMethods.types'

// T3CeHeader
export {
  T3CeHeaderPosition,
  T3CeHeaderLink,
  T3CeHeaderTags
} from '../src/components/T3CeHeader/T3CeHeader.types'

// T3CeMenuPages
export {
  T3CeMenuPagesMenu,
  T3CeMenuPagesItem
} from '../src/components/T3CeMenuPages/T3CeMenuPages.types'

// T3CeGallery
export {
  FileProperties,
  T3CeGalleryFile,
  T3CeGalleryProp
} from '../src/components/T3CeGallery/T3CeGallery.types'

export type UiPlugin = PluginObject<UiPlugin>
export default UiPlugin
