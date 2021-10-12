<template>
  <UiNavbar
    v-if="navigation"
    :links="navigation"
    :languages="languages && languages.length > 1 ? languages : []"
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
import type { RootState } from '../../store/index'
import UiNavbar from 'nuxt-typo3-theme/src/components/UiNavbar'
import UiLogo from '../UiLogo'

export default defineComponent({
  name: 'CwHeader',
  components: {
    UiNavbar,
    UiLogo
  },
  computed: {
    ...mapGetters(['navigation']),
    languages () {
      const state = this.$store.state as RootState
      let languages = state.typo3?.initial?.languages
      if (languages) {
        languages = languages.filter(link =>
          this.$typo3?.i18n?.locales?.includes(link.twoLetterIsoCode)
        )
      }
      return languages
    }
  }
})
</script>
