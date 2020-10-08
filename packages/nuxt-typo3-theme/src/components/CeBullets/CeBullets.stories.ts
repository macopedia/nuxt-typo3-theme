import CeBullets from './CeBullets.vue'
import { mockData } from './CeBullets.data'

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
    components: { CeBullets },
    props: Object.keys(argTypes),
    template: `<div><CeBullets v-bind="$props" /><CeBullets v-bind="{ ...$props, bulletsType: 1 }" /></div>`,
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
  title: 'TYPO3 Theme/Content Elements/CeBullets',
  component: CeBullets,
  argTypes
}
