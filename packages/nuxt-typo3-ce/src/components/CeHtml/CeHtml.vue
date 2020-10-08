<template>
  <div class="ce-html">
    <CeHtmlParser :content="bodytext" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'CeHtml',
  props: {
    bodytext: {
      type: String,
      default: ''
    }
  }
})
</script>
