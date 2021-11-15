<template>
  <CeLink class="ui-logo" to="/">
    <img
      :style="{ filter: invert ? 'invert(1)' : 'none', width: `${width}px` }"
      :src="src"
      :alt="alt"
    />
  </CeLink>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'UiLogo',
  props: {
    invert: {
      type: Boolean,
      default: false
    },
    alt: {
      type: String,
      default: 'Logo image'
    },
    src: {
      type: String,
      required: false,
      default: require('../../assets/logo.svg')
    },
    width: {
      type: Number,
      default: 200
    }
  }
})
</script>

<style lang="scss">
.ui-logo {
  display: block;
}
</style>
