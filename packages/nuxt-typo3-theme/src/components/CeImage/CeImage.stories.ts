import CeImage from './CeImage.vue'
import { mockData } from './CeImage.data'

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
    components: { CeImage },
    props: Object.keys(argTypes),
    template: `<CeImage v-bind="$props" />`
  }
}

Standard.args = mockData

export default {
  title: 'TYPO3 Theme/Content Elements/CeImage',
  component: CeImage,
  argTypes
}
