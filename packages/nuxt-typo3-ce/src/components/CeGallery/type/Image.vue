<template>
  <div class="ce-media-image">
    <component
      :is="file.properties.link ? 'CeLink' : 'div'"
      v-if="file && file.properties"
      :to="file.properties.link"
    >
      <figure>
        <img
          :src="file.publicUrl"
          :height="file.properties.dimensions.height"
          :width="file.properties.dimensions.width"
          :alt="file.properties.alternative || ''"
          :title="file.properties.title"
        />
        <figcaption v-if="file.properties.description">
          {{ file.properties.description }}
        </figcaption>
      </figure>
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { CeGalleryFile } from 'nuxt-typo3-ce/types'

export default defineComponent({
  name: 'CeMediaImage',
  inheritAttrs: true,
  props: {
    file: {
      type: Object as PropType<CeGalleryFile>,
      default: () => ({})
    }
  }
})
</script>
