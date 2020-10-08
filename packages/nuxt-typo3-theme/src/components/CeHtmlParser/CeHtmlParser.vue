<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="ce-rte text-rich" v-html="content" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CeHtmlParser from 'nuxt-typo3-ce/src/components/CeHtmlParser'

const CeHtmlParserTheme = defineComponent({
  name: 'CeHtmlParser',
  extends: CeHtmlParser
})
export default CeHtmlParserTheme as typeof CeHtmlParser &
  typeof CeHtmlParserTheme
</script>
