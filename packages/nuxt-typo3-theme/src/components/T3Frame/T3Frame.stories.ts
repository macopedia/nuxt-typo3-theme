import CeFrame from './T3Frame.vue'
import UiButton from '../UiButton'

export default {
  title: 'TYPO3 Theme/Content Elements/CeFrame',
  component: CeFrame,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    frameClass: {
      options: ['indent', 'default'],
      control: { type: 'select' }
    },
    spaceBefore: {
      options: ['extra-small', 'small', 'default', 'medium', 'large', 'extra-large'],
      control: { type: 'select' }
    },
    spaceAfter: {
      options: ['extra-small', 'small', 'default', 'medium', 'large', 'extra-large'],
      control: { type: 'select' }
    }
  },
  args: {
    frameClass: 'indent',
    spaceBefore: 'medium',
    spaceAfter: 'medium',
    layout: ''
  }

}

export const standard = (args: any, types: any) => ({
  components: { CeFrame, UiButton },
  props: Object.keys(types.argTypes),

  template: `
    <T3Frame v-bind="$props">
      <div><UiButton to="http://google.com">Element in the frame</UiButton></div>
    </T3Frame>`
})


