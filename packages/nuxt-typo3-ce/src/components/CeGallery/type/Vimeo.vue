<template>
  <iframe
    v-if="file"
    :src="file.publicUrl"
    :width="file.properties.dimensions.width || 640"
    :height="file.properties.dimensions.height || 360"
    :title="file.properties.title || false"
    frameborder="0"
    class="ce-media-video ce-media-vimeo"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
  />
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { CeGalleryFile } from 'nuxt-typo3-ce/types'

export default defineComponent({
  name: 'CeMediaVimeo',
  inheritAttrs: true,
  props: {
    file: {
      type: Object as PropType<CeGalleryFile>,
      default: () => ({})
    }
  }
})
</script>
