import type { CeRendererContentItem } from '../CeRenderer/CeRenderer.types'

export type CeDynamicData = CeRendererContentItem

export interface CeDynamicInterface {
  data: CeRendererContentItem
  type: string
  index: number
}
