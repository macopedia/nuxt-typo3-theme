<template>
  <div class="t3-ce-felogin">
    <!-- eslint-disable vue/no-v-html -->
    <p v-html="message.header" />
    <p v-html="message.message" />
    <!-- eslint-enable vue/no-v-html -->

    <T3Form ref="form" :elements="elements" @submit="onSubmit">
      <template #cta>
        <UiButton type="submit">
          {{ loginType === 'login' ? 'Log in' : 'Log out' }}
        </UiButton>
      </template>
    </T3Form>
  </div>
</template>
<script src="nuxt-typo3/lib/components/T3CeFeloginLogin/T3CeFeloginLogin.vue"/>
<style lang="scss">
@import '../../styles/shared';
.t3-ce-felogin {
  margin: 0 auto;
  max-width: 32rem;
}
</style>
