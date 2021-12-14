<template>
  <UiButton :to="link" :varinat="variant" :size="size">
    {{text }}
  </UiButton>
</template>
<script lang="ts">
import { PropType, defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
    variant: {
      type: String as PropType<'primary' | 'inverted'>,
      default: 'primary'
    },
    size: {
      type: String as PropType<'large' | 'medium' | 'small' | 'extra-small'>,
      default: 'medium'
    },
    link: {
      type: String,
      required: true
    }
  }
})
</script>
