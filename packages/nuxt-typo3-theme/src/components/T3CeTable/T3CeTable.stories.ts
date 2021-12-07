import T3CeTable from 'nuxt-typo3-ce/src/components/T3CeTable'
import { mockData } from './T3CeTable.data'

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
    components: { T3CeTable },
    props: Object.keys(argTypes),
    template: `<div><T3CeTable v-bind="$props" /></div>`,
  };
};

Standard.args = mockData

export default {
  title: 'TYPO3 Theme/Content Elements/T3CeTable',
  component: T3CeTable,
  argTypes
}
