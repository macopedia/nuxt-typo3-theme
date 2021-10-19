<template>
  <CeLink class="btn" :class="[`btn--${size}`, `btn--${variant}`]" :to="to">
    <!-- @slot Button content -->
    <slot />
  </CeLink>
</template>
<script lang="ts">
import { PropType, defineComponent } from '@vue/composition-api'
/**
 * The only true button.
 */
export default defineComponent({
  name: 'UiButton',
  props: {
    /**
     * To link
     */
    to: {
      type: String,
      required: true
    },
    /**
     * Color variant
     * @values primary, inverted
     */
    variant: {
      type: String as PropType<'primary' | 'inverted'>,
      default: 'primary'
    },
    /**
     * Button size
     * @values large, medium, small, extra-small
     */
    size: {
      type: String as PropType<'large' | 'medium' | 'small' | 'extra-small'>,
      default: 'large'
    }
  }
})
</script>
<style lang="scss">
@import '../../styles/shared';

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: var(--space-8);
  padding-left: var(--space-8);
  text-decoration: none;
  border-radius: var(--space-2xs);
  box-shadow: var(--box-shadow-sm);

  &:hover,
  &:focus {
    text-decoration: none;
  }

  @include media-query(sm) {
    display: inline-flex;
  }

  &--primary {
    color: var(--color-white);
    background: var(--color-bg-primary);
  }

  &--inverted {
    color: var(--color-black);
    background: var(--color-bg-primary-inverted);
  }

  &--large {
    padding: var(--space-2);

    @include media-query(sm) {
      min-width: 28.4rem;
      padding: var(--space-2) var(--space-10);
    }

    @include text(xl);

    @include media-query(xl) {
      min-width: 34.8rem;
    }

    @include media-query(max md) {
      width: 100%;
    }
  }

  &--medium {
    padding: var(--space-1) var(--space-5);

    @include text(xl);
  }

  &--small {
    padding: 0 var(--space-4);

    @include text(xl);
  }

  &--extra-small {
    padding: 0 var(--space-3);

    @include text(base);
  }
}
</style>
