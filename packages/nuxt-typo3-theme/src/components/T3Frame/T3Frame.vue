<template functional>
  <UiFrame v-bind="props"><slot /></UiFrame>
</template>
<script>
import T3Frame from 'nuxt-typo3-theme/src/components/T3Frame/T3Frame.vue'
export default {
  ...T3Frame
}
</script>
