<template>
  <component :is="htmlTag" :to="toAttribute">
    <figure class="ui-news-image">
      <img
        v-if="url"
        class="ui-news-image__image"
        :src="url"
        :alt="alt || description"
      />
      <UiCaption
        class="ui-news-image__title"
        tag="figcaption"
        :description="description"
        :date="date"
      />
    </figure>
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import UiCaption from '../../UiCaption'

export default defineComponent({
  name: 'UiNewsImage',
  components: {
    UiCaption
  },
  props: {
    description: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    imageLink: {
      type: String,
      default: ''
    }
  },
  computed: {
    showCaption (): boolean {
      return !!this.description || !!this.date
    },
    htmlTag (): string {
      return this.imageLink ? 'nuxt-link' : 'div'
    },
    toAttribute (): string | null {
      return this.imageLink || null
    }
  }
})
</script>

<style lang="scss">
.ui-news-image {
  margin: 0;

  &__title {
    display: flex;
    margin: var(--space-2) 0 var(--space-lg) 0;
  }

  &__image {
    width: 100%;
    min-height: 304px;
    object-fit: cover;
  }
}
</style>
