<template>
  <component :is="tag" class="row" :class="{ 'no-gutters': noGutters }">
    <slot />
  </component>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

const UiRow = defineComponent({
  name: 'UiRow',
  props: {
    noGutters: {
      type: Boolean,
      default: false
    },

    tag: {
      type: String,
      default: 'div'
    }
  }
})
export default UiRow as typeof UiRow
</script>

<style lang="scss">
@use "sass:math";

@import '../../../styles/shared';

.row {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin-right: #{- (math.div($grid-gutter-width, 2))};
  margin-left: #{- (math.div($grid-gutter-width, 2))};

  &.no-gutters {
    > .col,
    > [class*='col-'] {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
  }
}
</style>
