<template>
  <article>
    <UiNewsImage
      :description="imageDescription"
      :url="publicUrl"
      :date="date"
      :image-link="imageLink"
    />
    <slot name="content" />
    <slot name="actions" />
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import type { MediaElement } from '../UiNewsElement/UiNewsElement.types'

import UiNewsImage from '../UiNewsImage'

export default defineComponent({
  name: 'UiNewsWrapper',
  components: {
    UiNewsImage
  },
  props: {
    image: {
      type: Object as PropType<MediaElement>,
      default: null
    },
    date: {
      type: String,
      default: ''
    },
    imageLink: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageDescription (): string {
      return this.image?.properties.description || ''
    },
    publicUrl (): string | null {
      return (
        this.image?.images.listViewFeaturedImage.publicUrl ||
        this.image?.images.detailViewImage.publicUrl
      )
    }
  }
})
</script>
