import UiPagination from './index'

export default {
  title: 'TYPO3 Theme/UI/UiPagination',
  component: UiPagination,
  args: {
    currentPage: {
      controls: {
        type: 'number',
      }
    },

    length: {
      controls: {
        type: 'number',
      }
    }
  }
}

export const standard = (_: any, types: any) => ({
  components: {
    UiPagination
  },
  props: Object.keys(types.argTypes),
  template: `
    <UiPagination v-bind="$props">
    `
})

standard.args = {
  currentPage: 1,
  length: 10,
}
