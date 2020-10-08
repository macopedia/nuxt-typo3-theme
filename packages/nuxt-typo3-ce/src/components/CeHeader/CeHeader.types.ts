import { ComputedRef } from '@vue/composition-api'

export type CeHeaderPosition = '' | 'left' | 'center' | 'right'

export interface CeHeaderLink {
  type: string
  url: string
  target: string
  aTagParams: string
  link: string
}

export interface CeHeaderTags {
  headerTag: ComputedRef<string>
  subheaderTag: ComputedRef<string>
  headerCss: ComputedRef<string>
}
