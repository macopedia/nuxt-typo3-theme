<template functional>
  <UiFrame v-bind="props"><slot /></UiFrame>
</template>
<script>
import CeFrame from 'nuxt-typo3-theme/src/components/CeFrame/CeFrame.vue'
export default {
  ...CeFrame
}
</script>
