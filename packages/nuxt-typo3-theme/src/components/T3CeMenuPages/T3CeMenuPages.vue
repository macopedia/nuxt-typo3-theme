<template>
  <nav class="t3-ce-menu-pages">
    <T3CeHeader v-bind="sharedProps" />
    <T3CeMenuPagesList v-if="menu" :children="menu" />
  </nav>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import T3CeMenuPages from 'nuxt-typo3-ce/src/components/T3CeMenuPages'
import T3CeMenuPagesList from './T3CeMenuPagesList.vue'

const CeMenuPagesTheme = defineComponent({
  name: 'T3CeMenuPages',
  components: {
    T3CeMenuPagesList
  },
  extends: T3CeMenuPages
})
export default CeMenuPagesTheme as typeof T3CeMenuPages & typeof CeMenuPagesTheme
</script>
<style lang="scss">
@import '../../styles/shared';

$color-menu-pages: $palette-mercury;

:root {
  --color-menu-pages: #{$color-menu-pages};
}

.t3-ce-menu-pages {
  ul {
    font-size: var(--font-size-lg);
    background: var(--color-menu-pages);

    @include media-query(md) {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      position: relative;
      padding: var(--space-4) var(--space-4);

      ul {
        top: 100%;
        display: none;
        min-width: 100%;
        margin-top: var(--space-4);
        margin-bottom: -1.6rem;
        border-top: 1px solid var(--color-bg-secondary);

        @include media-query(md) {
          position: absolute;
          margin-top: 0;
        }

        li {
          white-space: nowrap;
        }
      }

      &.is-expanded {
        ul {
          display: block;
        }
      }

      a {
        text-decoration: underline;

        &[target='_blank'],
        &.has-children {
          position: relative;
          margin-right: 1rem;

          &::after {
            position: absolute;
            top: 50%;
            display: block;
            margin-top: 0.1rem;
            background-size: cover;
            transform: translateY(-50%);
            content: '';
          }
        }

        &[target='_blank']::after {
          right: -1.8rem;
          width: 1rem;
          height: 1rem;
          background-image: url('../../assets/icons/externalLink.svg');
        }

        &.has-children::after {
          right: -2.5rem;
          width: 1.7rem;
          height: 1.1rem;
          background-image: url('../../assets/icons/chevron.svg');
        }
      }

      &::before {
        position: static;
        margin-right: 1em;
        color: currentColor;
        font-size: 0.5em;
        vertical-align: middle;
        content: '\25CF';
      }
    }
  }
}
</style>
