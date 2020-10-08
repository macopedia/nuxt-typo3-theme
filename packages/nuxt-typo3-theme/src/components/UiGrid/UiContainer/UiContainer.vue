<template>
  <div class="container">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'

const UiContainer = defineComponent({
  name: 'UiContainer',
  provide () {
    return {
      gridSize: computed(() => this.gridSize)
    }
  },
  props: {
    gridSize: {
      type: String as PropType<string>,
      default: '12'
    }
  }
})
export default UiContainer as typeof UiContainer
</script>

<style lang="scss">
@use "sass:map";
@use "sass:math";

@import '../../../styles/shared';

.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: #{math.div($grid-gutter-width, 2)};
  padding-right: #{math.div($grid-gutter-width, 2)};

  @include media-query(sm) {
    max-width: map.get($container-max-widths, sm);
  }

  @include media-query(md) {
    max-width: map.get($container-max-widths, md);
  }

  @include media-query(lg) {
    max-width: map.get($container-max-widths, lg);
  }

  @include media-query(xl) {
    max-width: map.get($container-max-widths, xl);
  }

  @include media-query(xxl) {
    max-width: map.get($container-max-widths, 'xxl');
  }
}
</style>
