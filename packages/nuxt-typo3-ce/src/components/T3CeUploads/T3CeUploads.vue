<template>
  <div class="t3-ce-uploads">
    <T3CeHeader v-bind="$props" />
    <ul v-if="media">
      <li v-for="(file, key) in media" :key="key">
        <NavLink :to="file.publicUrl" :target="target">
          <span
            v-if="displayInformation === 'filename-extension'"
            class="t3-ce-uploads__icon"
          >
            <img
              :src="getExtensionImg(file.properties.extension)"
              @error="onError"
            />
          </span>
          <span
            v-if="
              displayInformation === 'filename-thumbnail' &&
              file.properties.type === 'image'
            "
            class="t3-ce-uploads__thumb"
          >
            <T3MediaFile :file="file" />
          </span>
          <span class="t3-ce-uploads__name">
            {{ file.properties.title || file.publicUrl }}
          </span>
          <span v-if="displayFileSizeInformation" class="t3-ce-uploads__size">
            {{ file.properties.size }}
          </span>
        </NavLink>
        <p
          v-if="displayDescription && file.properties.description"
          class="t3-ce-uploads__desc"
        >
          {{ file.properties.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import type { FileList } from 'nuxt-typo3-ce/types'
import useSharedProps from '../../composables/useSharedProps'
import useUrlMethods from '../../composables/useUrlMethods'

export default defineComponent({
  name: 'T3CeUploads',
  props: {
    ...useSharedProps(),
    media: {
      type: Array as PropType<FileList>,
      required: true,
      default: () => []
    },
    displayDescription: {
      type: Boolean,
      required: false,
      default: false
    },
    displayFileSizeInformation: {
      type: Boolean,
      required: false,
      default: false
    },
    displayInformation: {
      type: String,
      required: false,
      default: 'filename-extension'
    },
    target: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup (_, { root }) {
    const { getApiUrl } = useUrlMethods(root)

    return {
      getApiUrl
    }
  },
  methods: {
    getExtensionImg (extension: string) {
      return this.getApiUrl(
        `typo3/sysext/frontend/Resources/Public/Icons/FileIcons/${extension}.gif`
      )
    },
    onError (err: { target: HTMLImageElement }) {
      // resolve default icon on error
      // @todo make it nicer
      // https://github.com/TYPO3/TYPO3.CMS/tree/master/typo3/sysext/core/Resources/Public/Icons/T3Icons/mimetypes
      if (err.target) {
        err.target.src = this.getExtensionImg('default')
      }
    }
  }
})
</script>
