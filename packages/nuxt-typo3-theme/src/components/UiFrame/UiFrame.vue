<template functional>
  <div
    :class="[
      'ui-frame',
      `frame-${props.frameClass}`,
      `layout-${props.layout}`,
      `space-before-${
        props.spaceBefore.length ? props.spaceBefore : 'default'
      }`,
      `space-after-${props.spaceAfter.length ? props.spaceAfter : 'default'}`
    ]"
  >
    <div
      class="frame-inner"
      :class="[{ container: props.frameClass !== 'full-width' }]"
    >
      <hr v-if="props.frameClass === 'ruler-before'" />

      <div
        v-if="props.frameClass.includes('indent')"
        :class="{ [props.frameClass]: props.frameClass.includes('indent') }"
      >
        <slot />
      </div>
      <slot v-else />

      <hr v-if="props.frameClass === 'ruler-after'" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import useAppearanceProps from 'nuxt-typo3-ce/src/composables/useAppearanceProps'
export default Vue.extend({
  name: 'UiFrame',
  functional: true,
  props: {
    ...useAppearanceProps()
  }
})
</script>
<style lang="scss">
.ui-frame {
  &.space-before {
    &-extra-small {
      margin-top: var(--space-xs);
    }

    &-small {
      margin-top: var(--space-sm);
    }

    &-medium {
      margin-top: var(--space-md);
    }

    &-large {
      margin-top: var(--space-lg);
    }

    &-extra-large {
      margin-top: var(--space-xl);
    }
  }

  &.space-after {
    &-extra-small {
      margin-bottom: var(--space-xs);
    }

    &-small {
      margin-bottom: var(--space-sm);
    }

    &-medium {
      margin-bottom: var(--space-md);
    }

    &-large {
      margin-bottom: var(--space-lg);
    }

    &-extra-large {
      margin-bottom: var(--space-xl);
    }
  }

  .indent {
    &,
    &-right,
    &-left {
      padding-right: 15%;
      padding-left: 15%;
    }

    &-right {
      padding-right: 33%;
      padding-left: 1.6rem; // get variable from grid
    }

    &-left {
      padding-right: 1.6rem; // get variable from grid
      padding-left: 33%;
    }
  }
}
</style>
