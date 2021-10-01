import Vue, { VueConstructor } from 'vue'
import { PluginObject } from 'vue/types'
import UiPlugin from '../index'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TYPO3CeInstance<T> = T extends new (...args: any[]) => infer R
  ? R
  : never

// Components
export type CeHeader = VueConstructor<Vue>
export type CeTable = VueConstructor<Vue>
export type CeBullets = VueConstructor<Vue>
export type CeDefault = VueConstructor<Vue>
export type CeDiv = VueConstructor<Vue>
export type CeDynamic = VueConstructor<Vue>
export type CeFrame = VueConstructor<Vue>
export type CeGallery = VueConstructor<Vue>
export type CeHtml = VueConstructor<Vue>
export type CeHtmlParser = VueConstructor<Vue>
export type CeImage = VueConstructor<Vue>
export type CeLink = VueConstructor<Vue>
export type CeMenuPages = VueConstructor<Vue>
export type CeRenderer = VueConstructor<Vue>
export type CeShortcut = VueConstructor<Vue>
export type CeText = VueConstructor<Vue>
export type CeTextpic = VueConstructor<Vue>

// Components prop
// Shared props interface
export { CeSharedProps } from '../src/composables/useSharedProps/sharedProps.types'
export {
  CeAppearanceInterface,
  CeAppearanceProps
} from '../src/composables/useAppearanceProps/appearanceProps.types'

export { File, FileList } from '../src/components/CeUploads/CeUploads.types'

export { UrlMethods } from '../src/composables/useUrlMethods/useUrlMethods.types'

// CeDynamic
export {
  CeDynamicInterface,
  CeDynamicData
} from '../src/components/CeDynamic/CeDynamic.types'

// CeRenderer
export { CeRendererContentItem } from '../src/components/CeRenderer/CeRenderer.types'

// CeHeader
export {
  CeHeaderPosition,
  CeHeaderLink,
  CeHeaderTags
} from '../src/components/CeHeader/CeHeader.types'

// CeMenuPages
export {
  CeMenuPagesMenu,
  CeMenuPagesItem
} from '../src/components/CeMenuPages/CeMenuPages.types'

// CeGallery
export {
  FileProperties,
  CeGalleryFile,
  CeGalleryProp
} from '../src/components/CeGallery/CeGallery.types'

export type UiPlugin = PluginObject<UiPlugin>
export default UiPlugin
