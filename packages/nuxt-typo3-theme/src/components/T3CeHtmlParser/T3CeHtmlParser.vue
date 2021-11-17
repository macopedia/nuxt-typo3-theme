<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="t3-ce-rte text-rich" v-html="content" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import T3CeHtmlParser from 'nuxt-typo3-ce/src/components/T3CeHtmlParser'

const CeHtmlParserTheme = defineComponent({
  name: 'T3CeHtmlParser',
  extends: T3CeHtmlParser
})
export default CeHtmlParserTheme as typeof T3CeHtmlParser &
  typeof CeHtmlParserTheme
</script>
