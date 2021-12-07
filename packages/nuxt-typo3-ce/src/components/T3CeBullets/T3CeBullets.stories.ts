import CeBullets from './T3CeBullets.vue'
import { mockData } from './T3CeBullets.data'

const argTypes = {
  header: {
    control: {
      name: 'Header',
      type: 'text',
      default: 'Header text'
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
      type: 'array'
    }
  },
  bulletsType: {
    control: {
      type: 'number'
    }
  },
}

/**
 * Story for desktop
 */

export const Desktop = (args: any, { argTypes }: {argTypes: any}) => {
  return {
    components: { CeBullets },
    props: Object.keys(argTypes),
    template: `<T3CeBullets v-bind="$props" />`,
  };
};

Desktop.args = mockData

Desktop.parameters = {
  design: {
     type: 'figma',
     url: 'https://www.figma.com/file/egwoQef4CmM23GTkco39pw/Design-System-VUE-TYPO3?node-id=523%3A0'
  }
}

/**
 * Story for mobile
 */

export const Mobile = (args: any, { argTypes }: {argTypes: any}) => {
  return {
    components: { CeBullets },
    props: Object.keys(argTypes),
    template: `<T3CeBullets v-bind="$props" />`,
  };
};

Mobile.args = mockData

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/egwoQef4CmM23GTkco39pw/Design-System-VUE-TYPO3?node-id=598%3A25'
 }
}

export default {
  title: 'CeBullets',
  component: CeBullets,
  argTypes
}
