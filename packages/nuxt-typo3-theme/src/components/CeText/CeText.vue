<template>
  <div class="ce-text">
    <CeHeader v-bind="sharedProps" />
    <CeHtmlParser :content="bodytext" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CeText from 'nuxt-typo3-ce/src/components/CeText'

const CeTextTheme = defineComponent({
  name: 'CeText',
  extends: CeText
})
export default CeTextTheme as typeof CeText & typeof CeTextTheme
</script>
