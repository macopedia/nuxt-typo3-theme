<template>
  <ul v-if="children.length">
    <li v-for="(el, index) in children" :key="index">
      <CeLink
        :target="el.target || ''"
        :title="el.title"
        :to="el.link"
        :class="{ 'has-children': el.children }"
        >{{ el.title }}
      </CeLink>
      <slot name="link" :link="el.link" />
      <CeMenuPagesList v-if="el.children" :children="el.children" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { CeMenuPagesMenu } from './CeMenuPages.types'

export default Vue.extend({
  name: 'CeMenuPagesList',
  props: {
    children: {
      type: Array as PropType<CeMenuPagesMenu>,
      required: true
    }
  }
})
</script>
