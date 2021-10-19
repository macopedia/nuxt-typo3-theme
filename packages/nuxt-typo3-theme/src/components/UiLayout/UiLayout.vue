<template>
  <div class="ui-layout">
    <slot name="header" />
    <div class="ui-layout__content">
      <slot />
    </div>
    <slot name="footer" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'UiLayout'
})
</script>

<style lang="scss">
.ui-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__content {
    flex: 1 0 auto;
  }
}
</style>
