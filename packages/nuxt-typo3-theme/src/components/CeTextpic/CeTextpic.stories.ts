import CeTextpic from './index'
import { mockData } from './CeTextpic.data'

export default {
  title: 'TYPO3 Theme/Content Elements/CeTextpic',
  component: CeTextpic,
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
  components: { CeTextpic },
  props: Object.keys(argTypes),
  template: `<div>
    <h3>Beside text, Left:</h3>

    <h4>1-3_2-3:</h4>
    <CeTextpic v-bind="$props" />

    <h4>1-2_1-2:</h4>
    <CeTextpic v-bind="{ ...$props, appearance: { ...$props.appearance, proportions: '1-2_1-2' } }" />

    <h4 style="margin-top: 1rem">2-3_1-3:</h4>
    <CeTextpic v-bind="{ ...$props, appearance: { ...$props.appearance, proportions: '2-3_1-2' } }" />

    <h3 style="margin-top: 2rem">Above text:</h3>
    <CeTextpic v-bind="{ ...$props, gallery: { ...gallery, position: {
          horizontal: 'left',
          vertical: 'above',
          noWrap: false
        }
      }
    }" />
    <h3 style="margin-top: 2rem">Below text:</h3>
    <CeTextpic v-bind="{ ...$props, gallery: { ...gallery, position: {
          horizontal: 'left',
          vertical: 'below',
          noWrap: false
        }
      }
    }" />
  </div>`
})

standard.args = mockData
