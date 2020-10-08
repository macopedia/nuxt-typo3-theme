<template>
  <nav class="ce-menu-pages">
    <CeHeader v-bind="sharedProps" />
    <CeMenuPagesList v-if="menu" :children="menu" />
  </nav>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CeMenuPages from 'nuxt-typo3-ce/src/components/CeMenuPages'
import CeMenuPagesList from './CeMenuPagesList.vue'

const CeMenuPagesTheme = defineComponent({
  name: 'CeMenuPages',
  components: {
    CeMenuPagesList
  },
  extends: CeMenuPages
})
export default CeMenuPagesTheme as typeof CeMenuPages & typeof CeMenuPagesTheme
</script>
<style lang="scss">
@import '../../styles/shared';

$color-menu-pages: $palette-mercury;

:root {
  --color-menu-pages: #{$color-menu-pages};
}

.ce-menu-pages {
  ul {
    background: var(--color-menu-pages);
    font-size: var(--font-size-lg);

    @include media-query(md) {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      padding: var(--space-4) var(--space-4);
      position: relative;

      ul {
        top: 100%;
        min-width: 100%;
        border-top: 1px solid var(--color-bg-secondary);
        margin-top: var(--space-4);
        margin-bottom: -1.6rem;
        display: none;

        @include media-query(md) {
          margin-top: 0;
          position: absolute;
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
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            display: block;
            background-size: cover;
            margin-top: 0.1rem;
          }
        }

        &[target='_blank']::after {
          background-image: url('../../assets/icons/externalLink.svg');
          width: 1rem;
          height: 1rem;
          right: -1.8rem;
        }

        &.has-children::after {
          background-image: url('../../assets/icons/chevron.svg');
          width: 1.7rem;
          height: 1.1rem;
          right: -2.5rem;
        }
      }

      &::before {
        position: static;
        content: '\25CF';
        font-size: 0.5em;
        vertical-align: middle;
        color: currentColor;
        margin-right: 1em;
      }
    }
  }
}
</style>
