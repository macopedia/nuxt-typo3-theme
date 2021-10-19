<template>
  <UiRow class="ui-news-list">
    <UiCol v-for="element in news" :key="element.uid" md="6" lg="4">
      <UiNewsElement class="ui-news-list__article" :news-element="element" />
    </UiCol>
  </UiRow>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

import type { NewsElement } from '../UiNewsElement/UiNewsElement.types'

import UiNewsElement from '../UiNewsElement'
import { UiRow, UiCol } from '../../UiGrid'

export default defineComponent({
  name: 'UiNewsList',
  components: {
    UiNewsElement,
    UiRow,
    UiCol
  },
  props: {
    news: {
      type: Array as PropType<NewsElement[]>,
      required: true
    }
  }
})
</script>

<style lang="scss">
.ui-news-list {
  &__article {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-bottom: var(--space-5);
  }

  .ui-news-image__title {
    margin-bottom: var(--space-md);
  }
}
</style>
