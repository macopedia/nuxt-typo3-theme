<template>
  <video class="ce-media-video" controls>
    <source
      :src="file.publicUrl"
      :height="file.properties.dimensions.height"
      :width="file.properties.dimensions.width"
      :type="file.properties.mimeType"
    />
  </video>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { CeGalleryFile } from 'nuxt-typo3-ce/types'

export default defineComponent({
  name: 'CeMediaVideo',
  inheritAttrs: true,
  props: {
    file: {
      type: Object as PropType<CeGalleryFile>,
      default: () => ({})
    }
  }
})
</script>
