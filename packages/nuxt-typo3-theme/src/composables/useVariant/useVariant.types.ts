import { ComputedRef } from '@vue/composition-api'

export type Variants = 'base' | 'inverted'

export interface VariantClasses {
  [key: string]: string[]
}

export interface VariantObject {
  baseCss: ComputedRef<string[]>
  hoverCss: ComputedRef<string[]>
}
