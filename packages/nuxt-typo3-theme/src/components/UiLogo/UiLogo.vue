<template>
  <T3NavLink class="ui-logo" to="/">
    <img
      :style="{ filter: invert ? 'invert(1)' : 'none' }"
      :width="width"
      :src="src"
      :alt="alt"/>
    </T3NavLink>
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
      default: 250
    }
  }
})
</script>

<style lang="scss">
.ui-logo {
  display: block;
}
</style>
