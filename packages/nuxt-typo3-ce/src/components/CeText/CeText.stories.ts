import CeText from './CeText.vue'
import { mockData } from './CeText.data'

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
  bodytext: {
    control: {
      type: 'text'
    }
  }
}

/**
 * Story for desktop
 */

export const Desktop = (args: any, { argTypes }: { argTypes: any }) => {
  return {
    components: { CeText },
    props: Object.keys(argTypes),
    template: `<CeText v-bind="$props" />`
  }
}

Desktop.args = mockData

Desktop.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/egwoQef4CmM23GTkco39pw/Design-System-VUE-TYPO3?node-id=498%3A3376'
  }
}

/**
 * Story for mobile
 */

 export const Mobile = (args: any, { argTypes }: { argTypes: any }) => {
  return {
    components: { CeText },
    props: Object.keys(argTypes),
    template: `<CeText v-bind="$props" />`
  }
}

 Mobile.args = mockData

 Mobile.parameters = {
   viewport: {
     defaultViewport: 'mobile2'
   },
   design: {
     type: 'figma',
     url: 'https://www.figma.com/file/egwoQef4CmM23GTkco39pw/Design-System-VUE-TYPO3?node-id=590%3A220'
  }
 }

export default {
  title: 'CeText',
  component: CeText,
  argTypes
}
