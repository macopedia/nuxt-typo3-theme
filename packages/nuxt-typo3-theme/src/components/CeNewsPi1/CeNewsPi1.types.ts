import type { NewsElement } from '../UiNews/UiNewsElement/UiNewsElement.types'

export type Pagination = {
  current: number
  numberOfPages: number
}

export type NewsData = {
  contentElements?: Record<string, unknown>
  list: NewsElement[]
  pagination: Pagination
  settings: Record<string, string>
  detail?: Record<string, string>
}
