<template>
  <iframe
    v-if="file && file.properties"
    id="ytplayer"
    :width="file.properties.dimensions.width || 640"
    :height="file.properties.dimensions.height || 360"
    :src="file.publicUrl"
    class="ce-media-video ce-media-youtube"
    type="text/html"
    frameborder="0"
  />
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { CeGalleryFile } from 'nuxt-typo3-ce/types'

export default defineComponent({
  name: 'CeMediaYoutube',
  inheritAttrs: true,
  props: {
    file: {
      type: Object as PropType<CeGalleryFile>,
      default: () => ({})
    }
  }
})
</script>
