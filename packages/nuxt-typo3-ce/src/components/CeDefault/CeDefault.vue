<script lang="ts">
import {
  VNode,
  CreateElement,
  RenderContext,
  FunctionalComponentOptions
} from 'vue/types'

export default {
  name: 'CeDefault',
  functional: true,
  render (createElement: CreateElement, ctx: RenderContext): VNode {
    return createElement(
      'pre',
      {
        style: {
          overflowX: 'scroll'
        }
      },
      [
        createElement(
          'code',
          {
            style: {
              fontSize: '12px',
              fontFamily:
                'SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace'
            }
          },
          [JSON.stringify(ctx.props, null, 2)]
        )
      ]
    )
  }
} as FunctionalComponentOptions
</script>
