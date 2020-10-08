import UiFrame from './UiFrame.vue'
import UiButton from '../UiButton'

export default {
  title: 'TYPO3 Theme/UI/UiFrame',
  component: UiFrame,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    frameClass: {
      options: [ 'container', 'indent', 'indent-left', 'ruler-before', 'ruler-after', 'full-width'],
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
    frameClass: 'container',
    spaceBefore: 'medium',
    spaceAfter: 'medium',
    layout: ''
  }

}

export const Container = (args: unknown, types: any) => ({
  components: { UiFrame, UiButton },
  props: Object.keys(types.argTypes),


  template: `
    <UiFrame v-bind="$props">
      <div><UiButton to="http://google.com">Element</UiButton></div>
    </UiFrame>`
})


export const Indent = Container.bind({})
/* @ts-ignore */
Indent.args = {
  /* @ts-ignore */
  ...Container.args,
  frameClass: 'indent'
}


export const IndentLeft = (args: unknown, types: any) => ({
  components: { UiFrame, UiButton },
  props: Object.keys(types.argTypes),
  template: ` <UiFrame v-bind="$props"><p>Donec volutpat pulvinar enim tincidunt sagittis. Duis rutrum enim leo. Maecenas euismod congue blandit? Aliquam et auctor sapien. Phasellus ut pellentesque tellus. Sed ac libero vitae quam porttitor viverra. Nullam neque libero, luctus suscipit ultricies in, tincidunt ac justo?</p> </UiFrame> `
})

IndentLeft.args = {
  /* @ts-ignore */
  ...Container.args,
  frameClass: 'indent-left'
}

export const IndentRight = IndentLeft.bind({})
IndentRight.args = {
  /* @ts-ignore */
  ...Container.args,
  frameClass: 'indent-right'
}
