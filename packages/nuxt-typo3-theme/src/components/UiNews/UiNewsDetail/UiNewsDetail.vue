<template>
  <UiNewsWrapper :image="mainImageData" :date="article.detail.datetime">
    <template #content>
      <CeText
        class="ui-news-detail__text"
        :header-layout="1"
        :header="article.detail.title"
        :bodytext="article.detail.bodytext"
      />
      <slot />
    </template>
  </UiNewsWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import type { MediaElement } from '../UiNewsElement/UiNewsElement.types'
import type { NewsDetailElement } from './UiNewsDetail.types'

import UiNewsWrapper from '../UiNewsWrapper'

export default defineComponent({
  name: 'UiNewsDetail',
  components: {
    UiNewsWrapper
  },
  props: {
    article: {
      type: Object as PropType<NewsDetailElement>,
      required: true
    }
  },
  computed: {
    datailViewImages (): MediaElement[] {
      return this.article.detail.media.filter(
        mediaElement => mediaElement.images.detailViewImage.publicUrl
      )
    },
    mainImageData (): MediaElement {
      return this.datailViewImages[0]
    }
  }
})
</script>

<style lang="scss">
.ui-news-detail__text {
  h1 {
    font-size: var(--font-size-4xl);
    line-height: var(--line-height-4xl);
  }
}
</style>
