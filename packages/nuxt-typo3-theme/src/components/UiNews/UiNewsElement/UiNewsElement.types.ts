export type ImageData = {
  dimensions: Record<string, number> | null
  publicUrl: string | null
}

export type Images = {
  defaultImage: ImageData
  detailViewImage: ImageData
  listViewFeaturedImage: ImageData
  listViewImage: ImageData
  listViewVerticalImage: ImageData
}

export type MediaElementProperties = {
  alternative: string | null
  creationTime: string
  description: string | null
  id: number
  link: string
  mimetype: string
  modificationTime: string
  name: string
  showInPreview: number
  title: string | null
  type: number
}

export type MediaElement = {
  images: Images
  properties: MediaElementProperties
  type: string
}

export type NewsElement = {
  archive: string | null
  author: Record<string, string>
  categories: string[]
  crdate: string
  datetime: string
  falRelaredFiles?: string[]
  isTopNews: boolean
  media: MediaElement[]
  metaData: Record<string, string>
  pathSegment: string
  slug?: string
  tags: string[]
  teaser?: string
  title?: string
  tstamp: string
  uid: number
  bodytext?: string
  canonical?: string
}
