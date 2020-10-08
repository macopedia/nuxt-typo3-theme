<script lang="ts">
import {
  VNode,
  CreateElement,
  RenderContext,
  FunctionalComponentOptions,
  PropType
} from 'vue/types'
import type { CeRendererContentItem } from './CeRenderer.types'
export default {
  functional: true,
  props: {
    /**
     * Array of content elements - colPos[x] from contentData
     */
    content: {
      type: Array as PropType<CeRendererContentItem[]>,
      default: () => []
    },
    /**
     * Control frame component displaying
     */
    frame: {
      type: Boolean,
      default: true
    }
  },
  render (createElement: CreateElement, ctx: RenderContext): VNode | VNode[] {
    const { props } = ctx

    // render standalone component
    function renderComponent (element: CeRendererContentItem, index: number) {
      return createElement('CeDynamic', {
        props: {
          data: element,
          type: element.type,
          index
        }
      })
    }

    // render component with frame wrapper
    function renderFrame (element: CeRendererContentItem, index: number) {
      return createElement(
        'CeFrame',
        {
          props: element.appearance
        },
        [renderComponent(element, index)]
      )
    }

    // render loop of content elements
    return props.content.map((element: CeRendererContentItem, index: number) =>
      props.frame && element.appearance.frameClass !== 'none'
        ? renderFrame(element, index)
        : renderComponent(element, index)
    )
  }
} as FunctionalComponentOptions
</script>
