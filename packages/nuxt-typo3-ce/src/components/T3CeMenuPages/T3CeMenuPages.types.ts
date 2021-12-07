export interface T3CeMenuPagesItem {
  title: string
  link: string
  target: string
  active: number
  current: number
  spacer: number
  children?: T3CeMenuPagesItem[]
}

export type T3CeMenuPagesMenu = T3CeMenuPagesItem[]
