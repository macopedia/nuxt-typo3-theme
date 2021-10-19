<template>
  <section class="container error">
    <UiLogo class="error__logo" />
    <h1 class="error__code">
      {{ error.code }}
    </h1>
    <p class="error__header">
      {{ errorAdditionalInfo.nothingIsHere }}
    </p>
    <p class="error__subheader">
      {{ error.message }}
    </p>
    <UiButton class="error__button" :to="'/'">
      {{ errorAdditionalInfo.goBackToHomepage }}
    </UiButton>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import UiButton from '../UiButton'

export default defineComponent({
  name: 'UiErrorPage',
  components: {
    UiButton
  },
  props: {
    error: {
      type: Object,
      default: () => ({})
    },
    errorAdditionalInfo: {
      type: Object,
      default: () => ({})
    }
  }
})
</script>

<style lang="scss">
.error {
  display: flex;
  flex-direction: column;
  align-items: center;

  .error__logo {
    margin: 5rem 0;
  }

  .error__code {
    font-size: 15rem;
    line-height: 17rem;
  }

  .error__header {
    font-weight: bold;
    font-size: 3.5rem;
  }

  .error__subheader {
    font-size: 2rem;
    text-align: center;
  }

  .error__button {
    margin: 5rem 0;

    .btn {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
}
</style>
