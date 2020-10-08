<template>
  <div class="col-12" :class="[colClasses]">
    <slot />
    <UiOffset v-if="offset" />
    <UiOrder v-if="order" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

const UiCol = defineComponent({
  name: 'UiCol',
  props: {
    sm: {
      type: String,
      default: null
    },
    md: {
      type: String,
      default: null
    },
    lg: {
      type: String,
      default: null
    },
    xl: {
      type: String,
      default: null
    },
    xxl: {
      type: String,
      default: null
    },
    offset: {
      type: String,
      default: null
    },
    order: {
      type: String,
      default: null
    },
    col: {
      type: String,
      default: null
    }
  },
  computed: {
    colClasses (): string[] {
      const bpClasses = ['sm', 'md', 'lg', 'xl', 'xxl']
        .filter(key => this[key] !== null)
        .map(bp => `col-${bp}-${this[bp]}`)
      const utilClasses = ['offset', 'order']
        .filter(key => this[key] !== null)
        .map(key => {
          return `${key}-${this[key]}`
        })
      const colClass = this.col !== null ? [`col-${this.col}`] : []
      return [...colClass, ...bpClasses, ...utilClasses]
    }
  }
})
export default UiCol as typeof UiCol
</script>

<style lang="scss">
/* Modified Bootstrap Grid 4.6.0 */
@import '../../../styles/shared';
@import '../shared/breakpoints';
@import '../shared/grid';
@import './UiCol';

@include make-grid-columns();
</style>
