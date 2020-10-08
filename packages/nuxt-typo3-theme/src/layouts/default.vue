<template>
  <UiLayout>
    <template #header>
      <CwHeader />
    </template>
    <CwBreadcrumbs v-if="showBreadcrumbs" />
    <nuxt />
    <template #footer>
      <CwFooter />
    </template>
  </UiLayout>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import UiLayout from 'nuxt-typo3-theme/src/components/UiLayout/UiLayout.vue'
import CwHeader from 'nuxt-typo3-theme/src/components/CwHeader/CwHeader.vue'
import CwFooter from 'nuxt-typo3-theme/src/components/CwFooter/CwFooter.vue'
import CwBreadcrumbs from 'nuxt-typo3-theme/src/components/CwBreadcrumbs/CwBreadcrumbs.vue'
export default Vue.extend({
  components: {
    UiLayout,
    CwHeader,
    CwFooter,
    CwBreadcrumbs
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.$typo3.i18n.locale
      }
    }
  },
  computed: {
    ...mapGetters(['breadcrumbs']),
    showBreadcrumbs () {
      return this.breadcrumbs.length > 1
    }
  }
})
</script>
