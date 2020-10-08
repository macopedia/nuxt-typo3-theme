import CeHeader from './CeHeader.vue'
import { mockData } from './CeHeader.data'

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
  }
}

/**
 * Story for desktop
 */

export const Desktop = (args: any, { argTypes }: {argTypes: any}) => {
  return {
    components: { CeHeader },
    props: Object.keys(argTypes),
    template: `<CeHeader v-bind="$props" />`,
  };
};

Desktop.args = mockData

Desktop.parameters = {
  design: {
     type: 'figma',
     url: 'https://www.figma.com/file/egwoQef4CmM23GTkco39pw/Design-System-VUE-TYPO3?node-id=435%3A3586'
  }
}

/**
 * Story for mobiles
 */

export const Mobile = (args: any, { argTypes }: {argTypes: any}) => {
  return {
    components: { CeHeader },
    props: Object.keys(argTypes),
    template: `<CeHeader v-bind="$props" />`,
  };
};

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
  title: 'CeHeader',
  component: CeHeader,
  argTypes
}
