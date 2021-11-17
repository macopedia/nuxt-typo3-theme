import T3CeMenuPages from './T3CeMenuPages.vue'
import { mockData } from './T3CeMenuPages.data'

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
    components: { T3CeMenuPages },
    props: Object.keys(argTypes),
    template: `<T3CeMenuPages v-bind="$props" />`
  }
}

Standard.args = mockData

export default {
  title: 'TYPO3 Theme/Content Elements/T3CeMenuPages',
  component: T3CeMenuPages,
  argTypes
}
