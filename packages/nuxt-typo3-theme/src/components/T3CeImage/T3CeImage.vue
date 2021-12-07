<template>
  <div class="t3-ce-image">
    <T3CeHeader v-bind="sharedProps" />
    <T3CeGallery :gallery="gallery" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import T3CeImage from 'nuxt-typo3-ce/src/components/T3CeImage'
import T3CeGallery from '../T3CeGallery'

const CeImageTheme = defineComponent({
  name: 'T3CeImage',
  components: {
    T3CeGallery
  },
  extends: T3CeImage
})

export default CeImageTheme as typeof T3CeImage & typeof CeImageTheme
</script>
