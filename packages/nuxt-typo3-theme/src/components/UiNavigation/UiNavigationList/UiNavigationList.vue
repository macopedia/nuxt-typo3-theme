<template>
  <ul
    v-if="links.length"
    v-click-outside="() => active=null"
    class="ui-navigation-list"
    :class="{
      'ui-navigation-list__dropdown': parent
    }"
  >
    <li v-for="(item, key) in links" :key="key">
      <UiNavigationLink
        :id="key"
        :item="item"
        :state="{
          isOpen: active === key,
          hasParent: parent,
          hasChildren: item.children
        }"
        @click.native="onClick(item, key, parent ? parent : undefined)"
      >
        <template v-for="(_, slot) in $scopedSlots" #[slot]="props">
          <slot :name="slot" v-bind="props" />
        </template>
      </UiNavigationLink>

      <template v-if="item.children">
        <UiNavigationList
          v-show="active === key"
          :aria-expanded="active === key"
          :links="item.children"
          :parent="item"
          v-on="$listeners"
          @click:nested="active = null"
        >
          <template v-for="(_, slot) in $scopedSlots" #[slot]="props">
            <slot :name="slot" v-bind="props" />
          </template>
        </UiNavigationList>
      </template>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import type {
  UiNavigationLink as UiNavigationLinkType,
  UiNavigationLinks
} from '../UiNavigation.types'
import UiNavigationLink from '../UiNavigationLink'

export default defineComponent({
  name: 'UiNavigationList',
  components: {
    UiNavigationLink
  },
  props: {
    /**
     * Array of links
     */
    links: {
      type: Array as PropType<UiNavigationLinks>,
      default: [] as UiNavigationLinks
    },
    /**
     * Parent of current navigation level
     */
    parent: {
      type: Object as PropType<UiNavigationLinkType | null>,
      required: false,
      default: null
    }
  },
  data () {
    return {
      active: null as number | null
    }
  },
  methods: {
    onClick (
      item: UiNavigationLinkType,
      key: number,
      parent?: UiNavigationLinkType
    ): void {
      if (parent) {
        this.$emit('click:nested')
        this.active = null
      }
      if (item.children) {
        this.active = this.active === key ? null : key
      } else {
        this.active = null
        this.$emit('click')
      }
    }
  }
})
</script>
<style lang="scss">
@import '../../../styles/shared';
@import '../../UiNavbar/UiNavbar.variables';

.ui-navigation-list {
  margin: 0;

  @include media-query($ui-navbar-break-on) {
    display: flex;
    flex: 1;
  }

  li {
    position: relative;
  }

  &__dropdown {
    @include media-query($ui-navbar-break-on) {
      position: absolute;
      flex-direction: column;
      min-width: 100%;
      white-space: nowrap;
      background: var(--ui-navbar-bg);
      border: 1px solid var(--color-border);
      border-top: 0;

      li {
        width: 100%;
        margin: 0;
      }
    }
  }
}
</style>
