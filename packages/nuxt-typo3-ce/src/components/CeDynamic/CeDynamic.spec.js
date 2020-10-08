import { mount } from '@vue/test-utils'
import { CeDynamicMockData } from './CeDynamic.data'
import CeDynamic from './CeDynamic.vue'

// Mock CeDynamic
const CeTextMock = {
  name: 'CeText',
  props: ['id', 'header', 'bodytext'],
  template: `<div class="ce-text-mock"><h1>{{header}}</h1>{{bodytext}}</div>`
}

describe('CeDynamic', () => {
  it('renders dynamic components based on data', () => {
    const wrapper = mount(CeDynamic, {
      stubs: { CeText: CeTextMock },
      propsData: CeDynamicMockData.text
    })
    const components = wrapper.findAllComponents(CeTextMock)
    const firstCe = components.at(0)
    expect(firstCe.exists()).toBeTruthy()
  })
})
