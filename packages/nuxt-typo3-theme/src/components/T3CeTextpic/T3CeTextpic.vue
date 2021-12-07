<template>
  <div class="t3-ce-textpic">
    <UiHero
      v-if="isHero || isHeroSubpage"
      v-bind="sharedProps"
      :bodytext="bodytext"
      :is-subpage="isHeroSubpage"
      :hero-image="heroImage"
    />
    <T3CeGallery v-else :gallery="gallery" :proportions="appearance.proportions">
      <T3CeHeader v-bind="sharedProps" />
      <T3CeHtmlParser :content="bodytext" />
    </T3CeGallery>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { PropAppearance } from './T3CeTextpic.type'
import T3CeTextpic from 'nuxt-typo3-ce/src/components/T3CeTextpic'
import T3CeGallery from '../T3CeGallery'
import UiHero from '../UiHero'
import { T3CeGalleryProp } from 'nuxt-typo3-ce/types'

const T3CeTextpicTheme = defineComponent({
  name: 'T3CeTextpic',
  components: {
    T3CeGallery,
    UiHero
  },
  extends: T3CeTextpic,
  props: {
    appearance: {
      type: Object as PropType<PropAppearance>,
      required: true
    }
  },
  computed: {
    isHero (): boolean {
      return this.appearance.layout === 'hero'
    },
    isHeroSubpage (): boolean {
      return this.appearance.layout === 'hero-subpage'
    },
    heroImage (): string {
      const gallery = this.gallery as T3CeGalleryProp
      return gallery?.rows?.[1].columns?.[1].publicUrl
    }
  }
})

export default T3CeTextpicTheme as typeof T3CeTextpic & typeof T3CeTextpicTheme
</script>
