<template>
  <footer class="cw-footer">
    <UiContainer class="cw-footer__container">
      <UiRow>
        <UiCol col="lg">
          <UiLogo :width="250" invert />
        </UiCol>
        <UiCol v-if="footerNavigation" col="lg">
          <UiLinksList :links="footerNavigation" />
        </UiCol>
        <UiCol v-if="footerContactData" col="lg">
          <T3CeText
            class="cw-footer__text"
            :header="footerContactData.header"
            :header-layout="2"
            :bodytext="footerContactData.bodytext"
          />
        </UiCol>
        <UiCol v-if="socialMenu" col="lg">
          <UiIconsList :icons="socialMenu" />
        </UiCol>
      </UiRow>
    </UiContainer>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'
import UiIconsList from '../UiIconsList'
import UiLinksList from '../UiLinksList'
import UiLogo from '../UiLogo'

const CwFooterTheme = defineComponent({
  name: 'CwFooter',
  components: {
    UiLinksList,
    UiIconsList,
    UiLogo
  },
  computed: {
    ...mapGetters(['footerNavigation', 'socialMenu', 'footerContactData'])
  }
})

export default CwFooterTheme as typeof CwFooterTheme
</script>
<style lang="scss">
@import '../../styles/shared';

.cw-footer {
  padding: var(--space-6) 0;
  background: var(--color-bg-primary);

  &__text {
    .t3-ce-header {
      h2 {
        font-size: var(--font-size-3xl);
      }
    }
  }

  @include media-query(lg) {
    background: var(--color-bg-secondary);
  }

  .col {
    margin-top: var(--space-2);
  }

  &,
  a {
    color: var(--color-white);
  }
}
</style>
