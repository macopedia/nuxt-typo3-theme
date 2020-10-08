import type { CeAppearanceInterface } from '../../composables/useAppearanceProps/appearanceProps.types'

export interface CeRendererContentItem {
  id: number
  pid: number
  type: string
  colPos: number
  appearance: CeAppearanceInterface
  categories: string
  content: Record<string, unknown>
}
