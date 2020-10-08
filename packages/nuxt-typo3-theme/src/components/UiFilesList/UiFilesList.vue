<template>
  <ul class="ui-files-list">
    <li v-for="file in files" :key="file.properties.uidLocal">
      <a class="ui-files-list__file" :href="file.publicUrl" :target="target">
        <figure class="file__image">
          <slot name="image" :file="file" />
          <figcaption v-if="displayFileSizeInformation">
            <small>
              {{ file.properties.size }}
            </small>
          </figcaption>
        </figure>
        <div>
          <UiCaption tag="div" :description="file.properties.title" />
          <p v-if="displayDescription">
            {{ file.properties.description }}
          </p>
        </div>
      </a>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import type { FileList } from 'nuxt-typo3-ce/types'
import UiCaption from '../UiCaption'

export default defineComponent({
  name: 'UiFilesList',
  components: {
    UiCaption
  },
  props: {
    files: {
      type: Array as PropType<FileList>,
      default: () => []
    },
    target: {
      type: String,
      default: '_blank'
    },
    displayDescription: {
      type: Boolean,
      default: false
    },
    displayFileSizeInformation: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss">
.ui-files-list {
  padding: 0;
  list-style: none;

  &__file {
    align-items: flex-start;
    display: flex;

    .file__image {
      text-align: center;
      flex: 0 0 auto;
      margin: 0 var(--space-5) 0 0;

      img {
        width: 3em;
      }
    }
  }
}
</style>
