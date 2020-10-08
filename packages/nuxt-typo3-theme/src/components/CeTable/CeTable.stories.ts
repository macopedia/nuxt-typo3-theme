import CeTable from 'nuxt-typo3-ce/src/components/CeTable'
import { mockData } from './CeTable.data'

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
  tableCaption: {
    control: {
      type: 'text'
    }
  },
  tableHeaderPosition: {
    control: {
      type: 'number'
    }
  },
  tableClass: {
    control: {
      type: 'text'
    }
  },
  tableTfoot: {
    control: {
      type: 'text'
    }
  }
}

export const Standard = (args: any, { argTypes }: {argTypes: any}) => {
  return {
    components: { CeTable },
    props: Object.keys(argTypes),
    template: `<div><CeTable v-bind="$props" /></div>`,
  };
};

Standard.args = mockData

export default {
  title: 'TYPO3 Theme/Content Elements/CeTable',
  component: CeTable,
  argTypes
}
