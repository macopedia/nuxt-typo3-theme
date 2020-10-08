<template>
  <UiNavbar
    v-if="navigation"
    :links="navigation"
    :languages="languages"
    with-container
  >
    <template #logo>
      <UiLogo />
    </template>
  </UiNavbar>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'
import UiNavbar from 'nuxt-typo3-theme/src/components/UiNavbar'
import UiLogo from '../UiLogo'

export default defineComponent({
  name: 'CwHeader',
  components: {
    UiNavbar,
    UiLogo
  },
  computed: {
    ...mapGetters(['navigation', 'languages'])
  }
})
</script>
