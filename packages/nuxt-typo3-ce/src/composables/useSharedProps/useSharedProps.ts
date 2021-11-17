import {
  T3CeSharedProps,
  T3CeHeaderLink,
  T3CeHeaderPosition
} from 'nuxt-typo3-ce/types'
import { PropType } from '@vue/composition-api'

export default function sharedProps (): T3CeSharedProps {
  return {
    /**
     * ID of CE / TYPO3 UID
     */
    id: {
      type: Number,
      default: 0
    },
    /**
     * Type of CE / TYPO3 CType
     */
    type: {
      type: String,
      default: ''
    },
    /**
     * Header content / TYPO3 header
     */
    header: {
      type: String,
      default: ''
    },
    /**
     * Header Type eg. h1, h2 / TYPO3 header_layout
     */
    headerLayout: {
      type: Number,
      default: 0
    },
    /**
     * Header alignment / TYPO3 header_position
     */
    headerPosition: {
      type: String as PropType<T3CeHeaderPosition>,
      default: ''
    },
    /**
     * Date of publication / TYPO3 date
     */
    date: {
      type: Number,
      default: 0
    },
    /**
     * Header link / TYPO3 header_link
     */
    headerLink: {
      type: [Object, String] as PropType<T3CeHeaderLink>,
      default: ''
    },
    /**
     * Subheader / TYPO3 subheader
     */
    subheader: {
      type: String,
      default: ''
    }
  }
}
