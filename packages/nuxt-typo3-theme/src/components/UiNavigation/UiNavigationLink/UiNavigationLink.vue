<template>
  <component
    :is="tag"
    class="ui-navigation-link"
    :class="{
      'is-open': state.isOpen,
      'has-parent': state.hasParent,
      'has-children': state.hasChildren
    }"
    :to="toAttribute"
  >
    <slot name="label" :label="item"> {{ item.title }} </slot>
    <UiIcon v-if="icon" v-bind="icon" class="icon" />
  </component>
</template>
<script lang="ts">
import type { UiNavigationLink } from '../UiNavigation.types'
import UiIcon from '../../UiIcon'
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  name: 'UiNavigationLink',
  components: {
    UiIcon
  },
  props: {
    /* Current key */
    id: {
      type: Number,
      required: true
    },
    /* UiNavigationLink link */
    item: {
      type: Object as PropType<UiNavigationLink>,
      required: true
    },
    /* Additional state */
    state: {
      type: Object as PropType<{
        isOpen: boolean
        hasParent: boolean
        hasChildren: boolean
      }>,
      required: false,
      default: () => ({
        isOpen: false,
        hasParent: false,
        hasChildren: false
      })
    }
  },
  computed: {
    tag (): string {
      return this.item.children ? 'span' : 'CeLink'
    },
    toAttribute (): string | null {
      return this.item.children ? null : this.item.link
    },
    icon (): Record<string, string> | null {
      const state = this.state
      if (this.item.target) {
        return {
          name: 'externalLink'
        }
      }
      if (this.item.children) {
        return {
          name: 'chevron',
          class: state.isOpen ? 'svg-down' : ''
        }
      }
      return null
    }
  }
})
</script>
<style lang="scss">
@use "sass:map";

@import '../../../styles/shared';
@import '../../UiNavbar/UiNavbar.variables';

.ui-navigation-link {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: var(--space-sm) 0;
  cursor: pointer;

  &.has-parent {
    @include media-query($ui-navbar-break-on) {
      margin: 0;
    }
  }

  &.has-children {
    &,
    &:hover,
    &.nuxt-link-exact-active {
      @include media-query($ui-navbar-break-on) {
        border-bottom-color: transparent;
      }
    }
  }

  @include media-query($ui-navbar-break-on) {
    margin: 0 var(--space-1);
    padding: var(--space-4) var(--space-4);
    border-bottom: 2px solid transparent;
  }

  @include media-query(max-width $ui-navbar-break-on) {
    padding-right: var(--space-sm);
    padding-left: var(--space-sm);
  }

  &:hover,
  &.nuxt-link-exact-active {
    @include media-query(max-width $ui-navbar-break-on) {
      color: #fff;
      background: var(--color-primary);
    }

    @include media-query($ui-navbar-break-on) {
      border-color: var(--color-primary);
    }
  }

  .icon {
    margin-left: auto;
    font-size: var(--font-size-sm);

    @include media-query($ui-navbar-break-on) {
      margin-left: 1em;
    }
  }
}
</style>
