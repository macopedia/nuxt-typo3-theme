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
      <CeLink
        :ref="`${child.link}-${index}`"
        :target="child.target || ''"
        :title="child.title"
        :to="child.link"
        :class="{
          'has-children': child.children
        }"
        >{{ child.title }}
      </CeLink>
      <slot name="link" :link="child.link" />
      <CeMenuPagesList v-if="child.children" :children="child.children" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue/types'
import { defineComponent } from '@vue/composition-api'
import { CeMenuPagesItem } from 'nuxt-typo3-ce/src/components/CeMenuPages/CeMenuPages.types'
import CeMenuPagesList from 'nuxt-typo3-ce/src/components/CeMenuPages/CeMenuPagesList.vue'

const CeMenuPagesListTheme = defineComponent({
  extends: CeMenuPagesList,
  data () {
    return {
      expandedMenu: null as CeMenuPagesItem | null,
      isExpanded: false
    }
  },
  methods: {
    openSubmenu (child: CeMenuPagesItem, index: number) {
      return (ev: Event) => {
        const ref = this.$refs[`${child.link}-${index}`] as Vue[] | Element[]
        const anchor = (ref[0] as Vue).$el || ref[0]

        if (ev.target === anchor) {
          ev.preventDefault()
          this.toggleExpandClass(child)
        }
      }
    },
    toggleExpandClass (child: CeMenuPagesItem) {
      this.expandedMenu = child
      this.isExpanded = !this.isExpanded
    }
  }
})

export default CeMenuPagesListTheme as typeof CeMenuPagesList &
  typeof CeMenuPagesListTheme
</script>
