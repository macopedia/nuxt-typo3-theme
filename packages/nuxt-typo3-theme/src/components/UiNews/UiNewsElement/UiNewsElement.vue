<template>
  <UiNewsWrapper
    :image="mediaFile"
    :date="newsElement.datetime"
    :image-link="newsElement.slug"
  >
    <template #content>
      <CeText
        class="ui-news-element__text"
        :header-layout="2"
        :header-link="{ url: newsElement.slug }"
        :header="newsElement.title"
        :bodytext="newsElement.teaser"
      />
    </template>
    <template #actions>
      <UiButton :to="newsElement.slug" class="ui-news-element__btn">
        {{ mergedi18n.readMoreButton }}
      </UiButton>
    </template>
  </UiNewsWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

import type { MediaElement, NewsElement } from './UiNewsElement.types'

import CeText from '../../CeText'
import UiButton from '../../UiButton'
import UiNewsWrapper from '../UiNewsWrapper'

export default defineComponent({
  name: 'UiNewsElement',
  components: {
    CeText,
    UiButton,
    UiNewsWrapper
  },
  props: {
    newsElement: {
      type: Object as PropType<NewsElement>,
      required: true
    },
    i18n: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    mergedi18n (): Record<string, string> {
      const buttonTranslations = {
        readMoreButton: 'Dowiedz się więcej'
      }

      return { ...buttonTranslations, ...this.i18n }
    },
    mediaFile (): MediaElement {
      return this.newsElement.media[0]
    }
  }
})
</script>

<style lang="scss">
.ui-news-element {
  &__btn {
    width: 100%;
    min-width: auto;
    margin-top: auto;
    padding-right: var(--space-15);
    padding-left: var(--space-15);
  }

  &__text {
    margin: 0 0 var(--space-sm) 0;
  }
}
</style>
