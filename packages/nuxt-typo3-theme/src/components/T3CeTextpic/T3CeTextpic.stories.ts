import T3CeTextpic from './index'
import { mockData } from './T3CeTextpic.data'

export default {
  title: 'TYPO3 Theme/Content Elements/T3CeTextpic',
  component: T3CeTextpic,
  argTypes: {
    heroImage: {
      control: {
        type: 'text'
      }
    },
    bodytext: {
      control: {
        type: 'text'
      }
    },
    appearance: {
      control: {
        type: 'object'
      }
    },
    gallery: {
      control: {
        type: 'object'
      }
    },
    header: {
      control: {
        type: 'text'
      }
    },
    subheader: {
      control: {
        type: 'text'
      }
    }
  }
}

export const standard = (args: any, { argTypes }: { argTypes: any }) => ({
  components: { T3CeTextpic },
  props: Object.keys(argTypes),
  template: `<div>
    <h3>Beside text, Left:</h3>

    <h4>1-3_2-3:</h4>
    <T3CeTextpic v-bind="$props" />

    <h4>1-2_1-2:</h4>
    <T3CeTextpic v-bind="{ ...$props, appearance: { ...$props.appearance, proportions: '1-2_1-2' } }" />

    <h4 style="margin-top: 1rem">2-3_1-3:</h4>
    <T3CeTextpic v-bind="{ ...$props, appearance: { ...$props.appearance, proportions: '2-3_1-2' } }" />

    <h3 style="margin-top: 2rem">Above text:</h3>
    <T3CeTextpic v-bind="{ ...$props, gallery: { ...gallery, position: {
          horizontal: 'left',
          vertical: 'above',
          noWrap: false
        }
      }
    }" />
    <h3 style="margin-top: 2rem">Below text:</h3>
    <T3CeTextpic v-bind="{ ...$props, gallery: { ...gallery, position: {
          horizontal: 'left',
          vertical: 'below',
          noWrap: false
        }
      }
    }" />
  </div>`
})

standard.args = mockData
