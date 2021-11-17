<template>
  <nav class="t3-ce-menu-pages">
    <T3CeHeader v-bind="sharedProps" />
    <T3CeMenuPagesList v-if="menu" :children="menu" />
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import T3CeMenuPagesList from './T3CeMenuPagesList.vue'
import { T3CeSharedProps } from '../../../types'
import useSharedProps, {
  getSharedProps
} from '../../composables/useSharedProps'
import { T3CeMenuPagesMenu } from './T3CeMenuPages.types'

export default defineComponent({
  name: 'T3CeMenuPages',
  components: {
    T3CeMenuPagesList
  },
  props: {
    ...useSharedProps(),
    menu: {
      type: Array as PropType<T3CeMenuPagesMenu>,
      required: true
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
