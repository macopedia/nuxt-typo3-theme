<script lang="ts">
import {
  VNode,
  CreateElement,
  RenderContext,
  FunctionalComponentOptions
} from 'vue/types'
import useAppearanceProps from '../../composables/useAppearanceProps'
export default {
  name: 'CeFrame',
  functional: true,
  props: {
    ...useAppearanceProps()
  },
  render (createElement: CreateElement, ctx: RenderContext): VNode | VNode[] {
    const { props, children } = ctx

    return createElement(
      'div',
      {
        class: [
          'ce-frame',
          `frame-${props.frameClass}`,
          `layout-${props.layout}`,
          `space-before-${
            props.spaceBefore.length ? props.spaceBefore : 'default'
          }`,
          `space-after-${
            props.spaceAfter.length ? props.spaceAfter : 'default'
          }`
        ]
      },
      children
    )
  }
} as FunctionalComponentOptions
</script>
