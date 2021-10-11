<template>
  <div v-if="keepVisible">
    <div v-show="value" v-bind="$attrs" class="ui-layer" :style="style">
      <!-- @slot Layer content -->
      <slot />
    </div>
  </div>
  <div v-else-if="value" class="ui-layer" :style="style">
    <!-- @slot Layer content -->
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import useUiState from '../../composables/useUiState'
import useScrollLock from '../../composables/useScrollLock'
export default defineComponent({
  name: 'UiLayer',
  props: {
    /**
     * @model  Is Layer open - provided by v-model
     */
    value: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    /**
     * Keep visible content for rendering
     */
    keepVisible: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    /**
     * Layer below the header ref
     */
    keepHeader: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup () {
    const { getUiOption } = useUiState()
    const { lockScroll, unlockScroll } = useScrollLock()

    return {
      lockScroll,
      unlockScroll,
      getUiOption
    }
  },
  data () {
    return {
      headerHeight: 0
    }
  },
  computed: {
    /**
     * Mobile styles and classes
     */
    style (): Record<string, string | number> {
      const styles: Record<string, string | number> = {}
      if (this.keepHeader) {
        styles.top = `${this.headerHeight || 0}px`
      }
      return styles
    },
    /**
     * Header reference
     */
    header (): HTMLElement | null {
      return this.getUiOption('headerRef')
    }
  },
  watch: {
    // observe v-model
    value (val) {
      if (val) {
        this.open()
      } else {
        this.close()
      }
    }
  },

  methods: {
    open () {
      if (this.keepHeader) {
        this.headerHeight = this.header?.getBoundingClientRect().height || 0
      }
      this.lockScroll(this.$el)
    },
    close () {
      this.unlockScroll()
    }
  }
})
</script>
<style lang="scss">
@import '../../styles/shared/variables';

$ui-layer-bg: $palette-white !default;

:root {
  --ui-layer-bg: #{$ui-layer-bg};
}

.ui-layer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: auto;
  background-color: var(--ui-layer-bg);
  z-index: $z-index-overlay;
}
</style>
