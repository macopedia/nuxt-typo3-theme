import { mount } from '@vue/test-utils'
import T3CeDefault from './T3CeDefault'
import ContentElementData from './T3CeDefault.data'

describe('T3CeDefault', () => {
  let wrapper
  const prepareFrame = {
    propsData: ContentElementData,
    slots: {
      default: [T3CeDefault]
    }
  }

  beforeEach(() => {
    wrapper = mount(T3CeDefault, prepareFrame)
  })
  it('renders json fields', () => {
    expect(wrapper.text()).toContain([ContentElementData.content.header])
    expect(wrapper.text()).toContain([ContentElementData.content.subheader])
  })
})
