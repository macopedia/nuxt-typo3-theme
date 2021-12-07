import { mount } from '@vue/test-utils'
import T3CeShortcut from './T3CeShortcut.vue'
import T3CeShortcutData from './T3CeShortcut.data'
import T3Renderer from 'nuxt-typo3/lib/components/T3Renderer/T3Renderer'

// Mock CeDynamic
const CeDynamicMock = {
  props: ['data', 'type', 'index'],
  template: '<div class="t3-ce-dnymaic">{{JSON.stringify($props)}}</div>'
}

// Mock CeFrame
const CeFrameMock = {
  template: '<div class="t3-ce-frame"><slot/></div>'
}

describe('T3CeShortcut', () => {
  let wrapper
  const prepareFrame = {
    stubs: { T3Renderer, T3Frame: CeFrameMock, T3Dynamic: CeDynamicMock },
    propsData: {
      shortcut: T3CeShortcutData.content.shortcut
    }
  }

  beforeEach(() => {
    wrapper = mount(T3CeShortcut, prepareFrame)
  })
  it('renders children', () => {
    expect(wrapper.html()).toContain('Header from different page')
  })
})
