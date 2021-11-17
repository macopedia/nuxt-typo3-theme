<template>
  <div
    v-if="header && headerLayout !== 100"
    :class="headerCss"
    class="t3-ce-header"
  >
    <component
      :is="headerTag"
      v-if="headerLayout >= 0 && headerLayout !== 100"
      :class="headerPosition"
    >
      <T3NavLink v-if="headerLink" :to="headerLink.url">
        {{ header }}
      </T3NavLink>
      <template v-else>{{ header }}</template>
    </component>
    <component :is="subheaderTag" v-if="subheader">
      {{ subheader }}
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from '@vue/composition-api'
import useSharedProps from '../../composables/useSharedProps'
import useHeaderTags from '../../composables/useHeaderTags'

export default defineComponent({
  name: 'T3CeHeader',
  props: {
    ...useSharedProps()
  },
  setup (props) {
    const { headerLayout, headerPosition } = toRefs(props)
    const { headerTag, subheaderTag, headerCss } = useHeaderTags(
      headerLayout,
      headerPosition
    )

    return {
      headerTag,
      subheaderTag,
      headerCss
    }
  }
})
</script>
