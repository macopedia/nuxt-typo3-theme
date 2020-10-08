import { mount } from '@vue/test-utils'
import CeFrame from './CeFrame.vue'
import CeDiv from '../CeDiv'

describe('CeFrame', () => {
  let wrapper
  const prepareFrame = {
    propsData: {
      frameClass: 'custom-class',
      layout: 'custom-layout',
      spaceBefore: 'large',
      spaceAfter: 'extra-large'
    },
    slots: {
      default: [CeDiv]
    }
  }

  beforeEach(() => {
    wrapper = mount(CeFrame, prepareFrame)
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
})
