import { mount } from '@vue/test-utils'
import CeHeader from './CeHeader.vue'

describe('CeHeader', () => {
  let wrapper
  const prepareFrame = {
    propsData: {
      headerLayout: 1,
      header: 'header 1',
      subheader: 'subheader 1',
      headerPosition: 'right'
    }
  }

  beforeEach(() => {
    wrapper = mount(CeHeader, prepareFrame)
  })
  it('render header tag h1', () => {
    expect(wrapper.html()).toContain('h1')
  })
  it('render subheader tag h2', () => {
    expect(wrapper.html()).toContain('h2')
  })

  it('render header text', () => {
    expect(wrapper.text()).toContain('header 1')
  })

  it('render subheader text', () => {
    expect(wrapper.text()).toContain('subheader 1')
  })

  it('has css align class', () => {
    expect(wrapper.html()).toContain('ce-header--right')
  })

  it('can render without link', () => {
    expect(wrapper.html()).toEqual(expect.not.stringContaining('<a href'))
  })

  it('renders link', () => {
    wrapper = mount(CeHeader, {
      ...prepareFrame,
      headerLink: 'http://google.pl'
    })
    expect(wrapper.html()).toEqual(expect.not.stringContaining('<a href'))
  })
})
