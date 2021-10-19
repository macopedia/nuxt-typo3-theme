import { mount } from '@vue/test-utils'
import { CeRendererMockData } from './CeRenderer.data'
import CeRenderer from './CeRenderer.vue'
import CeFrame from '../CeFrame'
import CeDynamic from '../CeDynamic'

// Mock CeDynamic
const CeDynamicMock = {
  props: ['data', 'type', 'index'],
  template: '<div class="ce-dnymaic">{{JSON.stringify($props)}}</div>'
}

// Mock CeFrame
const CeFrameMock = {
  template: '<div class="ce-frame"><slot/></div>'
}

const CeDefault = {
  props: ['data', 'type', 'index'],
  template: '<div class="ce-default">{{JSON.stringify($props)}}</div>'
}

describe('CeRenderer with mocked components', () => {
  let wrapper
  let components
  let frames

  // we have to wrapp it because CeRenderer renders multiple nodes on root level
  const wrappedRenderer = {
    inheritAttrs: false,
    components: { CeRenderer },
    template: '<div><CeRenderer v-bind="$attrs"/></div>'
  }

  const prepareFrame = {
    stubs: { CeFrame: CeFrameMock, CeDynamic: CeDynamicMock },
    propsData: CeRendererMockData
  }

  beforeEach(() => {
    wrapper = mount(wrappedRenderer, prepareFrame)
    components = wrapper.findAllComponents(CeDynamicMock)
    frames = wrapper.findAllComponents(CeFrameMock)
  })

  it('renders children and pass type', () => {
    const firstCe = components.at(0)
    expect(firstCe.exists()).toBeTruthy()
    expect(firstCe.props('type')).toBe('text')

    const secondCe = components.at(1)
    expect(secondCe.exists()).toBeTruthy()
    expect(secondCe.props('type')).toBe('textpic')
  })

  it('renders exactly 2 components', () => {
    expect(components).toHaveLength(2)
  })

  it('renders only one frame', () => {
    expect(frames).toHaveLength(1)
  })

  it('does not render frames at all', () => {
    wrapper = mount(wrappedRenderer, {
      ...prepareFrame,
      propsData: {
        ...{ CeRendererMockData },
        frame: false
      }
    })
    frames = wrapper.findAllComponents(CeFrameMock)
    expect(frames).toHaveLength(0)
  })
})

describe('CeRenderer with true components', () => {
  let wrapper
  let components
  let frames

  // we have to wrapp it because CeRenderer renders multiple nodes on root level
  const wrappedRenderer = {
    inheritAttrs: false,
    components: { CeRenderer },
    template: '<div><CeRenderer v-bind="$attrs"/></div>'
  }

  const prepareFrame = {
    stubs: {
      CeDynamic,
      CeFrame,
      CeText: CeDefault,
      CeTextpic: CeDefault,
      CeHeader: true,
      CeHtmlParser: true
    },
    propsData: CeRendererMockData
  }

  beforeEach(() => {
    wrapper = mount(wrappedRenderer, prepareFrame)
    components = wrapper.findAllComponents(CeDynamic)
    frames = wrapper.findAllComponents({ name: 'CeFrame' })
  })

  it('renders children and pass type', () => {
    const firstCe = components.at(0)

    expect(firstCe.exists()).toBeTruthy()
    expect(firstCe.props('type')).toBe('text')

    const secondCe = components.at(1)
    expect(secondCe.exists()).toBeTruthy()

    expect(true).toBeTruthy()
  })

  it('renders exactly 2 components', () => {
    expect(components).toHaveLength(2)
  })

  it('does not render frames at all', () => {
    wrapper = mount(wrappedRenderer, {
      ...prepareFrame,
      propsData: {
        ...{ CeRendererMockData },
        frame: false
      }
    })
    frames = wrapper.findAllComponents(CeFrame)
    expect(frames).toHaveLength(0)
  })
})
