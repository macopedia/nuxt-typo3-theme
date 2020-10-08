<template>
  <div class="ce-textpic">
    <CeGallery :gallery="gallery">
      <CeHeader v-bind="sharedProps" />
      <CeHtmlParser :content="bodytext" />
    </CeGallery>
  </div>
</template>
<script lang="ts">
import CeGallery from '../CeGallery'
import { defineComponent, PropType } from '@vue/composition-api'
import { CeSharedProps, CeGalleryProp } from 'nuxt-typo3-ce/types'
import useSharedProps, {
  getSharedProps
} from '../../composables/useSharedProps'

export default defineComponent({
  name: 'CeTextpic',
  components: {
    CeGallery
  },
  props: {
    ...useSharedProps(),
    gallery: {
      type: Object as PropType<CeGalleryProp>,
      required: true
    },
    bodytext: {
      type: String,
      required: true
    }
  },
  setup (props: CeSharedProps) {
    const sharedProps = getSharedProps(props)
    return {
      sharedProps
    }
  }
})
</script>
