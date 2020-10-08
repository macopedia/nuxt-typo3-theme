import { CeHeaderTags } from 'nuxt-typo3-ce/types'
import { computed, Ref } from '@vue/composition-api'

/**
 * Transform typo3 header layout to header and subheader tagnames
 */
export default function useHeaderTags (
  headerLayout: Ref<number>,
  headerPosition?: Ref<string>
): CeHeaderTags {
  // fallback if someone pass layout as a string
  const parsedLayout =
    typeof headerLayout.value === 'string'
      ? parseInt(headerLayout.value, 10)
      : headerLayout.value
  const headerTag = computed((): string => `h${parsedLayout || 1}`)
  const subheaderTag = computed((): string => `h${(parsedLayout || 1) + 1}`)
  const headerCss = computed(
    (): string =>
      `ce-header--${
        headerPosition && headerPosition.value ? headerPosition.value : 'left'
      }`
  )

  return { headerTag, subheaderTag, headerCss }
}
