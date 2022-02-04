import { ComputedRef } from '@vue/composition-api'

export type T3CeHeaderPosition = '' | 'left' | 'center' | 'right'

export interface T3CeHeaderLink {
  type: string
  url: string
  target: string
  href: string
  aTagParams: string
  link: string
}

export interface T3CeHeaderTags {
  headerTag: ComputedRef<string>
  subheaderTag: ComputedRef<string>
  headerCss: ComputedRef<string>
}
