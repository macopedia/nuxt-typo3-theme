<template>
  <div :class="galleryCss" class="t3-ce-gallery">
    <slot name="before" />
    <div v-if="gallery.position.vertical === 'below'" class="t3-ce-gallery__text">
      <slot />
    </div>
    <div v-if="gallery.count.files" class="t3-ce-gallery__container">
      <div
        v-for="(row, rowKey) in gallery.rows"
        :key="`${rowKey}-r`"
        class="t3-ce-gallery__row"
      >
        <div
          v-for="(col, colKey) in row.columns"
          :key="`${colKey}-c`"
          class="t3-ce-gallery__col"
        >
          <T3MediaFile :file="col" />
        </div>
      </div>
    </div>
    <div
      v-if="
        gallery.position.vertical === 'above' ||
        gallery.position.vertical === 'intext'
      "
      class="t3-ce-gallery__text"
    >
      <slot />
    </div>
    <slot name="after" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { T3CeGalleryProp } from 'nuxt-typo3-ce/types'

export default defineComponent({
  name: 'CeGallery',
  props: {
    gallery: {
      type: Object as PropType<T3CeGalleryProp>,
      default: () => ({})
    }
  },
  computed: {
    galleryCss (): (string | Record<string, boolean>)[] {
      return [
        `t3-ce-gallery--horizontal-${this.gallery.position.horizontal}`,
        `t3-ce-gallery--vertical-${this.gallery.position.vertical}`,
        { 't3-ce-gallery--no-wrap': this.gallery.position.noWrap },
        { 't3-ce-gallery--border': this.gallery.border.enabled }
      ]
    }
  }
})
</script>
