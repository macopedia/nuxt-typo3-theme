import T3CeImage from './T3CeImage.vue'
import { mockData } from './T3CeImage.data'

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
  gallery: {
    control: {
      type: 'object'
    }
  }
}

export const Standard = (args: any, { argTypes }: { argTypes: any }) => {
  return {
    components: { T3CeImage },
    props: Object.keys(argTypes),
    template: `<T3CeImage v-bind="$props" />`
  }
}

Standard.args = mockData

export default {
  title: 'TYPO3 Theme/Content Elements/T3CeImage',
  component: T3CeImage,
  argTypes
}
