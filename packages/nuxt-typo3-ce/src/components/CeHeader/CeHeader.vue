<template>
  <div
    v-if="header && headerLayout !== 100"
    :class="headerCss"
    class="ce-header"
  >
    <component
      :is="headerTag"
      v-if="headerLayout >= 0 && headerLayout !== 100"
      :class="headerPosition"
    >
      <CeLink v-if="headerLink" :to="headerLink.url">
        {{ header }}
      </CeLink>
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
  name: 'CeHeader',
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
