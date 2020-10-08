import UiLogo from './index'
export default {
  title: 'TYPO3 Theme/UI/UiLogo',
}

const argTypes = {
}

export const standard = (args: any) => ({
  components: { UiLogo },
  props: Object.keys(argTypes),
  template: '<UiLogo/>'
})

// standard.args = mockData
