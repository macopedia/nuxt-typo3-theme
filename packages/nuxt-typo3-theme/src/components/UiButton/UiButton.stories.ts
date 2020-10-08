import UiButton from './index'
import { mockData } from './UiButton.data'

export default {
  title: 'TYPO3 Theme/UI/UiButton',
  component: UiButton
}

const argTypes = {
  to: {
    control: {
      type: 'text'
    }
  },
  variant: {
    control: {
      type: 'text'
    }
  },
  text: {
    control: {
      type: 'text'
    }
  }
}

export const standard = (args: any) => ({
  components: { UiButton },
  props: Object.keys(argTypes),
  template: '<UiButton :to="to" :variant="variant">{{ text }} </UiButton>'
})

standard.args = mockData
