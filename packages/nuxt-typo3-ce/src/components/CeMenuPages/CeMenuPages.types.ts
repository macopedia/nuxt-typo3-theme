export interface CeMenuPagesItem {
  title: string
  link: string
  target: string
  active: number
  current: number
  spacer: number
  children?: CeMenuPagesItem[]
}

export type CeMenuPagesMenu = CeMenuPagesItem[]
