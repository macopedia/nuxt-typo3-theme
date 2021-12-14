declare module '*.vue' {
  import Vue from 'vue'
  export default Vue

  declare module 'vue/types/vue' {
    interface Vue {
      $style: Record<string, string>
      $mq: 'sm' | 'md' | 'lg'
      props: typeof this.$props
    }
    interface VueConstructor {
      $style: Record<string, string>
      $mq: 'sm' | 'md' | 'lg'
      // eslint-disable-next-line camelcase
      __nuxt_typo3_overrides_mixin__: boolean
    }
  }
}

declare module '*.svg?inline' {
  const content: VueConstructor<Vue>
  export default content
}

declare module 'body-scroll-lock'
declare module 'v-click-outside';

declare module 'vue-mq' {
  const VueMq: PluginObject
  export default VueMq
}
