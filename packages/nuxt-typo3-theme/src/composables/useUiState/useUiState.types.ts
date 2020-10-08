import { ComputedRef } from '@vue/composition-api'
export interface UiState {
  headerRef: HTMLElement | null
}
export interface useUiState {
  uiState: ComputedRef<UiState>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUiOption: (prop: string, value: any) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getUiOption: (prop: string) => any
}
