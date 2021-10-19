<template>
  <hr
    class="ce-div"
    :class="{ 'ce-div--layout-1': appearance.layout === 'layout-1' }"
  />
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import CeDiv from 'nuxt-typo3-ce/src/components/CeDiv'
import { PropAppearance } from './CeDiv.type'

export default defineComponent({
  name: 'CeDiv',
  extends: CeDiv,
  props: {
    appearance: {
      type: Object as PropType<PropAppearance>,
      default: () => ({ layout: 'default' })
    }
  }
})
</script>
<style lang="scss">
@import '../../styles/shared';

$divider-color: $palette-black;
$divider-color-layout-1: $palette-gallery;

:root {
  --color-divider: #{$divider-color};
  --color-divider-layout-1: #{$divider-color-layout-1};
}

.ce-div {
  display: block;
  height: 1px;
  background: var(--color-divider);
  border: none;

  &--layout-1 {
    background: var(--color-divider-layout-1);
  }
}
</style>
