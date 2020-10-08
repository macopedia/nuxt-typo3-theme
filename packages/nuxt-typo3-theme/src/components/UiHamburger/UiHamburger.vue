<template>
  <button
    class="ui-hamburger"
    :class="{ 'is-open': isOpen }"
    aria-label="menu"
    @click="toggle"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    /**
     * @model  Is Layer open - provided by v-model
     */
    value: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  watch: {
    value (val) {
      this.isOpen = val
    }
  },
  mounted () {
    this.isOpen = this.value
  },
  methods: {
    toggle (): void {
      this.isOpen = !this.isOpen
      this.$emit('input', this.isOpen)
      this.$emit('toggle', this.isOpen)
    }
  }
})
</script>
<style lang="scss">
@import '../../styles/shared/variables';

.ui-hamburger {
  position: relative;
  width: 1em;
  min-width: 4rem;
  height: 1em;
  min-height: 4rem;
  color: var(--color-link-normal);
  background: transparent;
  border: 0;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  div {
    position: absolute;
    top: 100%;
    left: 50%;
    display: block;
    width: 100%;
    height: 100%;
    transform: translateX(-50%) translateY(-50%);
  }

  span {
    position: absolute;
    display: block;
    width: 4rem;
    height: 0.4rem;
    background-color: currentColor;
    border-radius: $border-radius-base;
    transition: transform $transition-duration $transition-function;

    &:first-of-type {
      transform: translateY(-1.2rem);

      & + span + span {
        transform: translateY(1.2rem);
      }
    }
  }

  &.is-open {
    span:first-of-type {
      transform: rotate(45deg);

      & + span {
        opacity: 0;
      }

      & + span + span {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
