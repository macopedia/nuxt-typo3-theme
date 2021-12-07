import T3CeText from './T3CeText.vue'
import { mockData } from './T3CeText.data'

export default {
  title: 'TYPO3 Theme/Content Elements/T3CeText',
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
  components: { T3CeText },
  props: Object.keys(argTypes),
  template: '<T3CeText v-bind="$props" />'
})

standard.args = mockData
