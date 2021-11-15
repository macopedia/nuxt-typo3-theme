<template>
  <header class="ui-navbar">
    <component :is="containerWrapper" class="ui-navbar__wrapper">
      <div class="ui-navbar__logo">
        <!-- @slot Logo placeholder -->
        <slot name="logo">{{ logo }} </slot>
      </div>

      <component
        :is="navigationWrapper"
        v-model="isNavigationOpen"
        class="ui-navbar__nav"
        keep-header
        keep-visible
      >
        <UiNavigation
          :links="links"
          :languages="languages"
          class="bg-white"
          @click="() => toggle(false)"
        />
      </component>

      <UiHamburger v-model="isNavigationOpen" class="ui-navbar__hamburger" />
    </component>
  </header>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import useUiState from '../../composables/useUiState'
import { UiContainer } from '../UiGrid'
import UiLayer from '../UiLayer'
import UiHamburger from '../UiHamburger'
import UiNavigation from '../UiNavigation'
import type { UiNavbarLinks, UiNavbarLanguages } from './UiNavbar.types'

export default defineComponent({
  name: 'UiNavbar',
  components: {
    UiHamburger,
    UiNavigation,
    UiLayer,
    UiContainer
  },
  props: {
    /**
     * Logo string instead of slot
     */
    logo: {
      type: String,
      default: 'Provide your logo by slot'
    },
    /**
     * Navigation menu array
     */
    links: {
      type: Array as PropType<UiNavbarLinks>,
      required: true
    },
    /**
     * Langauges array
     */
    languages: {
      type: Array as PropType<UiNavbarLanguages>,
      default: () => []
    },
    /**
     * Should add container ?
     */
    withContainer: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    /**
     * Display menu as fixed layer on
     */
    breakOn: {
      type: Array as PropType<string[]>,
      default: () => ['xl', 'xxl']
    }
  },
  setup () {
    const { setUiOption } = useUiState()
    return {
      setUiOption
    }
  },
  data () {
    return {
      /**
       * Should be menu opened
       */
      isNavigationOpen: false
    }
  },
  computed: {
    containerWrapper (): string {
      return this.withContainer ? 'UiContainer' : 'div'
    },
    navigationWrapper (): string {
      const $mq = this.$mq as string
      return this.breakOn.some(query => query === $mq) ? 'div' : 'UiLayer'
    }
  },
  mounted () {
    this.setUiOption('headerRef', this.$el)
  },
  methods: {
    toggle (state: boolean) {
      this.isNavigationOpen = state
    }
  }
})
</script>
<style lang="scss">
@import '../../styles/shared';
@import './UiNavbar.variables';

:root {
  --ui-navbar-bg: #{$ui-navbar-bg};
  --ui-navbar-border: #{$ui-navbar-border};
  --ui-navbar-min-height: #{$ui-navbar-min-height};
}

.ui-navbar {
  position: sticky;
  top: 0;
  left: 0;
  z-index: $z-index-over;
  width: 100%;
  background: var(--ui-navbar-bg);
  border-bottom: 1px solid transparent;
  box-shadow: var(--box-shadow-base);

  @include media-query($ui-navbar-break-on) {
    border-color: var(--ui-navbar-border);
    box-shadow: none;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    min-height: var(--ui-navbar-min-height);

    @include media-query($ui-navbar-break-on) {
      flex-direction: row;
      justify-content: center;
    }
  }

  &__logo {
    flex: 0 1 200px;
  }

  &__nav {
    align-self: normal;
    margin-left: auto;
    background: inherit;
  }

  &__hamburger {
    margin-left: auto;

    @include media-query($ui-navbar-break-on) {
      display: none;
    }
  }
}
</style>
