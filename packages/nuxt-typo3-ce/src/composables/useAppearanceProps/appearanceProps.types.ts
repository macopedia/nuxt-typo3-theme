import { PropType } from '@vue/composition-api'

export type T3CeAppearanceSpace =
  | 'default'
  | 'extra-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'extra-large'
  | string

export type T3CeAppearanceFrameClass =
  | 'default'
  | 'ruler-before'
  | 'ruler-after'
  | 'indent'
  | 'indent-left'
  | 'indent-right'
  | 'none'
  | string

export interface T3CeAppearanceInterface {
  frameClass: T3CeAppearanceFrameClass
  layout: string
  spaceAfter: T3CeAppearanceSpace
  spaceBefore: T3CeAppearanceSpace
}
export interface T3CeAppearanceProps {
  /**
   * Frame main css class
   */
  frameClass: {
    type: PropType<T3CeAppearanceFrameClass>
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
    type: PropType<T3CeAppearanceSpace>
    default: 'default'
  }
  /**
   * Top space
   */
  spaceBefore: {
    type: PropType<T3CeAppearanceSpace>
    default: 'default'
  }
}
