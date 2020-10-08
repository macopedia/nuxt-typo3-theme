<template>
  <nav class="ce-menu-pages">
    <CeHeader v-bind="sharedProps" />
    <CeMenuPagesList v-if="menu" :children="menu" />
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import CeMenuPagesList from './CeMenuPagesList.vue'
import { CeSharedProps } from '../../../types'
import useSharedProps, {
  getSharedProps
} from '../../composables/useSharedProps'
import { CeMenuPagesMenu } from './CeMenuPages.types'

export default defineComponent({
  name: 'CeMenuPages',
  components: {
    CeMenuPagesList
  },
  props: {
    ...useSharedProps(),
    menu: {
      type: Array as PropType<CeMenuPagesMenu>,
      required: true
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
