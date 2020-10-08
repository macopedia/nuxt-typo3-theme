<template>
  <div class="ce-textpic">
    <UiHero
      v-if="isHero || isHeroSubpage"
      v-bind="sharedProps"
      :bodytext="bodytext"
      :is-subpage="isHeroSubpage"
      :hero-image="heroImage"
    />
    <CeGallery v-else :gallery="gallery" :proportions="appearance.proportions">
      <CeHeader v-bind="sharedProps" />
      <CeHtmlParser :content="bodytext" />
    </CeGallery>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { PropAppearance } from './CeTextpic.type'
import CeTextpic from 'nuxt-typo3-ce/src/components/CeTextpic'
import CeGallery from '../CeGallery'
import UiHero from '../UiHero'
import { CeGalleryProp } from 'nuxt-typo3-ce/types'

const CeTextpicTheme = defineComponent({
  name: 'CeTextpic',
  components: {
    CeGallery,
    UiHero
  },
  extends: CeTextpic,
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
      const gallery = this.gallery as CeGalleryProp
      return gallery?.rows?.[1].columns?.[1].publicUrl
    }
  }
})

export default CeTextpicTheme as typeof CeTextpic & typeof CeTextpicTheme
</script>
