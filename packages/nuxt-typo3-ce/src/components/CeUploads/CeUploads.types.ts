import type { FileProperties } from 'nuxt-typo3-ce/types'

export interface File {
  properties: FileProperties
  publicUrl: string | null
}

export type FileList = File[]
