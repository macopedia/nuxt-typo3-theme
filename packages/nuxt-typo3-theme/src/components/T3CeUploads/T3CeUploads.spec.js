import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { mockData } from './T3CeUploads.data'
import T3CeUploads from './T3CeUploads.vue'
Vue.use(VueCompositionApi)
const T3CeHeaderMock = Vue.component('T3CeHeader', {
  template: '<div> hello </div>'
})

describe('T3CeUploads', () => {
  let wrapper
  const componentData = {
    stubs: {
      T3CeHeader: T3CeHeaderMock
    },
    mocks: {
      $typo3: {
        options: {
          api: {
            baseUrl: 'https://api.t3pwa.com'
          }
        }
      }
    },
    propsData: mockData
  }

  beforeEach(() => {
    wrapper = mount(T3CeUploads, componentData)
  })

  it('renders list', () => {
    const list = wrapper.findAll('li')
    expect(list).toHaveLength(wrapper.props('media').length)
  })

  it('shows thumbnail', async () => {
    await wrapper.setProps({
      displayInformation: 'filename-thumbnail'
    })

    const thumbnails = wrapper.findAll('img')

    for (let index = 0; index < thumbnails.length; index++) {
      const currentUrl = wrapper.props('media')[index].publicUrl
      expect(thumbnails.at(index).exists()).toBe(true)
      expect(thumbnails.at(index).attributes('src')).toContain(currentUrl)
    }
  })

  it('get proper path extension', () => {
    const images = wrapper.findAll('img')
    for (let index = 0; index < images.length; index++) {
      const mediaElementExtension = wrapper.props('media')[index].properties
        .extension
      const extension = images.at(index).attributes('src').split('/').pop()

      expect(extension).toContain(mediaElementExtension)
    }
  })

  it('shows description', async () => {
    const descriptionParagraphs = wrapper.findAll('.ce-uploads__desc')
    const shouldDescriptionBeVisible = wrapper.props('displayDescription')

    if (!shouldDescriptionBeVisible) {
      expect(descriptionParagraphs.exists()).toBe(false)
      await wrapper.setProps({ displayDescription: true })
    }

    for (let index = 0; index < descriptionParagraphs.length; index++) {
      const description = wrapper.props('media')[index].properties.description
      const isElementDescriptionAvailable = !!description

      if (shouldDescriptionBeVisible && isElementDescriptionAvailable) {
        expect(descriptionParagraphs.at(index).exists()).toBe(true)
        expect(descriptionParagraphs.at(index).text()).toBe(description)
      }
    }
  })
})
