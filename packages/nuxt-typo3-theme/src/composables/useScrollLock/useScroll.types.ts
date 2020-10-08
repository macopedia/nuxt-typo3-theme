export interface useScrollLock {
  lockScroll: (elementRef: Element) => void
  unlockScroll: (elementRef?: Element, reserveScrollBarGap?: boolean) => void
  removeLocks: () => void
}
