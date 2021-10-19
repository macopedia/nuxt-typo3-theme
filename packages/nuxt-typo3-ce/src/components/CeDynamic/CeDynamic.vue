<script lang="ts">
import { CreateElement, VNode } from 'vue/types'
import { defineComponent, PropType } from '@vue/composition-api'
import type { CeDynamicData } from './CeDynamic.types'

export const getContentElementTag = (type: string): string => {
  // content element components are registered in CamelCase like "CeMyComponent",
  // but the type is coming as "my_component" so we have to transform the name and the tag
  const typeNameCamelCase = type.replace(/_([a-z])/g, g => g[1].toUpperCase())

  const componentName = `Ce${
    typeNameCamelCase[0].toUpperCase() + typeNameCamelCase.slice(1)
  }`

  return componentName
}

export default defineComponent({
  props: {
    /**
     * ContentElement data
     */
    data: {
      type: Object as PropType<CeDynamicData>,
      required: true
    },
    /**
     * Type of current ContentElement
     */
    type: {
      type: String,
      default: 'text'
    },
    /**
     * Index of current ContentElement
     */
    index: {
      type: Number,
      default: -1
    }
  },
  render (createElement: CreateElement): VNode {
    const createComponent = () => {
      let componentName = getContentElementTag(this.type)

      if (
        this.$root.$options.components &&
        !this.$root.$options.components[componentName]
      ) {
        componentName = 'CeDefault'
      }

      return createElement(componentName, {
        attrs: {
          id: `${componentName}${this.data.id}`
        },
        props: {
          ...{
            id: this.data.id,
            type: this.data.type,
            appearance: this.data.appearance,
            index: this.index
          },
          ...this.data.content
        }
      })
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (this.$nuxt && this.$nuxt.$typo3.options.debug) {
      return createElement('CeDebug', { props: this.data }, [createComponent()])
    }

    return createComponent()
  }
})
</script>
