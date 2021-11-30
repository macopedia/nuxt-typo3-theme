<template>
  <nav class="ui-navigation">
    <UiNavigationList :links="links" v-on="$listeners" />
    <UiNavigationLanguage
      v-if="languages.length"
      :links="languages"
      v-on="$listeners"
    />
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import UiNavigationList from './UiNavigationList'
import UiNavigationLanguage from './UiNavigationLanguage'
import type { UiNavigationLinks } from './UiNavigation.types'
import type { UiNavigationLanguageLinks } from './UiNavigationLanguage/UiNavigationLanguage.types'
export default defineComponent({
  name: 'UiNavigation',
  components: {
    UiNavigationList,
    UiNavigationLanguage
  },
  props: {
    /**
     * Array of links
     */
    links: {
      type: Array as PropType<UiNavigationLinks>,
      default: () => []
    },
    /**
     * Array of language list
     */
    languages: {
      type: Array as PropType<UiNavigationLanguageLinks>,
      default: () => []
    }
  }
})
</script>
<style lang="scss">
@import '../../styles/shared';
@import '../UiNavbar/UiNavbar.variables';

$ui-navigation-fs: 2rem !default;
$ui-navigation-lh: 3.2rem !default;

:root {
  --ui-navigation-fs: #{$ui-navigation-fs};
  --ui-navigation-lh: #{$ui-navigation-lh};
}

.ui-navigation {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: var(--ui-navigation-fs);
  line-height: var(--ui-navigation-lh);

  @include media-query($ui-navbar-break-on) {
    --ui-navigation-fs: 1.6rem;

    flex-direction: row;
  }
}
</style>
