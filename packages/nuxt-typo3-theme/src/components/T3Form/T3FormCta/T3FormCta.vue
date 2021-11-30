<template>
  <div class="t3-form-cta">
    <UiButton type="reset"> {{ i18n.resetButton }}</UiButton>
    <UiButton  type="submit" :disabled="state.sending">
         {{ state.sending ? i18n.sendingLabel : i18n.submitButton }}
    </UiButton>
  </div>
</template>
<script src="~typo3/components/T3Form/T3FormCta/T3FormCta.vue"/>
<style lang="scss">
@import '../../../styles/shared';
.t3-form-cta {
  text-align: center;

  button {
    margin: var(--space-2) 0;

    @include media-range(mobile) {
      width: 100%;
    }
  }

}
</style>
