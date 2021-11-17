<template>
  <div class="ui-icons-list">
    <T3NavLink
      v-for="(icon, i) in icons"
      :key="i"
      class="ui-icons-list__item"
      :to="icon.link"
    >
      <img
        height="32"
        width="32"
        :src="require(`../../assets/socials/${icon.icon.toLowerCase()}.svg`)"
        :alt="icon.title"
      />
    </T3NavLink>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

type Icon = {
  link: string
  title: string
  icon: string
}

export default defineComponent({
  name: 'UiIconsList',
  props: {
    icons: {
      type: Array as PropType<Icon[]>,
      required: true
    }
  }
})
</script>
<style lang="scss">
@import '../../styles/shared';

.ui-icons-list {
  display: flex;

  &__item {
    display: block;
    margin-right: var(--space-2);
  }
}
</style>
