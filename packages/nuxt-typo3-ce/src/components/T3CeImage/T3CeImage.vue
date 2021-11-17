<template>
  <div class="t3-ce-image">
    <T3CeGallery :gallery="gallery" />
    <T3CeHeader v-bind="sharedProps" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import T3CeGallery from '../T3CeGallery'
import type { T3CeSharedProps } from 'nuxt-typo3-ce/types'
import useSharedProps, {
  getSharedProps
} from '../../composables/useSharedProps'

export default defineComponent({
  name: 'T3CeImage',
  components: {
    T3CeGallery
  },
  props: {
    ...useSharedProps(),
    gallery: {
      type: Object,
      default: () => ({})
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
