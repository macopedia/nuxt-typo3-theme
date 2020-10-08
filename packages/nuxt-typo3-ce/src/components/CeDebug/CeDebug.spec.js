import { mount } from '@vue/test-utils'
import CeDebug from './CeDebug.vue'
import CeDebugData from './CeDebug.data'

describe('CeDebug', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CeDebug, {
      propsData: CeDebugData
    })
  })
  it('renders all props', () => {
    expect(wrapper.text()).toContain('content')
  })
})
