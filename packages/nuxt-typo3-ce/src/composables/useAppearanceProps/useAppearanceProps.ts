import { CeAppearanceProps, CeAppearanceSpace } from './appearanceProps.types'
import { PropType } from '@vue/composition-api'

export default function useAppearanceProps (): CeAppearanceProps {
  return {
    /**
     * Frame main css class
     */
    frameClass: {
      type: String,
      default: ''
    },
    /**
     * Layout name
     */
    layout: {
      type: String,
      default: 'default'
    },
    /**
     * Bottom space
     */
    spaceAfter: {
      type: String as PropType<CeAppearanceSpace>,
      default: 'default'
    },
    /**
     * Top space
     */
    spaceBefore: {
      type: String as PropType<CeAppearanceSpace>,
      default: 'default'
    }
  }
}
