import { mount } from '@vue/test-utils'
import UiFrame from './UiFrame.vue'
import T3CeDiv from '../T3CeDiv/T3CeDiv.vue'

describe('UiFrame', () => {
  let wrapper
  const prepareFrame = {
    propsData: {
      frameClass: 'custom-class',
      layout: 'custom-layout',
      spaceBefore: 'large',
      spaceAfter: 'extra-large'
    },
    stubs: {
      T3CeDiv
    },
    slots: {
      default: '<T3CeDiv />'
    }
  }

  beforeEach(() => {
    wrapper = mount(UiFrame, prepareFrame)
  })
  it('renders children', () => {
    expect(wrapper.html()).toContain('hr')
  })
  it('has custom frame class', () => {
    expect(wrapper.classes().includes('frame-custom-class')).toBeTruthy()
  })
  it('has custom custom layout', () => {
    expect(wrapper.classes().includes('layout-custom-layout')).toBeTruthy()
  })

  it('has large space at the top', () => {
    expect(wrapper.classes().includes('space-before-large')).toBeTruthy()
  })

  it('has extra-large space at the bottom', () => {
    expect(wrapper.classes().includes('space-after-extra-large')).toBeTruthy()
  })

  it('renders additional node for indent frame', () => {
    wrapper = mount(UiFrame, {
      propsData: {
        frameClass: 'indent',
        layout: 'indent',
        spaceBefore: 'large',
        spaceAfter: 'extra-large'
      },
      stubs: {
        T3CeDiv
      },
      slots: {
        default: '<T3CeDiv />'
      }
    })

    expect(wrapper.html()).toContain('<div class="indent">')
  })
})
