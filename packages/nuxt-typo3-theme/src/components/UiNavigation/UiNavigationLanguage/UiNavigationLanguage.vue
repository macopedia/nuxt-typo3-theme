<template>
  <UiNavigationList
    :links="languages"
    class="ui-navigation-language"
    v-on="$listeners"
  >
    <template #label="{label}">
      <span class="flag flag--label">
        {{ label.twoLetterIsoCode }}
      </span>
    </template>
  </UiNavigationList>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import type {
  UiNavigationLanguageLinks,
  UiNavigationLanguageLink
} from './UiNavigationLanguage.types'
import UiNavigationList from '../UiNavigationList'

export default defineComponent({
  name: 'UiNavigationLanguage',
  components: {
    UiNavigationList
  },
  props: {
    /**
     * Languages array
     */
    links: {
      type: Array as PropType<UiNavigationLanguageLinks>,
      required: true
    }
  },
  computed: {
    languages (): UiNavigationLanguageLinks {
      const links = [...this.links]
      const current = {
        ...links.find((item, key) => {
          if (item.active) {
            links.splice(key, 1)
          }
          return item.active
        })
      } as UiNavigationLanguageLink

      if (current) {
        current.children = links
      }

      return [current] || this.links
    }
  }
})
</script>
<style lang="scss">
@import '../../../styles/shared';
@import '../../UiNavbar/UiNavbar.variables';

.ui-navigation-language {
  @include media-query($ui-navbar-break-on) {
    flex: initial;

    .has-parent {
      flex-direction: column;
    }

    .label {
      display: none;
    }
  }

  .flag {
    margin-right: var(--space-3);
    text-transform: uppercase;

    @include media-query($ui-navbar-break-on) {
      margin-right: 0;
    }
  }

  .ui-navigation-list {
    @include media-query($ui-navbar-break-on) {
      min-width: 7rem;

      .ui-navigation-link {
        align-items: start;
        width: auto;
        padding-left: var(--space-5);
      }
    }
  }
}
</style>
