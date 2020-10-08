<template>
  <div class="ce-image">
    <CeGallery :gallery="gallery" />
    <CeHeader v-bind="sharedProps" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CeGallery from '../CeGallery'
import type { CeSharedProps } from '../../composables/useSharedProps/sharedProps.types'
import useSharedProps, {
  getSharedProps
} from '../../composables/useSharedProps'

export default defineComponent({
  name: 'CeImage',
  components: {
    CeGallery
  },
  props: {
    ...useSharedProps(),
    gallery: {
      type: Object,
      default: () => ({})
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
