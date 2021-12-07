import {
  Breadcrumb,
  Breadcrumbs
} from '../components/UiBreadcrumbsList/UiBreadcrumbsList.types'
export interface Navigation {
  active: number
  current: number
  link: string
  spacer: number
  target: string
  title: string
  children?: Navigation[]
}
export interface SocialMenu {
  title: string
  link: string
  target: string
  active: number
  current: number
  spacer: number
}
export interface Contact {
  header: string
  bodytext: string
}
export interface FooterContactData {
  id: number
  pid: number
  type: string
  colPos: number
  categories: string
  appearance: Record<string, string>
  content: Contact
}
export interface i18n {
  languageId: number
  locale: string
  title: string
  navigationTitle: string
  twoLetterIsoCode: string
  hreflang: string
  direction: string
  flag: string
  link: string
  active: number
  current: number
  available: number
}
export interface Initial {
  i18n: i18n[]
  footerNavigation?: Navigation[]
  navigation: Navigation[]
  footerContactData: FooterContactData
  socialMenu: SocialMenu
}
export interface PageNavigation {
  navTitle: string
  noSearch: string
  slug: string
  target: string
}

export interface Page {
  content: {
    [key: string]: unknown
  }
  [key: string]: unknown
    navigation: PageNavigation
    breadcrumbs: Navigation[]
}

export interface Typo3 {
  domain: null
  initial: Initial
  layout: string
  locale: string
  locales: string[] | null
  page: Page
  additionalBreadcrumb: Breadcrumb
}

export interface RootState {
  typo3: Typo3
}

const state = {
  additionalBreadcrumb: null
}

const getters = {
  breadcrumbs: (state: Typo3): Breadcrumbs => {
    const stateBreadcrumbs = state.page?.breadcrumbs

    if (state.additionalBreadcrumb) {
      return [...stateBreadcrumbs, state.additionalBreadcrumb]
    }
    return stateBreadcrumbs || []
  },
  navigation: (state: Typo3): Navigation[] | undefined =>
    state.initial?.navigation[0].children,
  languages: (state: Typo3): i18n[] => (state as Typo3).initial?.i18n,
  footerNavigation: (state: Typo3): Navigation[] | undefined =>
    (state as Typo3).initial?.footerNavigation,
  socialMenu: (state: Typo3): SocialMenu =>
    (state as Typo3).initial?.socialMenu,
  footerContactData: (state: Typo3): Contact =>
    (state as Typo3).initial?.footerContactData?.content
}

const mutations = {
  SET_BREADCRUMB: (state: Typo3, payload: Breadcrumb): void => {
    state.additionalBreadcrumb = payload
  }
}

export default {
  getters,
  state,
  mutations
}
