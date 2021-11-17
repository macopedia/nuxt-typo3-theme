import { T3CeHeaderLink, T3CeHeaderPosition } from 'nuxt-typo3-ce/types'
import { PropType } from '@vue/composition-api'

export interface T3CeSharedProps {
  /**
   * ID of CE / TYPO3 UID
   */
  id: {
    type: typeof Number
    default: 0
  }
  /**
   * Type of CE / TYPO3 CType
   */
  type: {
    type: typeof String
    default: ''
  }
  /**
   * Header content / TYPO3 header
   */
  header: {
    type: typeof String
    default: ''
  }
  /**
   * Header Type / TYPO3 header_layout
   */
  headerLayout: {
    type: typeof Number
    default: 0
  }
  /**
   * Header alignment / TYPO3 header_position
   */
  headerPosition: {
    type: PropType<T3CeHeaderPosition>
    default: ''
  }
  /**
   * Date of publication / TYPO3 date
   */
  date: {
    type: typeof Number
    default: 0
  }
  /**
   * Header link / TYPO3 header_link
   */
  headerLink: {
    type: PropType<T3CeHeaderLink>
    default: ''
  }
  /**
   * Subheader / TYPO3 subheader
   */
  subheader: {
    type: typeof String
    default: ''
  }
}
