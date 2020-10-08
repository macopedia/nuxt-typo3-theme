<template>
  <div
    v-if="header && headerLayout !== 100"
    :class="[headerCss, { [`text-${headerPosition}`]: headerPosition }]"
    class="ce-header"
  >
    <component :is="headerTag" v-if="headerLayout >= 0 && headerLayout !== 100">
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
import { defineComponent } from '@vue/composition-api'
import CeHeader from 'nuxt-typo3-ce/src/components/CeHeader'

const CeHeaderTheme = defineComponent({
  name: 'CeHeader',
  extends: CeHeader
})

export default CeHeaderTheme as typeof CeHeader & typeof CeHeaderTheme
</script>
