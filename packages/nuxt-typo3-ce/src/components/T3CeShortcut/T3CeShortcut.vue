<template functional>
  <div class="t3-ce-shortcut">
    <T3Renderer :content="props.shortcut" />
  </div>
</template>
<script lang="ts">
import { FunctionalComponentOptions } from 'vue/types'

export default {
  name: 'T3CeShortcut',
  functional: true,
  props: {
    shortcut: {
      type: Array,
      required: true,
      default: () => []
    }
  }
} as FunctionalComponentOptions
</script>
