<template>
  <div class="ce-bullets">
    <CeHeader v-bind="sharedProps" />
    <ul :is="listTag" v-if="showBaseList">
      <li v-for="(el, i) in bodytext" :key="i">
        {{ el }}
      </li>
    </ul>
    <dl v-else>
      <template v-for="(el, i) in bodytext">
        <dt :key="`${i}-0`">
          {{ el[0] }}
        </dt>
        <dd v-if="el[1]" :key="`${i}-1`">
          {{ el[1] }}
        </dd>
      </template>
    </dl>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import type { CeSharedProps } from '../../composables/useSharedProps/sharedProps.types'
import useSharedProps, {
  getSharedProps
} from '../../composables/useSharedProps'

export default defineComponent({
  name: 'CeBullets',
  props: {
    ...useSharedProps(),
    bodytext: {
      type: Array as PropType<string[] | [string, string][]>,
      default: () => []
    },
    bulletsType: {
      type: Number,
      default: 0
    }
  },
  setup (props: CeSharedProps) {
    const sharedProps = getSharedProps(props)
    return {
      sharedProps
    }
  },
  computed: {
    listTag (): string {
      return this.bulletsType === 1 ? 'ol' : 'ul'
    },
    // Base List is <ul> or <ol>, otherwise the <dl> will be used
    showBaseList (): boolean {
      return this.bulletsType === 0 || this.bulletsType === 1
    }
  }
})
</script>
