<template>
  <div class="t3-ce-text">
    <T3CeHeader v-bind="sharedProps" />
    <T3CeHtmlParser :content="bodytext" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import T3CeText from 'nuxt-typo3-ce/src/components/T3CeText'

const CeTextTheme = defineComponent({
  name: 'T3CeText',
  extends: T3CeText
})
export default CeTextTheme as typeof T3CeText & typeof CeTextTheme
</script>
