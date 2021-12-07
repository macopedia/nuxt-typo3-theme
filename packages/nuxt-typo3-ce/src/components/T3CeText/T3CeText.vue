<template>
  <div class="t3-ce-text">
    <T3CeHeader v-bind="sharedProps" />
    <T3CeHtmlParser :content="bodytext" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { T3CeSharedProps } from '../../../types'
import useSharedProps, {
  getSharedProps
} from '../../composables/useSharedProps'

export default defineComponent({
  name: 'T3CeText',
  props: {
    ...useSharedProps(),
    bodytext: {
      type: String,
      default: ''
    }
  },
  setup (props: T3CeSharedProps) {
    const sharedProps = getSharedProps(props)
    return {
      sharedProps
    }
  }
})
</script>
