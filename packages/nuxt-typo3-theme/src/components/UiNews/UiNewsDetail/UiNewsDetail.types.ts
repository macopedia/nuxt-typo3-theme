import type { NewsElement } from '../UiNewsElement/UiNewsElement.types'

export type Settings = {
  action: string
  templateLayout: string
}

export type NewsDetailElement = {
  contentElements: {
    [key: string]: unknown
  }[]
  detail: NewsElement
  settings: Settings
}
