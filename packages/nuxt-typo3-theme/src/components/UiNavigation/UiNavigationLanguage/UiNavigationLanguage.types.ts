import type { UiNavigationLink } from '../UiNavigation.types'

export interface UiNavigationLanguageLink extends UiNavigationLink {
  languageId: number
  locale: string
  navigationTitle: string
  twoLetterIsoCode: string
  hreflang: string
  direction: string
  flag: string
  available: number
  children: UiNavigationLanguageLink[]
}

export type UiNavigationLanguageLinks = UiNavigationLanguageLink[]
