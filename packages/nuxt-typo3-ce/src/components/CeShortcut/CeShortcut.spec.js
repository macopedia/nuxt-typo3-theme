import { mount } from '@vue/test-utils'
import CeShortcut from './CeShortcut.vue'
import CeShortcutData from './CeShortcut.data'
import CeRenderer from '../CeRenderer'

// Mock CeDynamic
const CeDynamicMock = {
  props: ['data', 'type', 'index'],
  template: `<div class="ce-dnymaic">{{JSON.stringify($props)}}</div>`
}

// Mock CeFrame
const CeFrameMock = {
  template: '<div class="ce-frame"><slot/></div>'
}

describe('CeShortcut', () => {
  let wrapper
  const prepareFrame = {
    stubs: { CeRenderer, CeFrame: CeFrameMock, CeDynamic: CeDynamicMock },
    propsData: {
      shortcut: CeShortcutData.content.shortcut
    }
  }

  beforeEach(() => {
    wrapper = mount(CeShortcut, prepareFrame)
  })
  it('renders children', () => {
    expect(wrapper.html()).toContain('Header from different page')
  })
})
