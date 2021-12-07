<template>
  <ul v-if="children.length">
    <li v-for="(el, index) in children" :key="index">
      <T3NavLink
        :target="el.target || ''"
        :title="el.title"
        :to="el.link"
        :class="{ 'has-children': el.children }"
        >{{ el.title }}
      </T3NavLink>
      <slot name="link" :link="el.link" />
      <T3CeMenuPagesList v-if="el.children" :children="el.children" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { T3CeMenuPagesMenu } from './T3CeMenuPages.types'

export default Vue.extend({
  name: 'CeMenuPagesList',
  props: {
    children: {
      type: Array as PropType<T3CeMenuPagesMenu>,
      required: true
    }
  }
})
</script>
