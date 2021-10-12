<template>
  <UiNavigationList
    :links="languages"
    class="ui-navigation-language"
    v-on="$listeners"
  >
    <template #label="{label}">
      <img
        v-if="getFlagImage(label.twoLetterIsoCode)"
        class="flag"
        width="28"
        :alt="label.navigationTitle"
        :src="getFlagImage(label.twoLetterIsoCode)"
      />
      <span v-else class="flag flag--label">
        {{ label.twoLetterIsoCode }}
      </span>
      <span class="label">
        {{ label.title }}
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
    },
    preset: {
      type: Object as PropType<Record<string, string>>,
      default: () => ({
        en: require(`svg-country-flags/svg/gb.svg`)
      })
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
  },
  methods: {
    getFlagImage (twoLetterIsoCode: string): string | undefined {
      try {
        if (
          Object.prototype.hasOwnProperty.call(this.preset, twoLetterIsoCode)
        ) {
          return this.preset[twoLetterIsoCode]
        }
        return require(`assets/flags/${twoLetterIsoCode}.svg`)
      } catch {
        return undefined
      }
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
    height: var(--space-4);
    margin-right: var(--space-3);

    @include media-query($ui-navbar-break-on) {
      margin-right: 0;
    }

    &--label {
      display: none;

      @include media-query($ui-navbar-break-on) {
        display: initial;
      }
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
