import UiHero from './index'
import { mockData } from './UiHero.data'

export default {
  title: 'TYPO3 Theme/UI/UiHero',
  component: UiHero
}

const argTypes = {
  heroImage: {
    control: {
      type: 'text'
    }
  },
  bodytext: {
    control: {
      type: 'text'
    }
  },
  header: {
    control: {
      type: 'text'
    }
  },
  subheader: {
    control: {
      type: 'text'
    }
  },
  isSubpage: false
}

export const standard = (args: any) => ({
  components: { UiHero },
  props: Object.keys(argTypes),
  template: '<UiHero v-bind="$props" />'
})

standard.args = mockData
