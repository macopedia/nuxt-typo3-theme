<script lang="ts">
import type { CreateElement, RenderContext, VNode, PropType } from 'vue'
export default {
  name: 'CeLink',
  functional: true,
  props: {
    /**
     * Href link
     */
    to: {
      type: String,
      required: true
    },
    /**
     * String rules to detect external link
     */
    rules: {
      type: Array as PropType<string[]>,
      required: false,
      default: (): string[] => []
    },
    /**
     * Force external
     */
    external: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render (h: CreateElement, ctx: RenderContext): VNode {
    const { props, children, data } = ctx
    const defaultRules = ['http(s)?:', 'ftp:', 'mailto:']
    const externalRules = props.rules.length
      ? Array.prototype.concat(defaultRules, props.rules)
      : defaultRules
    const externalTest = new RegExp(externalRules.join('|'), 'i')
    const isExternal = props.external || externalTest.test(props.to)
    const to = props.to || '/' // fabllack

    return h(
      isExternal ? 'a' : 'NuxtLink',
      {
        ...data,
        ...(!isExternal && { props: { ...props, to } }),
        ...(isExternal && {
          attrs: {
            ...data.attrs,
            href: to,
            target: '_blank',
            rel: 'noopener noreferrer'
          }
        })
      },
      children
    )
  }
}
</script>
