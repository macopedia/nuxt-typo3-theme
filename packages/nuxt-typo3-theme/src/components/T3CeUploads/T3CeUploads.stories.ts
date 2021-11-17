import { mockData } from './T3CeUploads.data'
import T3CeUploads from './index'
const { media } = mockData
export default {
  title: 'TYPO3 Theme/Content Elements/T3CeUploads',
  component: T3CeUploads,
  parameters: {},
  decorators: [
    () => ({
    beforeCreate() {
        const extendInstance = this as any
        extendInstance.$root.$typo3 = {
          options: {
            api: {
              baseURL: 'https://api.t3pwa.com'
            },
            baseURL: 'https://api.t3pwa.com'
          }
        }
      },
      template: '<div><story /></div>'
    })
  ],
  args: {
    media,
    target: '_blank',
    displayDescription: true,
    displayFileSizeInformation: true,
    displayInformation: 'filename-extension'
  },
  argTypes: {
    displayInformation: {
      control: {
        type: 'radio'
      },
      options: ['filename-extension', 'filename', 'filename-thumbnail']
    }
  }
}

export const standard = (args: any, types: any) => ({
  components: {
    T3CeUploads
  },
  props: Object.keys(types.argTypes),

  template: `
    <T3CeUploads v-bind="$props" />
    `
})
