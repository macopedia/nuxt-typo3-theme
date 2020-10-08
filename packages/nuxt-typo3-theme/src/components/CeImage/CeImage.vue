<template>
  <div class="ce-image">
    <CeHeader v-bind="sharedProps" />
    <CeGallery :gallery="gallery" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CeImage from 'nuxt-typo3-ce/src/components/CeImage'
import CeGallery from '../CeGallery'

const CeImageTheme = defineComponent({
  name: 'CeImage',
  components: {
    CeGallery
  },
  extends: CeImage
})

export default CeImageTheme as typeof CeImage & typeof CeImageTheme
</script>
