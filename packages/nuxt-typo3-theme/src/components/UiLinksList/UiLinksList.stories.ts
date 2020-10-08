import UiLinksList from './index'
import { mockData } from './UiLinksList.data'

export default {
  title: 'TYPO3 Theme/UI/UiLinksList',
  component: UiLinksList
}

const argTypes = {
  links: {
    control: {
      type: 'text'
    }
  }
}

export const standard = () => ({
  components: { UiLinksList },
  props: Object.keys(argTypes),
  template: '<UiLinksList style="background: black; padding: 20px" v-bind="$props" />'
})

standard.args = mockData
