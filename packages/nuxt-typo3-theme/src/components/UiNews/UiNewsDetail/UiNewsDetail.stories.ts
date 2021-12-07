import UiNewsDetail from './index'
import { detailElementMockup as article } from './UiNewsDetail.data'

export default {
  title: 'TYPO3 Theme/UI/UiNewsDetail',
  component: UiNewsDetail,
  parameters: {
  },
  args: {
    article,
  }
}

export const standard = (_: any, types: any) => ({
  components: {
    UiNewsDetail
  },
  props: Object.keys(types.argTypes),
  computed: {
    rendererContent() {
      return (this as any).article.contentElements[0].content
    },
    appearance() {
      return (this as any).article.contentElements[0].appearance
    }
  },
  template: `
    <UiNewsDetail v-else v-bind="$props">
      <T3CeTextpic
        :appearance="appearance"
        :header="rendererContent.header"
        :gallery="rendererContent.gallery"
        :bodytext="rendererContent.bodytext"
      />
    </UiNewsDetail>
    `
})
