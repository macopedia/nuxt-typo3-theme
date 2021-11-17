import T3CeBullets from './T3CeBullets.vue'
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

export const Standard = (args: any, { argTypes }: {argTypes: any}) => {
  return {
    components: { T3CeBullets },
    props: Object.keys(argTypes),
    template: `<div><T3CeBullets v-bind="$props" /><T3CeBullets v-bind="{ ...$props, bulletsType: 1 }" /></div>`,
  };
};

Standard.args = mockData

Standard.parameters = {
  design: {
     type: 'figma',
     url: 'https://www.figma.com/file/egwoQef4CmM23GTkco39pw/Design-System-VUE-TYPO3?node-id=523%3A0'
  }
}

export default {
  title: 'TYPO3 Theme/Content Elements/T3CeBullets',
  component: T3CeBullets,
  argTypes
}
