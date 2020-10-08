import { PropType } from '@vue/composition-api'

export type CeAppearanceSpace =
  | 'default'
  | 'extra-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'extra-large'
  | string

export type CeAppearanceFrameClass =
  | 'default'
  | 'ruler-before'
  | 'ruler-after'
  | 'indent'
  | 'indent-left'
  | 'indent-right'
  | 'none'
  | string

export interface CeAppearanceInterface {
  frameClass: CeAppearanceFrameClass
  layout: string
  spaceAfter: CeAppearanceSpace
  spaceBefore: CeAppearanceSpace
}
export interface CeAppearanceProps {
  /**
   * Frame main css class
   */
  frameClass: {
    type: PropType<CeAppearanceFrameClass>
    default: ''
  }
  /**
   * Layout name
   */
  layout: {
    type: typeof String
    default: 'default'
  }
  /**
   * Bottom space
   */
  spaceAfter: {
    type: PropType<CeAppearanceSpace>
    default: 'default'
  }
  /**
   * Top space
   */
  spaceBefore: {
    type: PropType<CeAppearanceSpace>
    default: 'default'
  }
}
