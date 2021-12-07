<template>
  <section>
    <T3CeHeader
      :header-layout="3"
      :header="header"
      :subheader="subheader"
      :header-link="headerLink"
    />
    <UiFilesList
      :files="media"
      :target="target"
      :display-description="displayDescription"
      :display-file-size-information="displayFileSizeInformation"
    >
      <template #image="{ file }">
        <img
          v-if="displayThumbnailOrExtension(file.properties.type)"
          :src="getUrlOrExtension(file.properties.extension, file.publicUrl)"
          :alt="file.properties.title"
          @error="onError"
        />
      </template>
    </UiFilesList>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { TYPO3CeInstance } from 'nuxt-typo3-ce/types'
import T3CeUploads from 'nuxt-typo3-ce/src/components/T3CeUploads'

import UiFilesList from '../UiFilesList'

const CeUploadsTheme = defineComponent({
  name: 'T3CeUploads',
  components: {
    UiFilesList
  },
  extends: T3CeUploads,
  methods: {
    displayThumbnailOrExtension (type: string): boolean {
      return (
        this.displayInformation === 'filename-extension' ||
        this.displayThumb(type)
      )
    },
    getUrlOrExtension (
      this: TYPO3CeInstance<typeof T3CeUploads>,
      extension: string,
      url: string
    ): string {
      return this.displayInformation === 'filename-extension'
        ? this.getExtensionImg(extension)
        : url
    },
    displayThumb (type: string): boolean {
      return (
        this.displayInformation === 'filename-thumbnail' && type === 'image'
      )
    }
  }
})

export default CeUploadsTheme as typeof T3CeUploads & typeof CeUploadsTheme
</script>
