import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock'

import type { useScrollLock } from './useScroll.types'
export default function useScrollLock (): useScrollLock {
  let currentTarget: Element | null = null
  function lockScroll (elementRef: Element): void {
    currentTarget = elementRef
    disableBodyScroll(elementRef)
  }

  function unlockScroll (
    elementRef?: Element,
    reserveScrollBarGap = false
  ): void {
    const target = elementRef || currentTarget
    enableBodyScroll(target, {
      reserveScrollBarGap
    })
    if (target === currentTarget) {
      currentTarget = null
    }
  }

  function removeLocks (): void {
    clearAllBodyScrollLocks()
  }

  return { lockScroll, unlockScroll, removeLocks }
}
