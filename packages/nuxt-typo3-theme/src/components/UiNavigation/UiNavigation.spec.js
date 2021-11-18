import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import UiNavigation from './UiNavigation.vue'
import { menuData } from './UiNavigation.data'

describe('UiNavigation', () => {
  let wrapper
  beforeEach(() => {
    const localVue = createLocalVue()
    wrapper = mount(UiNavigation, {
      stubs: {
        NuxtLink: RouterLinkStub,
        T3NavLink: RouterLinkStub,
        SvgIcon: true
      },
      propsData: {
        links: menuData
      },
      localVue
    })
  })
  it('display passed links', () => {
    menuData.forEach(item => {
      expect(wrapper.text()).toContain(item.title)
    })
  })
  it('has children list', () => {
    const linkWithChildren = menuData.find(item => item.children)
    linkWithChildren.children.forEach(item => {
      expect(wrapper.text()).toContain(item.title)
    })
  })
})
