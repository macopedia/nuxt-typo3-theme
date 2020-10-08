import { computed, Ref } from '@vue/composition-api'
import type {
  Variants,
  VariantObject,
  VariantClasses
} from './useVariant.types'

const variantClasses: VariantClasses = {
  base: ['bg-primary', 'text-white'],
  inverted: ['bg-secondary', 'text-black']
}

export default function useVariant (variant: Ref): VariantObject {
  const variantName: Variants = variant.value
  const baseCss = computed((): string[] => variantClasses[variantName])

  const hoverCss = computed((): string[] =>
    variantClasses[variantName].map(css => `hover:${css}`)
  )

  return {
    baseCss,
    hoverCss
  }
}
