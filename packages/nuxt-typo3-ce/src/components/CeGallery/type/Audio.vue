<template>
  <audio v-if="file && file.properties" class="ce-media-audio" controls>
    <source :src="file.publicUrl" :type="file.properties.mimeType" />
  </audio>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { CeGalleryFile } from 'nuxt-typo3-ce/types'

export default defineComponent({
  name: 'CeMediaAudio',
  inheritAttrs: true,
  props: {
    file: {
      type: Object as PropType<CeGalleryFile>,
      default: () => ({})
    }
  }
})
</script>
