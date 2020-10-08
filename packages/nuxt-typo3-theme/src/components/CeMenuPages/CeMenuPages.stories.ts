import CeMenuPages from './CeMenuPages.vue'
import { mockData } from './CeMenuPages.data'

const argTypes = {
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
  headerLayout: {
    control: {
      type: 'number'
    }
  },
  menu: {
    control: 'object'
  }
}

export const Standard = (args: any, { argTypes }: { argTypes: any }) => {
  return {
    components: { CeMenuPages },
    props: Object.keys(argTypes),
    template: `<CeMenuPages v-bind="$props" />`
  }
}

Standard.args = mockData

export default {
  title: 'TYPO3 Theme/Content Elements/CeMenuPages',
  component: CeMenuPages,
  argTypes
}
