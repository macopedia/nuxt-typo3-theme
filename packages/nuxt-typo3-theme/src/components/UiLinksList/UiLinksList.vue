<template>
  <ul class="ui-links-list">
    <li v-for="(link, i) in links" :key="i" class="ui-links-list__item">
      <T3NavLink
        class="ui-links-list__link"
        :target="link.target || '_self'"
        :to="link.link"
        >{{ link.title }}</T3NavLink
      >
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

type Link = {
  target: string
  link: string
  title: string
}

export default defineComponent({
  name: 'UiLinksList',
  props: {
    links: {
      type: Array as PropType<Link[]>,
      required: true
    }
  }
})
</script>
<style lang="scss">
@import '../../styles/shared';

.ui-links-list {
  margin: 0;
  padding: 0;
  list-style: none;

  &__link {
    color: var(--color-white);
    text-decoration: none;

    @include text(xl);

    @include media-query(lg) {
      @include text(md);
    }
  }

  &__item {
    margin: var(--space-4) 0;

    @include media-query(lg) {
      margin: var(--space-2) 0;
    }
  }
}
</style>
