import CeText from './CeText.vue'
import { mockData } from './CeText.data'

export default {
  title: 'TYPO3 Theme/Content Elements/CeText',
}

const argTypes = {
  headerLayout: {
    control: {
      type: 'number'
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
  }
}

export const standard = () => ({
  components: { CeText },
  props: Object.keys(argTypes),
  template: '<CeText v-bind="$props" />'
})

standard.args = mockData
