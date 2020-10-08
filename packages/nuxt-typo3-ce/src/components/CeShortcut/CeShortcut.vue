<template functional>
  <div class="ce-shortcut">
    <CeRenderer :content="props.shortcut" />
  </div>
</template>
<script lang="ts">
import { FunctionalComponentOptions, PropType } from 'vue/types'
import type { CeShortcutData } from './CeShortcut.types'

export default {
  name: 'CeShortcut',
  functional: true,
  props: {
    shortcut: {
      type: Array as PropType<CeShortcutData>,
      required: true,
      default: () => []
    }
  }
} as FunctionalComponentOptions
</script>
