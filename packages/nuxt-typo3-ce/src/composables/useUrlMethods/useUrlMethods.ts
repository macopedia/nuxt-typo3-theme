import { ComponentInstance } from '@vue/composition-api'
import type { UrlMethods } from 'nuxt-typo3-ce/types'

export default function useUrlMethods (root: ComponentInstance): UrlMethods {
  /**
   * Get api base url + optional path
   *
   * @param {String} path
   * @returns {String} Full api base url + path
   * @public
   */
  const getApiUrl = (path = ''): string => {
    return `${root.$typo3.options.api.baseURL}/${path}`
  }

  return {
    getApiUrl
  }
}
