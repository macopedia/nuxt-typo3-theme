/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed } from '@vue/composition-api'
import type { useUiState, UiState } from './useUiState.types'
import sharedRef from '../../utils/sharedRef'

export default function useUistate (): useUiState {
  const uiState = sharedRef(
    {
      headerRef: null
    } as UiState,
    'uiState'
  )

  function setUiOption (prop: string, value: any): void {
    if (Object.hasOwnProperty.call(uiState.value, prop)) {
      uiState.value[prop] = value
    }
  }

  function getUiOption (prop: string): any {
    return uiState.value[prop] || undefined
  }

  return {
    setUiOption,
    getUiOption,
    uiState: computed(() => uiState.value)
  }
}
