<template>
  <nav class="ui-breadcrumbs">
    <UiIcon class="ui-breadcrumbs__icon" name="home" />
    <ul class="ui-breadcrumbs__list">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.link">
        <nuxt-link :to="breadcrumb.link">
          {{ breadcrumb.title }}
        </nuxt-link>
        {{ getDivider(index) }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import type { Breadcrumbs } from './UiBreadcrumbsList.types'
import UiIcon from '../UiIcon'

export default defineComponent({
  name: 'UiBreadcrumbsList',
  components: {
    UiIcon
  },
  props: {
    breadcrumbs: {
      type: Array as PropType<Breadcrumbs>,
      required: true
    }
  },
  methods: {
    getDivider (index: number): string {
      return this.breadcrumbs.length - 1 > index ? '/' : ''
    }
  }
})
</script>

<style lang="scss">
.ui-breadcrumbs {
  margin: var(--space-3) 0;
  display: flex;
  align-items: baseline;

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;

    li {
      margin-right: var(--space-1);
    }
  }

  &__icon {
    width: 0.8em;
    height: 0.8em;
    margin-right: var(--space-1);
  }
}
</style>
