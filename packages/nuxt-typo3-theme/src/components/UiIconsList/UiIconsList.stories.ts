import UiIconsList from './index'
import { mockData } from './UiIconsList.data'

export default {
  title: 'TYPO3 Theme/UI/UiIconsList',
  component: UiIconsList
}

const argTypes = {
  icons: {
    control: {
      type: 'text'
    }
  }
}

export const standard = () => ({
  components: { UiIconsList },
  props: Object.keys(argTypes),
  template: '<UiIconsList style="background: black; padding: 20px" v-bind="$props" />'
})

standard.args = mockData
