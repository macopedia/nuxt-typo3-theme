import UiNavbar from './index'
import UiLogo from '../UiLogo'
import { menuData } from './UiNavbar.data'

export default {
  title: 'TYPO3 Theme/UI/UiNavbar',
  component: UiNavbar,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    links: menuData
  }

}

export const standard = (args: any, types: any) => ({
  components: { UiNavbar, UiLogo },
  props: Object.keys(types.argTypes),
  template: `
    <UiNavbar :links="links">
      <template #logo><UiLogo/></template>
    </UiNavbar>`
})


