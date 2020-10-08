<template>
  <div class="ce-bullets text-rich">
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
import { defineComponent } from '@vue/composition-api'
import CeBullets from 'nuxt-typo3-ce/src/components/CeBullets'

const CeBulletsTheme = defineComponent({
  name: 'CeBullets',
  extends: CeBullets
})

export default CeBulletsTheme as typeof CeBullets & typeof CeBulletsTheme
</script>
