import { mount } from '@vue/test-utils'
import CeLink from './CeLink.vue'

describe('CeLink', () => {
  let wrapper
  const prepareLink = {
    stubs: ['NuxtLink'],
    propsData: {
      to: 'https://google.pl'
    },
    slots: {
      default: 'My Link'
    }
  }

  beforeEach(() => {
    wrapper = mount(CeLink, prepareLink)
  })
  it('return a href', () => {
    expect(wrapper.element.tagName).toBe('A')
  })
  it('display my link text', () => {
    expect(wrapper.text()).toContain('My Link')
  })
  it('should return target blank for external', () => {
    expect(wrapper.attributes('target')).toBe('_blank')
  })
  it('should return noopener noreferrer for external', () => {
    expect(wrapper.attributes('rel')).toBe('noopener noreferrer')
  })
  it('should return internal link', () => {
    wrapper = mount(CeLink, {
      ...prepareLink,
      ...{
        propsData: {
          to: '/about'
        }
      }
    })
    expect(wrapper.vm.$options._componentTag).toBe('NuxtLink')
  })
  it('should return external link when force is set', () => {
    wrapper = mount(CeLink, {
      ...prepareLink,
      ...{
        propsData: {
          to: '/about',
          external: true
        }
      }
    })
    expect(wrapper.element.tagName).toBe('A')
  })
  it('should return external link with additional rule', () => {
    wrapper = mount(CeLink, {
      ...prepareLink,
      ...{
        propsData: {
          to: 'app:///about',
          rules: ['app://']
        }
      }
    })
    expect(wrapper.element.tagName).toBe('A')
  })
})
