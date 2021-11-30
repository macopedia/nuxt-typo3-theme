<template>
  <fieldset class="t3-form-fieldset">
    <div class="t3-form-fieldset__legend">
      <legend> {{ field.label }} </legend>
    </div>
    <slot class="test"/>
  </fieldset>
</template>
<script src="~typo3/components/T3Form/T3FormFieldset/T3FormFieldset.vue"/>
<style lang="scss">
@import '../../../styles/shared';

.t3-form-fieldset {
  border: 0;
  padding: 0;

  @include media-query(md) {
    display: flex;
    margin:  var(--space-6) 0;
    border-top: 1px solid var(--color-border);
    padding-top: var(--space-6);
  }

  &__legend {
    min-width: 30rem;
    padding-top: var(--space-6);
    font-size: var(--font-size-3xl);
    margin-right: var(--space-6);
    margin-bottom: var(--space-6);
  }
}
</style>
