<template>
  <div class="t3-ce-html">
    <T3CeHtmlParser :content="bodytext" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'T3CeHtml',
  props: {
    bodytext: {
      type: String,
      default: ''
    }
  }
})
</script>
