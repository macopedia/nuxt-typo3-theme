<template>
  <ul v-if="children.length">
    <li
      v-for="(child, index) in children"
      :key="index"
      :class="{ 'is-expanded': isExpanded && expandedMenu === child }"
      v-on="{
        ...(child.children && {
          click: openSubmenu(child, index)
        })
      }"
    >
      <T3NavLink
        :ref="`${child.link}-${index}`"
        :target="child.target || ''"
        :title="child.title"
        :to="child.link"
        :class="{
          'has-children': child.children
        }"
        >{{ child.title }}
      </T3NavLink>
      <slot name="link" :link="child.link" />
      <T3CeMenuPagesList v-if="child.children" :children="child.children" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue/types'
import { defineComponent } from '@vue/composition-api'
import { T3CeMenuPagesItem } from 'nuxt-typo3-ce/src/components/T3CeMenuPages/T3CeMenuPages.types'
import T3CeMenuPagesList from 'nuxt-typo3-ce/src/components/T3CeMenuPages/T3CeMenuPagesList.vue'

const CeMenuPagesListTheme = defineComponent({
  extends: T3CeMenuPagesList,
  data () {
    return {
      expandedMenu: null as T3CeMenuPagesItem | null,
      isExpanded: false
    }
  },
  methods: {
    openSubmenu (child: T3CeMenuPagesItem, index: number) {
      return (ev: Event) => {
        const ref = this.$refs[`${child.link}-${index}`] as Vue[] | Element[]
        const anchor = (ref[0] as Vue).$el || ref[0]

        if (ev.target === anchor) {
          ev.preventDefault()
          this.toggleExpandClass(child)
        }
      }
    },
    toggleExpandClass (child: T3CeMenuPagesItem) {
      this.expandedMenu = child
      this.isExpanded = !this.isExpanded
    }
  }
})

export default CeMenuPagesListTheme as typeof T3CeMenuPagesList &
  typeof CeMenuPagesListTheme
</script>
