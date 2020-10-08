import CeHtml from './CeHtml.vue'
import { mockData } from './CeHtml.data'

const argTypes = {
  bodytext: {
    control: {
      type: 'text'
    }
  }
}

export const Standard = (args: any, { argTypes }: { argTypes: any }) => {
  return {
    components: { CeHtml },
    props: Object.keys(argTypes),
    template: `<CeHtml v-bind="$props" />`
  }
}

Standard.args = mockData

export default {
  title: 'CeHtml',
  component: CeHtml,
  argTypes
}
