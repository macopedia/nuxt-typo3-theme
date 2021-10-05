<template>
  <UiLayout>
    <template #header>
      <CwHeader />
    </template>
    <UiErrorPage :error="error" :error-additional-info="mergedi18n" />
    <template #footer>
      <CwFooter />
    </template>
  </UiLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import UiLayout from 'nuxt-typo3-theme/src/components/UiLayout/UiLayout.vue'
import CwHeader from 'nuxt-typo3-theme/src/components/CwHeader/CwHeader.vue'
import CwFooter from 'nuxt-typo3-theme/src/components/CwFooter/CwFooter.vue'
import UiErrorPage from 'nuxt-typo3-theme/src/components/UiErrorPage/UiErrorPage.vue'

export default Vue.extend({
  components: {
    UiLayout,
    CwHeader,
    CwFooter,
    UiErrorPage
  },
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => ({
        code: '404',
        message:
          'Strona, której szukasz nie istnieje, jest tymczasowo niedostępna lub znajduje się pod innym adresem'
      })
    },
    i18n: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    mergedi18n (): Record<string, string> {
      const errorPageTranslations = {
        nothingIsHere: 'Nic tu nie ma',
        goBackToHomepage: 'Wróc do strony głównej'
      }

      return { ...errorPageTranslations, ...this.i18n }
    }
  }
})
</script>
