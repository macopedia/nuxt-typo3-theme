import { mount } from '@vue/test-utils'
import useOverrideLocalComponents from './useOverrideLocalComponents'
import { defineComponent } from '@vue/composition-api'

const ContentWrapper = defineComponent({
  name: 'CwHeader',
  template: '<div><UiIcon/></div>',
  components: {
    UiIcon: {
      name: 'UiIcon',
      template: '<div>icon</div>'
    }
  },
  setup () {
    useOverrideLocalComponents()
  }
})
describe('useOverrideLocalComponents', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(ContentWrapper, {
      stubs: {
        UiIcon: { name: 'UiIcon', template: '<div>custom icon</div>' }
      }
    })
  })
  it('it should return overrided component', () => {
    expect(wrapper.html()).toContain('custom icon')
  })
})
