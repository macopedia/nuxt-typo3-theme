<script lang="ts">
import {
  VNode,
  CreateElement,
  RenderContext,
  FunctionalComponentOptions
} from 'vue/types'
export default {
  name: 'CeFrame',
  functional: true,
  render (createElement: CreateElement, ctx: RenderContext): VNode | VNode[] {
    return createElement(
      'div',
      {
        style: {
          position: 'relative'
        },
        class: 't3p-debug'
      },
      [
        createElement(
          'code',
          {
            style: {
              width: '100%',
              border: '2px solid #E53E3E',
              color: '#000',
              display: 'inline-block',
              wordBreak: 'break-word',
              position: 'absolute',
              fontSize: '12px',
              fontFamily:
                'SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace',
              padding: '10px',
              boxSizing: 'border-box',
              top: 0,
              left: 0,
              backgroundColor: '#FED7D7'
            }
          },
          JSON.stringify(ctx.props)
        ),
        [ctx.children]
      ]
    )
  }
} as FunctionalComponentOptions
</script>
