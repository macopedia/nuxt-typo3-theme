import T3CeHtml from './T3CeHtml.vue'
import { mockData } from './T3CeHtml.data'

const argTypes = {
  bodytext: {
    control: {
      type: 'text'
    }
  }
}

export const Standard = (args: any, { argTypes }: { argTypes: any }) => {
  return {
    components: { T3CeHtml },
    props: Object.keys(argTypes),
    template: `<T3CeHtml v-bind="$props" />`
  }
}

Standard.args = mockData

export default {
  title: 'T3CeHtml',
  component: T3CeHtml,
  argTypes
}
