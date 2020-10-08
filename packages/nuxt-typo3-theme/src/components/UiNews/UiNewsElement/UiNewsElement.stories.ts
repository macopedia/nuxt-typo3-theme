import UiNewsElement from './index'
import { newsElementMockup } from './UiNewsElement.data'

export default {
  title: 'TYPO3 Theme/UI/UiNewsElement',
  component: UiNewsElement,
  parameters: {
  },
  args: {
    newsElementMockup,
  }
}

export const standard = (args: any, types: any) => ({
  components: {
    UiNewsElement
  },
  props: Object.keys(types.argTypes),
  template: `
    <UiNewsElement :news-element="newsElementMockup" />
    `
})
