<template>
  <div class="t3-ce-bullets text-rich">
    <T3CeHeader v-bind="sharedProps" />
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
import T3CeBullets from 'nuxt-typo3-ce/src/components/T3CeBullets'

const T3CeBulletsTheme = defineComponent({
  name: 'T3CeBullets',
  extends: T3CeBullets
})

export default T3CeBulletsTheme as typeof T3CeBullets & typeof T3CeBulletsTheme
</script>
