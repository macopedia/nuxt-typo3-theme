<template>
  <div class="ce-text">
    <CeHeader v-bind="sharedProps" />
    <CeHtmlParser :content="bodytext" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { CeSharedProps } from '../../../types'
import useSharedProps, {
  getSharedProps
} from '../../composables/useSharedProps'

export default defineComponent({
  name: 'CeText',
  props: {
    ...useSharedProps(),
    bodytext: {
      type: String,
      default: ''
    }
  },
  setup (props: CeSharedProps) {
    const sharedProps = getSharedProps(props)
    return {
      sharedProps
    }
  }
})
</script>
