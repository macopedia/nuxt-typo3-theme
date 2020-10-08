<template>
  <div :class="galleryCss" class="ce-gallery">
    <slot name="before" />
    <div v-if="gallery.position.vertical === 'below'" class="ce-gallery__text">
      <slot />
    </div>
    <div v-if="gallery.count.files" class="ce-gallery__container">
      <div
        v-for="(row, rowKey) in gallery.rows"
        :key="`${rowKey}-r`"
        class="ce-gallery__row"
      >
        <div
          v-for="(col, colKey) in row.columns"
          :key="`${colKey}-c`"
          class="ce-gallery__col"
        >
          <CeMediaFile :file="col" />
        </div>
      </div>
    </div>
    <div
      v-if="
        gallery.position.vertical === 'above' ||
        gallery.position.vertical === 'intext'
      "
      class="ce-gallery__text"
    >
      <slot />
    </div>
    <slot name="after" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { CeGalleryProp } from 'nuxt-typo3-ce/types'
import CeMediaFile from './CeMediaFile.vue'

export default defineComponent({
  name: 'CeGallery',
  components: {
    CeMediaFile
  },
  props: {
    gallery: {
      type: Object as PropType<CeGalleryProp>,
      default: () => ({})
    }
  },
  computed: {
    galleryCss (): (string | Record<string, boolean>)[] {
      return [
        `ce-gallery--horizontal-${this.gallery.position.horizontal}`,
        `ce-gallery--vertical-${this.gallery.position.vertical}`,
        { 'ce-gallery--no-wrap': this.gallery.position.noWrap },
        { 'ce-gallery--border': this.gallery.border.enabled }
      ]
    }
  }
})
</script>
