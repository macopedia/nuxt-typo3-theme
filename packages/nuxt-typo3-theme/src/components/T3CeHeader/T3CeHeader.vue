<template>
  <div
    v-if="header && headerLayout !== 100"
    :class="[headerCss, { [`text-${headerPosition}`]: headerPosition }]"
    class="t3-ce-header"
  >
    <component :is="headerTag" v-if="headerLayout >= 0 && headerLayout !== 100">
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
import { defineComponent } from '@vue/composition-api'
import T3CeHeader from 'nuxt-typo3-ce/src/components/T3CeHeader'

const CeHeaderTheme = defineComponent({
  name: 'T3CeHeader',
  extends: T3CeHeader
})

export default CeHeaderTheme as typeof T3CeHeader & typeof CeHeaderTheme
</script>
