<template>
  <div class="t3-ce-textpic">
    <T3CeGallery :gallery="gallery">
      <T3CeHeader v-bind="sharedProps" />
      <T3CeHtmlParser :content="bodytext" />
    </T3CeGallery>
  </div>
</template>
<script lang="ts">
import T3CeGallery from '../T3CeGallery'
import { defineComponent, PropType } from '@vue/composition-api'
import { T3CeSharedProps, T3CeGalleryProp } from 'nuxt-typo3-ce/types'
import useSharedProps, {
  getSharedProps
} from '../../composables/useSharedProps'

export default defineComponent({
  name: 'CeTextpic',
  components: {
    T3CeGallery
  },
  props: {
    ...useSharedProps(),
    gallery: {
      type: Object as PropType<T3CeGalleryProp>,
      required: true
    },
    bodytext: {
      type: String,
      required: true
    }
  },
  setup (props: T3CeSharedProps) {
    const sharedProps = getSharedProps(props)
    return {
      sharedProps
    }
  }
})
</script>
