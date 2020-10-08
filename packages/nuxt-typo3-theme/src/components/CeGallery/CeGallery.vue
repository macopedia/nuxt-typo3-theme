<template>
  <UiRow :class="galleryCss" class="ce-gallery">
    <slot name="before" />
    <UiCol
      v-if="$slots.default"
      :xl="
        (isInOneRow && (orderIsReversed ? rightProportion : leftProportion)) ||
        null
      "
      :order="orderIsReversed ? '2' : '1'"
      class="ce-gallery__text"
    >
      <slot />
    </UiCol>
    <UiCol
      v-if="gallery.count.files"
      class="ce-gallery__container"
      :class="[`ce-gallery__${colCount}-cols`]"
      :xl="
        (isInOneRow && (orderIsReversed ? leftProportion : rightProportion)) ||
        null
      "
      :order="orderIsReversed ? '1' : '2'"
    >
      <template v-for="(row, rowKey) in gallery.rows">
        <div
          v-for="(col, colKey) in row.columns"
          :key="`${rowKey}-r-${colKey}-c`"
          class="ce-gallery__col"
        >
          <CeMediaFile :file="col" />
        </div>
      </template>
    </UiCol>
    <slot name="after" />
  </UiRow>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { CeGalleryProp } from 'nuxt-typo3-ce/types'
import CeGallery from 'nuxt-typo3-ce/src/components/CeGallery'

const CeGalleryTheme = defineComponent({
  name: 'CeGallery',
  extends: CeGallery,
  props: {
    proportions: {
      type: String,
      default: null
    },
    gallery: {
      type: Object as PropType<CeGalleryProp>,
      required: true
    }
  },
  computed: {
    colCount (): number {
      return this.gallery?.count?.columns || 1
    },
    isInOneRow (): boolean {
      return this.gallery?.position?.noWrap
    },
    orderIsReversed (): boolean {
      return (
        (!this.isInOneRow && this.gallery.position.vertical !== 'below') ||
        (this.isInOneRow && this.gallery.position.horizontal === 'left')
      )
    },
    leftProportion (): string {
      const proportions = this.proportions.match(
        /([1-9]{1,2})-([1-9]{1,2})_[1-9]{1,2}-[1-9]{1,2}/
      ) || ['1-2_1-2', '1', '2'] // default proportion 1-2_1-2
      const [, num, denum] = proportions

      return `${Math.round((+num / +denum) * 12)}`
    },
    rightProportion (): string {
      return `${12 - +this.leftProportion}`
    }
  }
})

export default CeGalleryTheme as typeof CeGallery & typeof CeGalleryTheme
</script>

<style lang="scss">
@import '../../styles/shared';

.ce-gallery {
  &__container {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: var(--space-8);
    row-gap: var(--space-4);
  }

  &__2-cols {
    @include media-query(md) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  &__3-cols {
    @include media-query(sm) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include media-query(xl) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &__4-cols {
    @include media-query(sm) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include media-query(xl) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &__5-cols {
    @include media-query(sm) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include media-query(md) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @include media-query(xl) {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  }

  &__6-cols {
    @include media-query(sm) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include media-query(md) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @include media-query(xl) {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
  }

  &__col {
    justify-items: center;

    .ce-media-image {
      display: flex;
      flex-direction: column;
    }

    img {
      height: auto;
      margin-bottom: var(--space-2);
    }

    figure {
      margin: 0;
    }

    figcaption {
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--space-3);
      text-align: left;
    }
  }

  &--horizontal-center {
    figcaption {
      text-align: center;
    }

    .ce-media-image {
      align-items: center;
    }
  }
}
</style>
