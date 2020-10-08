import UiBreadcrumbsList from '../UiBreadcrumbsList/index'
import { breadcrumbs } from './UiBreadcrumbsList.data'

export default {
  title: 'TYPO3 Theme/UI/UiBreadcrumbsList',
  component: UiBreadcrumbsList,
  parameters: {
  },
  args: {
    breadcrumbs
  }
}

export const standard = (args: any, types: any) => ({
  components: {
    UiBreadcrumbsList
  },
  props: Object.keys(types.argTypes),
  template: `
    <UiBreadcrumbsList :breadcrumbs="breadcrumbs" />
    `
})
