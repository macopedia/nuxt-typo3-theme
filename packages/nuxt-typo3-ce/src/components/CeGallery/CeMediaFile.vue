<template>
  <component :is="mediaType" :file="file" />
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { CeGalleryFile } from 'nuxt-typo3-ce/types'
import CeMediaImage from './type/Image.vue'
import CeMediaYoutube from './type/Youtube.vue'
import CeMediaVimeo from './type/Vimeo.vue'
import CeMediaVideo from './type/Video.vue'
import CeMediaAudio from './type/Audio.vue'
export default defineComponent({
  name: 'CeMediaFile',
  components: {
    CeMediaImage,
    CeMediaYoutube,
    CeMediaVimeo,
    CeMediaVideo,
    CeMediaAudio
  },
  props: {
    file: {
      type: Object as PropType<CeGalleryFile>,
      default: () => ({})
    }
  },
  computed: {
    mediaType (): string {
      const mediaTypeMap: Record<string, string> = {
        video: 'CeMediaVideo',
        youtube: 'CeMediaYoutube',
        vimeo: 'CeMediaVimeo',
        audio: 'CeMediaAudio',
        image: 'CeMediaImage'
      }
      let mediaType = this.file.properties.type
      const mimeType = this.file.properties.mimeType

      if (mimeType && mimeType.includes('youtube')) {
        mediaType = 'youtube'
      }
      if (mimeType && mimeType.includes('vimeo')) {
        mediaType = 'vimeo'
      }
      return mediaTypeMap[mediaType] || 'CeMediaImage'
    }
  }
})
</script>
